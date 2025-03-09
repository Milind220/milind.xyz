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

interface ProjectParams {
  slug: string;
}

interface ProjectPageProps {
  params: ProjectParams;
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getContentBySlug('projects', params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <article className="flex flex-col gap-8">
      <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to projects</span>
      </Link>
      
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{project.frontmatter.title}</h1>
        <p className="text-xl text-muted-foreground">{project.frontmatter.description}</p>
        
        {project.frontmatter.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.frontmatter.technologies.map((tech: string) => (
              <span key={tech} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        )}
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
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {project.content}
      </div>
    </article>
  );
}
