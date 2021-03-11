import React from 'react';

import WhatsApp from '../components/whatsapp';
import HomeHeader from '../components/homeheader';
import Heading from '../components/heading';
import EbookSection from '../components/ebooksection';
import About from '../components/about';
import Testemonial from '../components/testemonial';


import Footer from '../components/footer';



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
  )
}