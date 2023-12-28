import React from 'react';
import { Sidebar } from '@components';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='contents'>
      <Sidebar />
      <main className='main-content'>{children}</main>
    </div>
  );
};

export default Layout;
