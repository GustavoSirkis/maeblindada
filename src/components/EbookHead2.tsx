import React from 'react';

import Iframe from './Iframe';
import SignUpForm from './SignupForm';

import styles from '../styles/scss/EbookHead2.module.scss';

const whiteLogo = '/img/logo_white.svg';

export default function EbookHead2() {
  return (
    <main className={styles.ebookheadContainer}>
      <div className={styles.ebookheadOverlay}>
        <header className={styles.ebookheadWrapper}>
          <img src={whiteLogo} alt="Mãe Blindada" />
          <h1>
            <mark className="mark1"> Atenção:</mark> Entenda de uma vez por
            todas quais as opções de vacinas essenciais para seu filho!
          </h1>
          <Iframe />
        </header>
        <SignUpForm />
      </div>
    </main>
  );
}
