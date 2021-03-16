import React from 'react';

import WhatsApp from '../components/WhatsApp';
import EbookHead from '../components/EbookHead';
import Heading from '../components/Heading';
import EbookSection from '../components/EbookSection';
import About from '../components/About';
import Testemonial from '../components/Testemonial';
import Footer from '../components/Footer';
import AceptCookies from '../components/CookiesAcept';

export default function Ebook() {
  return (
    <main className="ebook-container">
      <AceptCookies />
      <WhatsApp />
      <EbookHead />
      <Heading />
      <EbookSection />
      <About />
      <Testemonial />
      <Footer />
    </main>
  );
}
