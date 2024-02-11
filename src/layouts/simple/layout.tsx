import Footer from '@/components/footer';
import SiteHeader from '@/components/site-header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout({ children }: RootLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-[0.75fr,1fr,1fr,1fr] grid-rows-[0.1fr,5fr,1fr]">
      <SiteHeader
        useNavigator={false}
        className="col-span-4 row-span-1 border-b border-border/40"
      />
      <div className="col-span-4 row-span-2">{children}</div>
      <Footer className="col-span-4 row-span-3 border border-border/40" />
    </div>
  );
}
