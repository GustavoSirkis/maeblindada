import React from 'react';

import WhatsApp from '../components/Whatsapp';
import EbookHead2 from '../components/EbookHead2';
import Heading from '../components/Heading';
import EbookSection from '../components/EbookSection';
import About from '../components/About';
import Testemonial from '../components/Testemonial';
import Footer from '../components/Footer';

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
  );
}
