import React from 'react';
import { cn } from '@/lib/utils';
import Navigator from '@/components//navigation';
import { ModeToggle } from '@/components/theme-provider';

import { HeaderLogo } from '../logo';

interface SiteHeaderProps {
  useNavigator?: boolean;
  className?: string;
}

const SiteHeader = ({ useNavigator = true, className }: SiteHeaderProps) => (
  <header
    className={cn(
      'sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      className
    )}
  >
    {useNavigator ? <Navigator /> : <HeaderLogo className="pr-6" />}
    <ModeToggle />
  </header>
);
export default SiteHeader;
