import React from 'react';

import WhatsApp from '../components/whatsapp';
import EbookHead from '../components/ebookhead';
import Heading from '../components/heading';
import EbookSection from '../components/ebooksection';
import About from '../components/about';
import Testemonial from '../components/testemonial';
import Footer from '../components/footer';
import AceptCookies from '../components/cookiesacept';



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
  )
}