import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";

/**
 * Documentation loader for /docs.
 *
 * content/docs/<NN>-<category>/index.json      → { title, description, icon }
 * content/docs/<NN>-<category>/<NN>-<slug>.md  → frontmatter { title, description } + Markdown body
 *
 * The NN- prefixes only set the order; they are stripped from URLs.
 */

const DOCS_DIR = path.join(process.cwd(), "content", "docs");
export const DOCS_BASE = "/docs";

export type DocHeading = { id: string; text: string; level: 2 | 3 };

export type DocArticle = {
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  description: string;
  href: string;
  html: string;
  headings: DocHeading[];
};

export type DocCategory = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  articles: DocArticle[];
};

/** What the client-side search needs for one article. */
export type DocSearchEntry = {
  title: string;
  description: string;
  category: string;
  href: string;
  headings: { id: string; text: string }[];
};

const ORDER_PREFIX = /^\d+-/;
const byPrefix = (a: string, b: string) => a.localeCompare(b, "en", { numeric: true });

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&[a-z]+;|&#\d+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

function stripTags(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const escapeAttr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const CALLOUT = /^<p><strong>(Tip|Note|Important|Warning):<\/strong>/;

/** Markdown → HTML with heading ids, callout blockquotes, safe external links and scrollable tables. */
function renderMarkdown(markdown: string) {
  const headings: DocHeading[] = [];
  const usedIds = new Map<string, number>();

  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const inner = this.parser.parseInline(tokens);
        const text = stripTags(inner);
        const base = slugify(text) || "section";
        const seen = usedIds.get(base) ?? 0;
        usedIds.set(base, seen + 1);
        const id = seen ? `${base}-${seen}` : base;
        if (depth === 2 || depth === 3) headings.push({ id, text, level: depth });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      blockquote({ tokens }: Tokens.Blockquote) {
        const body = this.parser.parse(tokens);
        const kind = body.match(CALLOUT)?.[1]?.toLowerCase();
        return `<blockquote${kind ? ` data-callout="${kind}"` : ""}>\n${body}</blockquote>\n`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href);
        return `<a href="${escapeAttr(href)}"${title ? ` title="${escapeAttr(title)}"` : ""}${
          external ? ' target="_blank" rel="noopener noreferrer"' : ""
        }>${text}</a>`;
      },
    },
  });

  const html = (marked.parse(markdown, { async: false }) as string)
    .replace(/<table>/g, '<div class="docs-table"><table>')
    .replace(/<\/table>/g, "</table></div>");

  return { html, headings };
}

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

function loadCategories(): DocCategory[] {
  const dirs = fs
    .readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && ORDER_PREFIX.test(d.name))
    .map((d) => d.name)
    .sort(byPrefix);

  return dirs.map((dir) => {
    const slug = dir.replace(ORDER_PREFIX, "");
    const meta = readJson<{ title: string; description: string; icon: string }>(
      path.join(DOCS_DIR, dir, "index.json")
    );
    const href = `${DOCS_BASE}/${slug}`;

    const files = fs
      .readdirSync(path.join(DOCS_DIR, dir))
      .filter((f) => f.endsWith(".md") && ORDER_PREFIX.test(f))
      .sort(byPrefix);

    const articles = files.map((file): DocArticle => {
      const source = fs.readFileSync(path.join(DOCS_DIR, dir, file), "utf8");
      const { data, content } = matter(source);
      const articleSlug = file.replace(ORDER_PREFIX, "").replace(/\.md$/, "");
      if (typeof data.title !== "string" || typeof data.description !== "string") {
        throw new Error(`content/docs/${dir}/${file} needs a "title" and "description" in its frontmatter`);
      }
      const { html, headings } = renderMarkdown(content);
      return {
        slug: articleSlug,
        categorySlug: slug,
        categoryTitle: meta.title,
        title: data.title,
        description: data.description,
        href: `${href}/${articleSlug}`,
        html,
        headings,
      };
    });

    return { slug, title: meta.title, description: meta.description, icon: meta.icon, href, articles };
  });
}

let cache: DocCategory[] | undefined;

/** Every category with its articles, in prefix order. */
export function getDocCategories(): DocCategory[] {
  cache ??= loadCategories();
  return cache;
}

export function getDocCategory(slug: string) {
  return getDocCategories().find((c) => c.slug === slug);
}

export function getDocArticle(categorySlug: string, slug: string) {
  return getDocCategory(categorySlug)?.articles.find((a) => a.slug === slug);
}

/** All articles in reading order (category order, then article order). */
export function getAllDocArticles(): DocArticle[] {
  return getDocCategories().flatMap((c) => c.articles);
}

export function getAdjacentDocArticles(href: string) {
  const all = getAllDocArticles();
  const i = all.findIndex((a) => a.href === href);
  return { previous: i > 0 ? all[i - 1] : undefined, next: i >= 0 ? all[i + 1] : undefined };
}

export function getDocsSearchIndex(): DocSearchEntry[] {
  return getAllDocArticles().map((a) => ({
    title: a.title,
    description: a.description,
    category: a.categoryTitle,
    href: a.href,
    headings: a.headings.map(({ id, text }) => ({ id, text })),
  }));
}

/** Lightweight navigation tree (no article bodies) for the sidebar. */
export function getDocsNav() {
  return getDocCategories().map((c) => ({
    slug: c.slug,
    title: c.title,
    href: c.href,
    articles: c.articles.map((a) => ({ slug: a.slug, title: a.title, href: a.href })),
  }));
}

export type DocsNav = ReturnType<typeof getDocsNav>;
