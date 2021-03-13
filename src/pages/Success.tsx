import React from 'react';

import WhatsApp from '../components/Whatsapp';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

import '../styles/scss/success.scss';

import logoBlue from '../assets/logo_white.svg';
import EbookMockup from '../assets/ebookmockup.png';

export default function SuccessPage() {
  return (
    <main>
      <WhatsApp />
      <section className="success-container">
        <div className="success-overlay"></div>
        <header className="success-header">
          <section className="success-content">
            <img src={logoBlue} alt="" />
            <h1>
              <mark className="mark1">Parabéns</mark> sua inscrição foi
              realizada com sucesso!
            </h1>
            <h5>
              Verifique sua caixa de e-mai para ter acesso à prévia do meu
              E-Book!
            </h5>
          </section>
          <div className="ebook-img">
            <img src={EbookMockup} alt="" />
          </div>
          <CallToAction />
        </header>
      </section>
      <Footer />
    </main>
  );
}
