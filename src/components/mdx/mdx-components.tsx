'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export const components = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="my-4 leading-relaxed" {...props} />
  ),
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <Link
      href={href || '#'}
      className="text-accent hover:text-accent/80 transition-colors font-medium"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc pl-6 my-4" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal pl-6 my-4" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="my-2" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className={cn(
        "border-l-4 border-accent",
        "pl-4 my-6",
        "text-muted-foreground italic"
      )}
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className={cn(
        "bg-muted px-1 py-0.5 rounded",
        "text-sm font-mono",
        "before:hidden after:hidden"
      )}
      {...props}
    />
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className={cn(
        "bg-muted rounded-lg p-4",
        "overflow-x-auto",
        "my-6"
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    <img
      className="rounded-lg shadow-md my-6 mx-auto"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto">
      <table
        className="w-full my-6 border-collapse"
        {...props}
      />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="border border-muted-foreground/20 px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td
      className="border border-muted-foreground/20 px-4 py-2"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-muted-foreground/20" {...props} />
  ),
};

export type MDXComponents = typeof components;
