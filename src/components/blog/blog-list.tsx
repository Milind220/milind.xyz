/**
 * BlogList component
 * Displays a list of blog posts with metadata
 */
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="divide-y divide-border">
      {posts.map(post => (
        <article key={post.slug} className="py-6">
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <h2 className="mt-2 text-xl font-medium">
            <a href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
              {post.title}
            </a>
          </h2>
          <p className="mt-3 text-muted-foreground">{post.description}</p>
          <div className="mt-4 flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs text-muted-foreground">#{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
