import React from 'react';

import WhatsApp from '../components/WhatsApp';
import HomeHeader from '../components/HomeHeader';
import Heading from '../components/Heading';
import EbookSection from '../components/EbookSection';
import About from '../components/About';
import Testemonial from '../components/Testemonial';

import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <main>
      <WhatsApp />
      <HomeHeader />
      <Heading />
      <EbookSection />
      <About />
      <Testemonial />
      <Footer />
    </main>
  );
}
