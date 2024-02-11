import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean;
}

const PageFrame = ({ container = false, children, className, ...other }: Props) => (
  <div className={cn('h-full w-full', container ? 'container pt-8' : '', className)} {...other}>
    {children}
  </div>
);

export default PageFrame;
