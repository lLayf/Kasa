import React from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';

function Layout(props) {
  return (
    <>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
