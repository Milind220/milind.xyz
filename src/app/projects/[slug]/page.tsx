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

// Use the Next.js generated PageProps type
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default async function ProjectPage({ params }: PageProps) {
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
/**
 * Project page component
 * Displays a single project with full content
 */
import { getContentBySlug, getAllContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Use the Next.js generated PageProps type
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getContentBySlug('projects', slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | milinds.xyz',
    };
  }
  
  return {
    title: `${project.frontmatter.title} | milinds.xyz`,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllContent('projects');
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getContentBySlug('projects', slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{project.frontmatter.title}</h1>
        
        {project.frontmatter.link && (
          <a 
            href={project.frontmatter.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project →
          </a>
        )}
        
        {project.frontmatter.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.frontmatter.technologies.map((tech: string) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {project.content}
      </div>
    </article>
  );
}
