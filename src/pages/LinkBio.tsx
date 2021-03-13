import React from 'react';

import '../styles/scss/linkbio.scss';

import Footer from '../components/Footer';

import whiteLogo from '../assets/logo_white.svg';
import LarissaPerfil1 from '../assets/larissa_perfil1.png';

export default function LinkBio() {
  return (
    <>
      <main className="linkbio-container">
        <div className="linkbio-overlay"></div>
        <section className="linkbio-heading">
          <div className="linkbio-header">
            <img src={LarissaPerfil1} alt="Fotografia da Dr.ª Larissa" />
            <img
              className="home-header-logo"
              src={whiteLogo}
              alt="Mãe Blindada"
            />
          </div>
          <a
            href="https://www.instagram.com/maeblindada/"
            className="button linkbio-btn-1"
          >
            <i className="fab fa-instagram"></i>
            INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/maeblindada/"
            className="button linkbio-btn-2"
          >
            <i className="fab fa-facebook"></i>
            FACEBOOK
          </a>
          <a
            href="https://t.me/joinchat/UCsWKHlxsK6m7OEo"
            className="button linkbio-btn-4"
          >
            <i className="fab fa-telegram-plane"></i>
            TELEGRAM
          </a>
          <a
            href="chat.whatsapp.com/D1msJRUasf69RYrWkJqm5w"
            className="button linkbio-btn-3"
          >
            <i className="fab fa-whatsapp"></i>
            GRUPO DO WHATSAPP
          </a>

          <a
            href="https://www.maeblindada.com.br/ebook-previw"
            className="button linkbio-btn-5"
          >
            <i className="fas fa-book"></i>
            E-BOOK
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5562982103810"
            className="button linkbio-btn-6"
          >
            <i className="far fa-calendar-check"></i>
            AGENDAR CONSULTA
          </a>
          <a href="https://www.maeblindada.com/" className="button last-btn">
            <i className="far fa-calendar-check"></i>
            WEB SITE
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
