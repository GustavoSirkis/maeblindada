import React from 'react';
import styles from '../styles/scss/About.module.scss';

const larissaLucena = '/img/larissa_perfil.jpg';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Dr.ª LARISSA LUCENA</h1>
      <h6>
        Médica Pediatra
        <br /> CRM-GO 22804
      </h6>
      <main className="aboutMain">
        <img src={larissaLucena} alt="Fotografia Drª Larissa em perfil" />
        <section className={styles.aboutText}>
          <p>
            "Meu desejo é deixar sua maternidade mais leve, te passar
            conhecimento com clareza e te blindar de informações erradas que
            podem chegar até você através da internet ou daqueles palpiteiros de
            plantão que sempre surgem por aí!
          </p>
          <p>
            Tenho certeza que depois de ler esse ebook seu pensamento será
            “Nossa finalmente entendi sobre vacinas!”. Assuntos como vacinas e
            muito mais você também encontra no meu Instagram{' '}
            <a href="/">@maeblindada</a> e no meu TikTok{' '}
            <a href="/">@maeblindada1</a>. Grande abraço!"
          </p>
          <p className={styles.signature}>Dr.ª Larissa Lucena</p>
        </section>
      </main>
    </div>
  );
}
