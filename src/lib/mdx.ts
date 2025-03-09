import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

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
  [key: string]: any;
}

// Get the directory for a specific content type
const getContentDirectory = (type: ContentType) => {
  return path.join(process.cwd(), 'content', type);
};

// Get all content files for a specific type
export async function getAllContent(type: ContentType): Promise<Frontmatter[]> {
  const contentDir = getContentDirectory(type);
  
  // Ensure directory exists
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  
  const content = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const slug = file.replace(/\.mdx$/, '');
      
      return {
        ...data,
        slug,
        date: data.date ? new Date(data.date).toISOString() : '',
      } as Frontmatter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return content;
}

// Get a specific content file by slug
export async function getContentBySlug(type: ContentType, slug: string) {
  const contentDir = getContentDirectory(type);
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  const mdxSource = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypePrism,
          rehypeSlug,
        ],
      },
    },
  });
  
  return {
    frontmatter: {
      ...data,
      slug,
      date: data.date ? new Date(data.date).toISOString() : '',
    } as Frontmatter,
    content: mdxSource.content,
  };
}
