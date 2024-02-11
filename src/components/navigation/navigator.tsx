'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { pathsArr } from '@/config/paths';
import { HeaderLogo } from '@/components/logo';

import Squash from './navigation-button';
import { NavMobile } from './nav-mobile';
import { NavDesktop } from './nav-desktop';

interface SiteHeaderProps {
  className?: string;
}

const Navigator = ({ className }: SiteHeaderProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={cn('flex items-center overflow-auto', className)}>
      <div className="lg:hidden">
        <Squash toggled={isOpen} size={20} toggle={setOpen} />
      </div>

      <HeaderLogo className="pr-6" />

      <NavDesktop
        className="flex items-center gap-6 overflow-auto scrollbar-hide md:gap-10"
        items={pathsArr}
      />
      <NavMobile className="lg:hidden" open={isOpen} items={pathsArr} />
    </div>
  );
};
export default Navigator;
