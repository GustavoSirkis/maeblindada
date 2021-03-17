import React from 'react';

import SignUpForm from './SignupForm';

import styles from '../styles/scss/HomeHeader.module.scss';

const logoWhite = '/svg/logo_white.svg';

export default function HomeHeader() {
  return (
    <main className={styles.homeheaderWrapper}>
      <div className={styles.homeheaderOverlay}></div>
      <header className={styles.homeheaderContainer}>
        <img src={logoWhite} alt="Mãe Blindada Logotipo" />
        <h1>
          <mark className={styles.mark1}>Atenção:</mark> Consulta pediátrica sem
          sair de casa, online ou presencial!
        </h1>
      </header>
      <section className={styles.homeheaderSection}>
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
