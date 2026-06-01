import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostFrontmatter } from "~/types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

function isPublishedFile(file: string): boolean {
  return file.endsWith(".md") && !file.startsWith("_");
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter(isPublishedFile)
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    return { ...(data as BlogPostFrontmatter), content };
  } catch {
    return null;
  }
}

export function getPostsFrontmatter(): BlogPostFrontmatter[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}
