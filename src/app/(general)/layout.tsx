import '@/styles/globals.css';
import LayoutProvider from '@/layouts';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
