import './style.less';
import React from 'react';

export const MainLayout = ({ children }: React.PropsWithChildren<any>) => {
  return <div className="main-layout">{children}</div>;
};

MainLayout.displayName = 'MainLayout';
