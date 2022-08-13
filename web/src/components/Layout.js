import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
