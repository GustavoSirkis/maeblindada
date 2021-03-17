import React from 'react';

import styles from '../styles/scss/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerList}>
        <p>
          "Este Produto é destinado exclusivamente a profissionais da área da
          saúde.”
        </p>
        <ul>
          <li>
            <a href="/TermsOfUse">Termos de Uso</a>
          </li>
          <li>
            <a href="/TermsOfUse">Políticas de Privacidade</a>
          </li>
        </ul>
      </section>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} , feito com amor
        <i className="" /> por{' '}
        <a href="/" className="" target="_blank">
          Mãe Blindada
        </a>{' '}
        para um mundo melhor.
      </div>
    </div>
  );
}
