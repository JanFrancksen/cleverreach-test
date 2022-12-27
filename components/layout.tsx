import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <main className="AppLayout">
    <Navbar />
    <Sidebar />
    {children}
  </main>
);

export default Layout;
