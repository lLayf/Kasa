import React from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import './layout.css';

function Layout(props) {
  return (
    <>
      <div className="app-container">
        <Header />
        <main className='content'>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
