/**
 * Project detail page component
 * Displays a single project with full description and details
 */
import { getContentBySlug, getAllContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getContentBySlug('projects', params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | milinds.xyz',
    };
  }
  
  return {
    title: `${project.frontmatter.title} | milinds.xyz`,
    description: project.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const projects = await getAllContent('projects');
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(_props: ProjectPageProps) {
  // This will be used when MDX content is ready
  // const project = await getContentBySlug('projects', params.slug);
  
  // if (!project) {
  //   notFound();
  // }
  
  // Temporary mock data until MDX is set up
  const project = {
    frontmatter: {
      title: "Autonomous Ocean Cleaning Robot",
      description: "PCB design and firmware for autonomous boats that collect plastic waste from oceans.",
      technologies: ["KiCAD", "C++", "Embedded Systems", "Robotics"],
      image: "/images/projects/ocean-robot.jpg",
      github: "https://github.com/username/ocean-robot",
      website: "https://project-demo.com",
    },
    content: (
      <div>
        <p className="mb-4">
          This project involved designing the electronics and firmware for autonomous boats that collect plastic waste from oceans.
          The boats use solar power and advanced navigation systems to efficiently clean polluted waterways.
        </p>
        <p className="mb-4">
          I was responsible for the complete PCB design using KiCAD and writing the firmware in C++.
          The system includes GPS navigation, obstacle avoidance sensors, and wireless communication for remote monitoring.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Key Features</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Solar-powered operation for extended missions</li>
          <li>GPS navigation with path planning algorithms</li>
          <li>Obstacle detection and avoidance system</li>
          <li>Wireless telemetry for remote monitoring</li>
          <li>Automated waste collection mechanism</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-3">Technical Challenges</h2>
        <p className="mb-4">
          One of the biggest challenges was designing a power-efficient system that could operate reliably in harsh marine environments.
          This required careful component selection, waterproofing considerations, and robust firmware design.
        </p>
      </div>
    )
  };
  
  return (
    <article className="flex flex-col gap-8">
      <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to projects</span>
      </Link>
      
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{project.frontmatter.title}</h1>
        <p className="text-xl text-muted-foreground">{project.frontmatter.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {project.frontmatter.technologies.map((tech: string) => (
            <span key={tech} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </header>
      
      {project.frontmatter.image && (
        <div className="aspect-video overflow-hidden rounded-lg bg-muted relative">
          <Image 
            src={project.frontmatter.image} 
            alt={project.frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-cover"
          />
        </div>
      )}
      
      <div className="flex gap-4">
        {project.frontmatter.github && (
          <a 
            href={project.frontmatter.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            GitHub Repository
          </a>
        )}
        {project.frontmatter.website && (
          <a 
            href={project.frontmatter.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {project.content}
      </div>
    </article>
  );
}
import { getContentBySlug, getAllContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getContentBySlug('projects', params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | milinds.xyz',
      description: 'The requested project could not be found.',
    };
  }
  
  return {
    title: `${project.frontmatter.title} | milinds.xyz`,
    description: project.frontmatter.description,
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = await getAllContent('projects');
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getContentBySlug('projects', params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{project.frontmatter.title}</h1>
        <p className="text-muted-foreground">{project.frontmatter.description}</p>
        
        {project.frontmatter.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.frontmatter.technologies.map((tech: string) => (
              <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {project.frontmatter.image && (
        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
          <img 
            src={project.frontmatter.image} 
            alt={project.frontmatter.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="prose prose-slate max-w-none mt-8">
        {project.content}
      </div>
    </div>
  );
}
