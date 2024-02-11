import Link from 'next/link';
import { cn } from '@/lib/utils';
import { paths } from '@/config/paths';

interface Props {
  className: string;
}
export const HeaderLogo = ({ className }: Props) => (
  <Link className={cn(className)} href={paths.home}>
    Logo Here
  </Link>
);
