/**
 * Home page component for milinds.xyz
 * Displays a hero section with introduction and featured projects
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Hi, I'm <span className="text-accent">Milind</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-prose">
          I build things for the web. Software engineer focused on creating clean, 
          user-friendly experiences with modern technologies.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
            <h3 className="font-medium mb-2">Project One</h3>
            <p className="text-muted-foreground text-sm">
              A brief description of this amazing project and the technologies used.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
            <h3 className="font-medium mb-2">Project Two</h3>
            <p className="text-muted-foreground text-sm">
              A brief description of this amazing project and the technologies used.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
