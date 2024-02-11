import React from 'react';

import MainLayout from './main/layout';
import SimpleLayout from './simple/layout';

interface RootLayoutProps {
  children: React.ReactNode;
  isSimpleLayout?: boolean;
}

const LayoutProvider = ({ isSimpleLayout, children }: RootLayoutProps) => (
  <>
    {isSimpleLayout ? <SimpleLayout>{children}</SimpleLayout> : <MainLayout>{children}</MainLayout>}
  </>
);

export default LayoutProvider;
