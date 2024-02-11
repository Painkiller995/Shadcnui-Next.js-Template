import Link from 'next/link';
import { cn } from '@/lib/utils';
import { social } from '@/config/paths';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface Props {
  className: string;
}
const Footer = ({ className }: Props) => (
  <footer
    className={cn(
      'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      className
    )}
  >
    <div className="flex h-fit justify-center space-x-4 pt-3 supports-[backdrop-filter]:bg-background/60 md:justify-start md:px-3 lg:mt-0">
      <Link href={social.twitter}>
        <Twitter />
      </Link>
      <Link href={social.linkedin}>
        <Linkedin />
      </Link>
      <Link href={social.github}>
        <Github />
      </Link>
    </div>

    <p className="px-3 py-2 text-center text-sm text-muted-foreground md:text-start">
      @2024 All rights reserved by your website.
    </p>
  </footer>
);

export default Footer;

// px-8 text-center text-sm text-muted-foreground
