/**
 * ProjectCard component
 * Displays a single project with image, title, description, and technologies
 */
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  image, 
  link 
}: ProjectCardProps) {
  const CardContent = () => (
    <>
      <div className="aspect-video overflow-hidden bg-muted relative">
        {image && (
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <Link 
        href={link} 
        className="group flex flex-col overflow-hidden rounded-lg border border-border hover:border-accent transition-colors"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border hover:border-accent transition-colors">
      <CardContent />
    </div>
  );
}
