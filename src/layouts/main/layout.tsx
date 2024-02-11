import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';
import SiteHeader from '@/components/site-header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: RootLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-[0.75fr,1fr,1fr,1fr] grid-rows-[0.1fr,5fr,1fr]">
      <SiteHeader className="col-span-4 row-span-1 border-b border-border/40" />
      <Sidebar className="hidden border-r border-border/40 lg:col-span-1 lg:row-span-4 lg:grid" />
      <div className="col-span-4 row-span-2 lg:col-span-3">{children}</div>
      <Footer className="col-span-4 row-span-3 border border-border/40" />
    </div>
  );
}
