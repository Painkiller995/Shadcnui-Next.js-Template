'use client';

import { z } from 'zod';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { signupSchema } from '@/schemas/auth';
import { Button } from '@/components/ui/button';
import AlertDestructive from '@/components/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormItem, FormField, FormControl, FormMessage } from '@/components/ui/form';

interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type SignUpFormData = z.infer<typeof signupSchema>;

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const router = useRouter();

  const [error, setError] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
    } catch (e: any) {
      if (e) {
        setError(e);
      } else {
        setError('An error occurred while signing up. Please try again.');
      }
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
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="confirmEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Confirm Email" {...field} />
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
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="Confirm Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="mt-2 text-white" disabled={isSubmitting}>
              {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up 🌟
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
