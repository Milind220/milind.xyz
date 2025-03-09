/**
 * Projects page component
 * Displays a grid of projects with filtering options
 */
export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="border border-border rounded-lg overflow-hidden group">
          <div className="aspect-video bg-muted"></div>
          <div className="p-4">
            <h2 className="font-medium">Project One</h2>
            <p className="text-sm text-muted-foreground mt-2">
              A detailed description of this project, including the problem it solves and technologies used.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 bg-muted rounded-full">React</span>
              <span className="text-xs px-2 py-1 bg-muted rounded-full">TypeScript</span>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="border border-border rounded-lg overflow-hidden group">
          <div className="aspect-video bg-muted"></div>
          <div className="p-4">
            <h2 className="font-medium">Project Two</h2>
            <p className="text-sm text-muted-foreground mt-2">
              A detailed description of this project, including the problem it solves and technologies used.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 bg-muted rounded-full">Next.js</span>
              <span className="text-xs px-2 py-1 bg-muted rounded-full">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
