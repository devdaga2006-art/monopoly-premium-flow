CREATE TABLE public.blog_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL,
  body TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX blog_comments_post_slug_created_at_idx ON public.blog_comments (post_slug, created_at DESC);

GRANT SELECT, INSERT ON public.blog_comments TO anon;
GRANT SELECT, INSERT ON public.blog_comments TO authenticated;
GRANT ALL ON public.blog_comments TO service_role;

ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Approved comments are publicly readable"
  ON public.blog_comments FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can post a comment"
  ON public.blog_comments FOR INSERT
  WITH CHECK (
    length(trim(author_name)) BETWEEN 2 AND 60
    AND length(trim(body)) BETWEEN 2 AND 2000
    AND is_approved = true
  );