/**
 * Blog page component
 * Displays a list of blog posts with metadata
 */
export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      
      <div className="divide-y divide-border">
        {/* Blog Post 1 */}
        <article className="py-6">
          <time className="text-sm text-muted-foreground">March 9, 2025</time>
          <h2 className="text-xl font-medium mt-2">
            <a href="#" className="hover:text-accent transition-colors">
              Building a Modern Website with Next.js and Tailwind
            </a>
          </h2>
          <p className="mt-3 text-muted-foreground">
            How I built my personal website using Next.js 14, Tailwind CSS, and TypeScript.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="text-xs text-muted-foreground">#webdev</span>
            <span className="text-xs text-muted-foreground">#nextjs</span>
            <span className="text-xs text-muted-foreground">#tailwind</span>
          </div>
        </article>
        
        {/* Blog Post 2 */}
        <article className="py-6">
          <time className="text-sm text-muted-foreground">February 15, 2025</time>
          <h2 className="text-xl font-medium mt-2">
            <a href="#" className="hover:text-accent transition-colors">
              The Power of TypeScript in Modern Web Development
            </a>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Why TypeScript has become an essential tool for building robust web applications.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="text-xs text-muted-foreground">#typescript</span>
            <span className="text-xs text-muted-foreground">#webdev</span>
          </div>
        </article>
      </div>
    </div>
  );
}
