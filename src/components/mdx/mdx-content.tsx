'use client';

import { MDXRemote } from 'next-mdx-remote';
import { components } from './mdx-components';

interface MDXContentProps {
  source: any;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote {...source} components={components} />
  );
}
