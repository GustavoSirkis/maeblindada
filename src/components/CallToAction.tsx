import React from 'react';

import styles from '../styles/scss/CallToAction.module.scss';

const cardsImg = '/img/pgseguro.png';

export default function CallToAction() {
  return (
    <main className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <a
          href="https://pay.hotmart.com/P48898111E?checkoutMode=10"
          className="button cta-btn"
        >
          QUERO SER UMA MÃE BLINDADA
        </a>
        <p>
          De: <s>R$ 127,00</s> <br />
          Por:{' '}
          <mark className={styles.mark3}>
            <strong>5x de R$ 10,11</strong>
          </mark>
          <br />
          ou 1x de R$ 47,00
        </p>
      </div>
      <img className={styles.ctaImg} src={cardsImg} alt="Pay Safely" />
    </main>
  );
}
