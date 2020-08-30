import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Root({ children }) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


