import React from 'react';

import Iframe from './Iframe';
import CallToAction from './CallToAction';

import styles from '../styles/scss/EbookHead.module.scss';

const whiteLogo = '/img/logo_white.svg';

export default function EbookHead() {
  return (
    <main className={styles.ebookheadContainer}>
      <div className={styles.ebookheadOverlay}></div>
      <header className={styles.ebookheadWrapper}>
        <img src={whiteLogo} alt="Mãe Blindada" />
        <h1>
          <mark className="mark1"> Atenção:</mark> Entenda de uma vez por todas
          quais as opções de vacinas essenciais para seu filho!
        </h1>
        <Iframe />
      </header>
      <CallToAction />
    </main>
  );
}
