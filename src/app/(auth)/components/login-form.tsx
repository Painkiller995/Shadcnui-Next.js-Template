'use client';

import { z } from 'zod';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AlertDestructive from '@/components/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormItem, FormField, FormControl, FormMessage } from '@/components/ui/form';
import { authSchema } from '@/schemas/auth';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type AuthFormData = z.infer<typeof authSchema>;

export function LoginForm({ className, ...props }: LoginFormProps) {
  const router = useRouter();

  const [error, setError] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true);
    // Do stuff here
    const signInResult = true;
    if (signInResult) {
      router.push('/home');
      router.refresh();
    } else {
      setError('Invalid email or password. Please try again.');
      setIsSubmitting(false);
    }
  });

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <AlertDestructive alertDescription={error} />
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="mt-2 text-white" disabled={isSubmitting}>
              {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Sign In 🚀
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
}
