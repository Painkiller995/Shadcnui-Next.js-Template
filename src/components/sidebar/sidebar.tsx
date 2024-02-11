import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

interface Props {
  className?: string;
}
const Sidebar = ({ className }: Props) => (
  <div className={cn('p-5 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
    <div className="flex flex-col-reverse space-y-5 p-5">
      <Link className="mt-5" href="https://github.com/Painkiller995">
        <Button>GitHub</Button>
      </Link>
      <p className="mb-5 sm:mb-0 sm:text-sm">
        Need Help? You can reach me to get assistance with your ongoing tasks.
      </p>
    </div>
  </div>
);

export default Sidebar;
