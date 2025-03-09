/**
 * Blog post page component
 * Displays a single blog post with full content
 */
import { getContentBySlug, getAllContent } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Use the Next.js generated PageProps type
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getContentBySlug('blog', slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | milinds.xyz',
    };
  }
  
  return {
    title: `${post.frontmatter.title} | milinds.xyz`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllContent('blog');
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getContentBySlug('blog', slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <time>{formatDate(post.frontmatter.date)}</time>
          <span>•</span>
          <div className="flex gap-2">
            {post.frontmatter.tags && Array.isArray(post.frontmatter.tags) && 
              post.frontmatter.tags.map((tag) => (
                <span key={tag} className="text-sm">#{tag}</span>
              ))
            }
          </div>
        </div>
      </header>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
}
