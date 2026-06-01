export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  excerpt?: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  content: string;
}
