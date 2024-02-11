'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="firstName">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              type="text"
              autoCapitalize="words"
              autoComplete="given-name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Your Last Name"
              type="text"
              autoCapitalize="words"
              autoComplete="family-name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmEmail">
              Confirm Email
            </Label>
            <Input
              id="confirmEmail"
              placeholder="Confirm Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <Button className="text-white" disabled={isLoading}>
            {isLoading && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up 🌟
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
}
