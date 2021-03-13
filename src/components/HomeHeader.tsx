import React from 'react';

import SignUpForm from './SignupForm';

import '../styles/scss/homeheader.scss';
import logoWhite from '../assets/logo_white.svg';

export default function HomeHeader() {
  return (
    <main className="homeheader-wrapper">
      <div className="homeheader-overlay"></div>
      <header className="homeheader-container">
        <img src={logoWhite} alt="Mãe Blindada Logotipo" />
        <h1>
          <mark className="mark1">Atenção:</mark> Consulta pediátrica sem sair
          de casa, online ou presencial!
        </h1>
      </header>
      <section className="homeheader-section">
        <h3>Quer agendar agora?</h3>
        <div className="home-cta">
          <a
            href="https://api.whatsapp.com/send?phone=5562982103810"
            className="homeheader-btn"
          >
            SIM <i className="far fa-thumbs-up"></i>
          </a>
        </div>
        <SignUpForm />
      </section>
    </main>
  );
}
