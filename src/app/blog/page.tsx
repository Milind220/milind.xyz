/**
 * Blog page component
 * Displays a list of blog posts with metadata
 */
import { BlogList } from '@/components/blog/blog-list';
import { getAllContent } from '@/lib/mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | milinds.xyz',
  description: 'Articles on web development, robotics, and technology',
};

export default async function BlogPage() {
  const posts = await getAllContent('blog');

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      
      {posts.length > 0 ? (
        <BlogList posts={posts} />
      ) : (
        <p className="text-muted-foreground">No blog posts found. Check back soon!</p>
      )}
    </div>
  );
}
