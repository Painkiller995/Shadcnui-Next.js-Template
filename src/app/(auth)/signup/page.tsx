import Link from 'next/link';
import PageFrame from '@/components/page-frame';

import { SignUpForm } from '../components/signup-form';

export default function SignUp() {
  return (
    <PageFrame className="flex flex-col md:flex-row">
      <div className="hidden bg-gradient-to-r from-green-400 to-blue-500 p-4 hover:from-pink-500 hover:to-yellow-500 md:flex md:w-1/2 md:flex-col-reverse">
        <p>
          Your journey begins with each login, opening doors to endless possibilities. Embrace
          progress and pave the way for success! 🔓🌟
        </p>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 p-20 md:w-1/2">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">🌟 Welcome aboard!</h1>
          <p className="text-sm text-muted-foreground">
            Embark on a journey with us by creating your account. 🚀
          </p>
          <SignUpForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
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
