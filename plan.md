# plan.md

## Overview
Build a modern, minimalist personal website (milinds.xyz) with black/white design, blue accent color, and clear navigation. Site will feature blog posts, project showcases, and social links. Design inspiration from Brian Lovin and Paco Coursey's websites. Fixed top navigation bar with persistent social media links.

## Phases and Requirements

### Phase 1: Setup & Navigation
- Initialize Next.js with TypeScript
- Configure Tailwind CSS with theme
- Implement layout with fixed header
- Add social icons component
- Create responsive navigation
- Establish page routing

### Phase 2: Home & About Pages
- Implement hero section with intro
- Create featured projects preview
- Build About page with bio
- Add skills/technologies list
- Ensure responsive layouts

### Phase 3: Projects Page
- Create project card grid component
- Implement project filtering
- Build individual project view
- Include project metadata display
- Support images and links

### Phase 4: Blog Infrastructure
- Configure MDX for content
- Implement blog listing page
- Create blog post template
- Add syntax highlighting
- Support frontmatter metadata

### Phase 5: Refinement & Deployment
- Optimize SEO configurations
- Implement image optimization
- Configure Vercel deployment
- Add OpenGraph metadata
- Generate sitemap

## Colors, Theme, and Typography
- **Site Name**: milinds.xyz
- **Typography**: Inter (400, 500, 600)
- **Colors**: 
  - Primary: #000000 (Black), #FFFFFF (White)
  - Accent: #0077FF (Electric Blue)
- **Container**: Max 960px, auto margins
- **Spacing**: 4px increments (8px, 16px, 24px, 32px, 64px)
- **Style**: Minimalist, clean typography, generous whitespace

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Components**: shadcn/ui
- **Font**: Inter via next/font

## Architecture and Design System

### Site Structure
```
milinds.xyz/
├── / (Home)
├── /about
├── /projects
│   └── /projects/[slug]
├── /blog
│   └── /blog/[slug]
```

### Component Architecture
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── common/
│   ├── SocialLinks.tsx
│   └── ThemeToggle.tsx
├── home/
│   ├── Hero.tsx
│   └── FeaturedProjects.tsx
├── projects/
│   ├── ProjectCard.tsx
│   └── ProjectGrid.tsx
├── blog/
│   ├── BlogList.tsx
│   └── BlogPost.tsx
```

### Data Structure
```
content/
├── blog/
│   └── [slug].mdx
├── projects/
│   └── [slug].mdx
```

## Code Samples

### Header Navigation
```jsx
// Header.tsx
export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-4 md:px-6">
      <a href="/" className="font-medium text-black">milind</a>
      <nav className="flex items-center gap-6">
        <a href="/about" className="text-sm text-black hover:text-accent">About</a>
        <a href="/projects" className="text-sm text-black hover:text-accent">Projects</a>
        <a href="/blog" className="text-sm text-black hover:text-accent">Blog</a>
      </nav>
    </header>
  );
}
```

### Social Links Component
```jsx
// SocialLinks.tsx
import { Github, Twitter, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4">
      <a href="https://github.com/username" aria-label="GitHub">
        <Github className="h-5 w-5 text-black hover:text-accent" />
      </a>
      <a href="https://twitter.com/username" aria-label="Twitter">
        <Twitter className="h-5 w-5 text-black hover:text-accent" />
      </a>
      <a href="https://linkedin.com/in/username" aria-label="LinkedIn">
        <Linkedin className="h-5 w-5 text-black hover:text-accent" />
      </a>
    </div>
  );
}
```

### Project Card Component
```jsx
// ProjectCard.tsx
export function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200">
      <div className="aspect-video overflow-hidden bg-neutral-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium text-black">{project.title}</h3>
        <p className="mt-2 text-sm text-neutral-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="rounded-full bg-neutral-100 px-2 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Blog Post List Item
```jsx
// BlogList.tsx
export function BlogList({ posts }) {
  return (
    <div className="divide-y divide-neutral-200">
      {posts.map(post => (
        <article key={post.slug} className="py-6">
          <time className="text-sm text-neutral-500">{post.date}</time>
          <h2 className="mt-2 text-xl font-medium">
            <a href={`/blog/${post.slug}`} className="text-black hover:text-accent">
              {post.title}
            </a>
          </h2>
          <p className="mt-3 text-neutral-700">{post.description}</p>
          <div className="mt-4 flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs text-neutral-500">#{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
```

### MDX Configuration
```js
// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
```

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0077FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
```

### Blog Post Frontmatter Example
```mdx
---
title: "Building a Modern Website"
description: "How I built my personal website with Next.js and Tailwind"
date: "2025-03-09"
tags: ["web development", "next.js", "tailwind"]
---

Blog content here...
```