import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/Footer';

export default function (props) {
  // eslint-disable-next-line
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <br />
      <Footer />
    </div>
  );
}
