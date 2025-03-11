import { useMDXComponent } from 'next-contentlayer/hooks';
import { components } from './mdx-components';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
