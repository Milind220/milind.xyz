/**
 * Home page component for milinds.xyz
 * Displays a hero section with introduction and featured projects
 */
import Link from 'next/link';
import { getAllContent } from '@/lib/mdx';
import { ProjectCard } from '@/components/projects/project-card';

export default async function Home() {
  // Get featured projects (first 2 projects)
  const projects = await getAllContent('projects');
  const featuredProjects = projects.slice(0, 2);
  
  // Fallback projects if no MDX content is found
  const fallbackProjects = [
    {
      title: "Ocean Cleaning Robot",
      description: "PCB design and firmware for autonomous boats that collect plastic waste from oceans.",
      technologies: ["KiCAD", "C++", "Embedded Systems"],
      slug: "ocean-robot"
    },
    {
      title: "Personal Website",
      description: "A modern, minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      slug: "personal-website"
    }
  ];
  
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-accent">Milind</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-prose">
            I love robots, software, and building things.
            An optimist and a dreamer, I&apos;m always looking for ways to make the world a better place.
            Currently Lead Electronics Engineer at Clearbot, working on autonomous ocean cleaning boats.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-sm text-accent hover:underline"
          >
            View all projects →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                technologies={project.technologies || []}
                image={project.image}
                link={`/projects/${project.slug}`}
              />
            ))
          ) : (
            fallbackProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={`/projects/${project.slug}`}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
