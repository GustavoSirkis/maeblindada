import React from 'react';

import WhatsApp from '../components/WhatsApp';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const logoBlue = '/img/logo_white.svg';
const EbookMockup = '/img/ebookmockup.png';

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
