"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { ThumbsDown, ThumbsUp } from "lucide-react";

/** "Was this helpful?" buttons; the answer is sent as a Vercel Analytics event. */
export default function DocFeedback({ path }: { path: string }) {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  if (answer) {
    return (
      <p className="text-sm font-medium text-ink" role="status">
        {answer === "yes" ? "Thanks for letting us know!" : "Thanks. We'll use your feedback to improve this article."}
      </p>
    );
  }

  const vote = (helpful: "yes" | "no") => {
    track("docs_feedback", { path, helpful });
    setAnswer(helpful);
  };

  const button =
    "inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-card px-4 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="font-semibold text-ink">Was this article helpful?</p>
      <div className="flex gap-2">
        <button type="button" className={button} onClick={() => vote("yes")}>
          <ThumbsUp className="h-4 w-4" aria-hidden="true" /> Yes
        </button>
        <button type="button" className={button} onClick={() => vote("no")}>
          <ThumbsDown className="h-4 w-4" aria-hidden="true" /> No
        </button>
      </div>
    </div>
  );
}
