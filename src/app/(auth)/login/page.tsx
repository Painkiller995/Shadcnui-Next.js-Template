import Link from 'next/link';
import PageFrame from '@/components/page-frame';

import { LoginForm } from '../components/login-form';

export default function Login() {
  return (
    <PageFrame className="flex flex-col md:flex-row">
      <div className="hidden bg-gradient-to-r from-green-400 to-blue-500 p-4 hover:from-pink-500 hover:to-yellow-500 md:flex md:w-1/2 md:flex-col-reverse">
        <p>Unlocking opportunities with every login. Embrace growth and success! 🔓🚀</p>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 p-20 md:w-1/2">
        <div className=" max-w-[600px]">
          <div className="flex flex-col space-y-2 pb-5 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">👋 Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to access your account. 🚀
            </p>
          </div>
          <LoginForm />
          <p className="px-8 py-10 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </PageFrame>
  );
}
