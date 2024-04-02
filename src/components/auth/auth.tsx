'use client';

import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '../ui/button';

export const LoginButton = () => <Button onClick={() => console.log('sign in')}>Login</Button>;

export const LogoutButton = () => <Button onClick={() => console.log('sign out')}>Logout</Button>;

export const AuthStatus = () => {
  const status = 'unauthenticated';

  if (status === 'unauthenticated')
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Login
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button type="button">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>Email info</div>
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => console.log('log out')}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
