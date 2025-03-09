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
    title: "Autonomous Ocean Cleaning Robot",
    description: "PCB design and firmware for autonomous boats that collect plastic waste from oceans.",
    technologies: ["KiCAD", "C++", "Embedded Systems", "Robotics"],
    image: "/images/projects/ocean-robot.jpg",
    slug: "ocean-robot"
  },
  {
    title: "Personal Website",
    description: "A modern, minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/personal-website.jpg",
    slug: "personal-website"
  },
  {
    title: "Smart Home Energy Monitor",
    description: "IoT device that monitors and optimizes home energy usage with real-time feedback.",
    technologies: ["Rust", "IoT", "PCB Design", "Data Visualization"],
    image: "/images/projects/energy-monitor.jpg",
    slug: "energy-monitor"
  },
  {
    title: "AI-Powered Plant Care System",
    description: "Computer vision system that monitors plant health and automates watering schedules.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Raspberry Pi"],
    image: "/images/projects/plant-care.jpg",
    slug: "plant-care"
  }
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
