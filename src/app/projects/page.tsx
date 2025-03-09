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

// Sample project data - will be replaced with MDX content
const projects = [
  {
    title: "Autonomous Ocean Cleaning Robot",
    description: "PCB design and firmware for autonomous boats that collect plastic waste from oceans.",
    technologies: ["KiCAD", "C++", "Embedded Systems", "Robotics"],
    image: "/images/projects/ocean-robot.jpg",
    link: "/projects/ocean-robot"
  },
  {
    title: "Personal Website",
    description: "A modern, minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/personal-website.jpg",
    link: "/projects/personal-website"
  },
  {
    title: "Smart Home Energy Monitor",
    description: "IoT device that monitors and optimizes home energy usage with real-time feedback.",
    technologies: ["Rust", "IoT", "PCB Design", "Data Visualization"],
    image: "/images/projects/energy-monitor.jpg",
    link: "/projects/energy-monitor"
  },
  {
    title: "AI-Powered Plant Care System",
    description: "Computer vision system that monitors plant health and automates watering schedules.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Raspberry Pi"],
    image: "/images/projects/plant-care.jpg",
    link: "/projects/plant-care"
  }
];

export default async function ProjectsPage() {
  // This will be used when MDX content is ready
  // const projectsData = await getAllContent('projects');
  
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
