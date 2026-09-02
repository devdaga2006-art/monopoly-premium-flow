import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { MessageSquare, Send } from "lucide-react";

type Comment = {
  id: string;
  author_name: string;
  body: string;
  created_at: string;
};

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function BlogComments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    supabase
      .from("blog_comments")
      .select("id, author_name, body, created_at")
      .eq("post_slug", postSlug)
      .order("created_at", { ascending: false })
      .limit(200)
      .then(({ data, error }) => {
        if (!active) return;
        if (error) console.error("Failed to load comments:", error.message);
        setComments(data ?? []);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [postSlug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedBody = body.trim();
    if (trimmedName.length < 2) return toast.error("Please enter your name.");
    if (trimmedBody.length < 2) return toast.error("Please write a comment.");

    setSubmitting(true);
    const { data, error } = await supabase
      .from("blog_comments")
      .insert({ post_slug: postSlug, author_name: trimmedName, body: trimmedBody })
      .select("id, author_name, body, created_at")
      .single();
    setSubmitting(false);

    if (error) {
      console.error("Failed to post comment:", error.message);
      toast.error("Could not post your comment. Please try again.");
      return;
    }
    setComments((prev) => [data as Comment, ...prev]);
    setBody("");
    toast.success("Thanks for joining the discussion!");
  }

  return (
    <section id="comments" className="py-16 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          Discussion
          {!loading && comments.length > 0 && (
            <span className="text-base font-semibold text-muted-foreground">({comments.length})</span>
          )}
        </h2>
        <p className="mt-2 text-muted-foreground">
          Questions on grades, pricing or availability? Ask below and our team will reply.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-border bg-card p-5 md:p-6 space-y-4">
          <div>
            <label htmlFor="comment-name" className="text-sm font-medium">Name</label>
            <Input
              id="comment-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name or company"
              maxLength={60}
              className="mt-1.5"
            />
          </div>
          <div>
            <label htmlFor="comment-body" className="text-sm font-medium">Comment</label>
            <Textarea
              id="comment-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Share your experience or ask a question about this polymer grade…"
              rows={4}
              maxLength={2000}
              className="mt-1.5"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">Be respectful. Do not share confidential pricing contracts.</p>
            <Button type="submit" disabled={submitting} className="bg-red-gradient shrink-0">
              <Send className="h-4 w-4 mr-2" />
              {submitting ? "Posting…" : "Post comment"}
            </Button>
          </div>
        </form>

        <div className="mt-10 space-y-6">
          {loading ? (
            <>
              {[0, 1].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </>
          ) : comments.length === 0 ? (
            <p className="text-muted-foreground">No comments yet — be the first to start the discussion.</p>
          ) : (
            comments.map((c) => (
              <article key={c.id} className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center text-sm font-bold">
                  {initials(c.author_name) || "?"}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="font-semibold">{c.author_name}</span>
                    <time dateTime={c.created_at} className="text-xs text-muted-foreground">
                      {new Date(c.created_at).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <p className="mt-1 text-muted-foreground leading-relaxed whitespace-pre-line break-words">{c.body}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
