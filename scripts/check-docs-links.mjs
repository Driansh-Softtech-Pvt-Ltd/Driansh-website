// Checks every /docs/... link in content/docs/**/*.md.
//
//   node scripts/check-docs-links.mjs           fails on links to unknown categories or bad paths,
//                                               reports links to articles that aren't written yet
//   node scripts/check-docs-links.mjs --strict  also fails on links to missing articles
//
// Also checks that #anchors on links to existing articles match a heading in that article.
import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");
const PREFIX = /^\d+-/;
const strict = process.argv.includes("--strict");

const slugify = (text) =>
  text
    .replace(/[*_`]/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");

/** category slug → Map(article slug → { file, anchors }) */
const categories = new Map();
for (const dir of fs.readdirSync(DOCS_DIR).filter((d) => PREFIX.test(d)).sort()) {
  const articles = new Map();
  for (const file of fs.readdirSync(path.join(DOCS_DIR, dir)).filter((f) => PREFIX.test(f) && f.endsWith(".md"))) {
    const body = fs.readFileSync(path.join(DOCS_DIR, dir, file), "utf8");
    const anchors = new Set(
      [...body.matchAll(/^#{2,3}\s+(.+)$/gm)].map((m) => slugify(m[1]))
    );
    articles.set(file.replace(PREFIX, "").replace(/\.md$/, ""), { file: `${dir}/${file}`, anchors });
  }
  categories.set(dir.replace(PREFIX, ""), articles);
}

const errors = [];
const pending = [];
let checked = 0;

for (const [, articles] of categories) {
  for (const { file } of articles.values()) {
    const body = fs.readFileSync(path.join(DOCS_DIR, file), "utf8").replace(/```[\s\S]*?```/g, "");
    for (const m of body.matchAll(/\]\((\/docs[^)\s]*)\)/g)) {
      checked++;
      const [route, anchor] = m[1].split("#");
      const parts = route.replace(/\/$/, "").split("/").slice(2); // drop "", "docs"
      const where = `${file}: ${m[1]}`;
      if (route.startsWith("/docs/images/")) {
        // Screenshot: must exist under public/.
        if (!fs.existsSync(path.join(process.cwd(), "public", route))) errors.push(`${where} – image not found`);
        continue;
      }
      if (parts.length === 0) continue; // /docs hub
      const [cat, slug, ...rest] = parts;
      if (rest.length || !categories.has(cat)) {
        errors.push(`${where} – no such docs page`);
        continue;
      }
      if (!slug) continue; // category page
      const target = categories.get(cat).get(slug);
      if (!target) {
        (strict ? errors : pending).push(`${where} – article not written yet`);
      } else if (anchor && !target.anchors.has(anchor)) {
        errors.push(`${where} – no heading "#${anchor}" in ${target.file}`);
      }
    }
  }
}

const articleCount = [...categories.values()].reduce((n, a) => n + a.size, 0);
console.log(`Checked ${checked} links in ${articleCount} articles.`);
if (pending.length) {
  console.log(`\n${pending.length} link(s) to articles that don't exist yet:`);
  for (const p of pending) console.log(`  - ${p}`);
}
if (errors.length) {
  console.error(`\n${errors.length} broken link(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(errors.length || pending.length ? "" : "All docs links resolve.");
