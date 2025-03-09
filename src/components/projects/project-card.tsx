/**
 * ProjectCard component
 * Displays a single project with image, title, description, and technologies
 */
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
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border hover:border-accent transition-colors">
      <div className="aspect-video overflow-hidden bg-muted">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    </div>
  );
}
