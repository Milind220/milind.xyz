/**
 * Projects page component
 * Displays a grid of projects with filtering options
 */
import { ProjectCard } from '@/components/projects/project-card';
import { getAllContent } from '@/lib/mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | milinds.xyz',
  description: 'Showcase of my projects in robotics, web development, and more',
};

// Fallback project data in case no MDX content is found
const fallbackProjects = [
  {
    title: "Ozon3",
    description: "An open-source Python package to easily obtain real-time, historical, or forecasted air quality data for anywhere in the world. Reliable, accurate and simple.",
    technologies: ["Python", "Open-Source Software"],
    image: "",
    slug: "ozon3-python-package"
  },
  {
    title: "Personal Website",
    description: "A modern, minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "",
    slug: "personal-website"
  },
];

export default async function ProjectsPage() {
  // Try to get projects from MDX content
  const projectsData = await getAllContent('projects');
  
  // Use fallback data if no MDX content is found
  const projects = projectsData.length > 0 ? projectsData : fallbackProjects;
  
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title || project.slug}
            title={project.title}
            description={project.description}
            technologies={project.technologies || []}
            image={project.image}
            link={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
