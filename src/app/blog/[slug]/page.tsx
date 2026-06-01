import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "~/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pt-20">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href="/blog"
          className="text-vanta-light/50 hover:text-vanta-cyan mb-12 flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Înapoi la blog
        </Link>

        <header className="mb-10">
          <p className="text-vanta-cyan text-xs font-medium tracking-wider uppercase">
            {post.category}
          </p>
          <h1 className="text-vanta-light mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-vanta-light/60 mt-4 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          )}
          <time
            dateTime={post.publishedAt}
            className="text-vanta-light/40 mt-4 block text-sm"
          >
            {new Date(post.publishedAt).toLocaleDateString("ro-RO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div className="blog-content">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
