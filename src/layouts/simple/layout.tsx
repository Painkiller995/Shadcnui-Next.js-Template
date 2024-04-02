import Footer from '@/components/footer';
import SiteHeader from '@/components/site-header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader useNavigator={false} className="border-b border-border/40" />
      <div className="flex flex-1">
        <div className="flex-1">{children}</div>
      </div>
      <Footer className="border border-border/40" />
    </div>
  );
}
