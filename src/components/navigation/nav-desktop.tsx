import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';

import { buttonVariants } from '../ui/button';

interface NavDesktopProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavItem[];
}

export function NavDesktop({ items, ...other }: NavDesktopProps) {
  return (
    <div {...other}>
      {items?.length ? (
        <ul className="hidden gap-5 lg:flex lg:items-center">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  style={item.disabled ? { pointerEvents: 'none' } : undefined}
                >
                  <li className="flex">
                    <div
                      className={cn(
                        'truncate',
                        buttonVariants({
                          size: 'sm',
                          variant: 'ghost',
                        }),
                        item.disabled && 'opacity-80'
                      )}
                    >
                      {item.title}
                    </div>
                  </li>
                </Link>
              )
          )}
        </ul>
      ) : null}
    </div>
  );
}
