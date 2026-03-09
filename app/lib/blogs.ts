import blogsData from "../data/blogs.json";

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  date: string; // ISO date
  seoTitle?: string;
  seoDescription?: string;
  readTimeMinutes?: number;
}

export const allBlogs = blogsData as BlogPost[];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return allBlogs.find((post) => post.slug === slug);
}

