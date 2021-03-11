import React from 'react';

import SignUpForm from './signupform';

import '../styles/ebooksection.css';
import EbookPreview from '../assets/ebookmockup.png';

export default function EbookSection(){
  return(
    <section className="ebook-preview-container">
      <div className="ebook-preview-overlay" />
      <div className="ebook-preview-wrapper">
        <h1><mark className="mark3">CONHEÇA</mark> A PRÉVIA DO MEU E-BOOK</h1>
        <div className="ebook-preview-content">
          <img src={EbookPreview} alt="Imagem Illustrativa do E-Book"/>
          <div className="list-container">
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
  )
}





