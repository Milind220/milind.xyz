/**
 * Blog post page component
 * Displays a single blog post with full content
 */
import { getContentBySlug, getAllContent } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getContentBySlug('blog', params.slug);
  
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getContentBySlug('blog', params.slug);
  
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
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className="text-sm">#{tag}</span>
            ))}
          </div>
        </div>
      </header>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
}
import { getContentBySlug, getAllContent } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getContentBySlug('blog', params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | milinds.xyz',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.frontmatter.title} | milinds.xyz`,
    description: post.frontmatter.description,
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllContent('blog');
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getContentBySlug('blog', params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="prose prose-slate max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.frontmatter.title}</h1>
        <time className="text-sm text-muted-foreground">
          {formatDate(post.frontmatter.date)}
        </time>
        <div className="flex gap-2 mt-4">
          {post.frontmatter.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        {post.content}
      </div>
    </article>
  );
}
