import React from 'react';

import motherBaby from '../assets/maebaby.jpg';

export default function Heading() {
  return (
    <main className="heading-container">
      <h1>
        Primeiramente gostaria de parabenizar você que está em busca de{' '}
        <mark className="mark3">informações de qualidade</mark> para seu filho e
        sempre busca melhorar.{' '}
      </h1>
      <h2>Você Está no Caminho Certo!</h2>
      <div className="heading-content">
        <section className="heading-card">
          <h1>Descubra como facilitar as vacinas dos bebes</h1>
          <p>
            Sempre percebi uma enorme dificuldade das mães e pais em lidar com
            tantas vacinas as quais os bebês precisam e mais ainda em entender a
            diferença entre as fornecidas pela Rede pública e pela Rede privada,
            foi pensando em ajudar essas famílias que planejei esse E-Book para
            esclarecer essas dúvidas.
          </p>
          <p>
            Aqui você vai encontrar uma tabela super didática para entender a
            ordem das vacinas e algumas diferenças entre a Rede pública e
            Privada isso já vai te dar uma luz de entendimento muito grande e
            para fornecer um conhecimento mais aprofundado e técnico também
            escrevi sobre cada vacina em capítulos correspondentes aos meses
            onde ocorrem as vacinas, por exemplo: Capítulo 1 são sobre as
            vacinas que devem ser feitas ao nascimento, o Capítulo 2 sobre as
            vacinas aos 2 meses e assim por diante.{' '}
          </p>
        </section>
        <img src={motherBaby} alt="Fotografia Mãe e Seu Bebê" />
      </div>
    </main>
  );
}
