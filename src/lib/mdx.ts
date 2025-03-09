import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the content types
export type ContentType = 'blog' | 'projects';

// Define the frontmatter structure
export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  slug: string;
  technologies?: string[];
  [key: string]: any;
}

/**
 * Get all content files of a specific type
 * @param type Content type ('blog' or 'projects')
 * @returns Array of content frontmatter
 */
export async function getAllContent(type: ContentType): Promise<Frontmatter[]> {
  const contentDir = path.join(process.cwd(), 'content', type);
  
  // Check if directory exists
  if (!fs.existsSync(contentDir)) {
    console.warn(`Content directory not found: ${contentDir}`);
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));
  
  const content = mdxFiles.map(file => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return {
      slug: file.replace('.mdx', ''),
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      image: data.image,
      technologies: data.technologies || [],
    } as Frontmatter;
  });
  
  // Sort by date (newest first)
  return content.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a specific content file by slug
 * @param type Content type ('blog' or 'projects')
 * @param slug Content slug
 * @returns Content frontmatter and raw content
 */
export async function getContentBySlug(type: ContentType, slug: string) {
  const filePath = path.join(process.cwd(), 'content', type, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    frontmatter: {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      image: data.image,
      technologies: data.technologies || [],
    } as Frontmatter,
    content
  };
}
