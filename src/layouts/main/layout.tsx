import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';
import SiteHeader from '@/components/site-header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader className="border-b border-border/40" />
      <div className="flex flex-1">
        <Sidebar className="border-r border-border/40" />
        <div className="flex-1">{children}</div>
      </div>
      <Footer className="border border-border/40" />
    </div>
  );
}
