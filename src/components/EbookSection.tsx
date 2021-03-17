import React from 'react';

import SignUpForm from './SignupForm';

import styles from '../styles/scss/EbookSection.module.scss';

const EbookPreview = '/img/ebookmockup.png';

export default function EbookSection() {
  return (
    <section className={styles.ebookPreviewContainer}>
      <div className={styles.ebookPreviewOverlay} />
      <div className={styles.ebookPreviewWrapper}>
        <h1>
          <mark className="mark3">CONHEÇA</mark> A PRÉVIA DO MEU E-BOOK
        </h1>
        <div className={styles.ebookPreviewContent}>
          <img src={EbookPreview} alt="Imagem Illustrativa do E-Book" />
          <div className={styles.listContainer}>
            <h2>TEMAS ABORDADOS</h2>
            <ul>
              <li>- Diferenças entre vacinas da rede pública e privada;</li>
              <li>- Vacinas ao nascimento;</li>
              <li>- Vacinas dos 2 meses de vida aos 9 anos de idade;</li>
              <li>- Indicaçòes;</li>
              <li>- Contra Indicações;</li>
              <li>- Objetivo das Vacinas;</li>
              <li>- Composição;</li>
              <li>- Reações adversas;</li>
              <li id="last-item">- Forma de Administração;</li>
            </ul>
          </div>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
}
