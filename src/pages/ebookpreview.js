import React from 'react';

import WhatsApp from '../components/whatsapp';
import EbookHead2 from '../components/ebookhead2'
import Heading from '../components/heading';
import EbookSection from '../components/ebooksection';
import About from '../components/about';
import Testemonial from '../components/testemonial';
import Footer from '../components/footer';



export default function EbookPreview() {
  return (
    <main className="ebookpreview-container">
      <WhatsApp />
      <EbookHead2 />
      <Heading />
      <EbookSection />
      <About />
      <Testemonial />
      <Footer />

    </main>
  )
}