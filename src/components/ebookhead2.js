import React from 'react';

import Iframe from './iframe';
import SignUpForm from './signupform';

import '../styles/ebookhead2.css';
import whiteLogo from '../assets/logo_white.svg';


export default function EbookHead2() {
  return (
    <main className="ebookhead-container">
      <div className="ebookhead-overlay"></div>
      <header className="ebookhead-wrapper">
          <img src={whiteLogo} alt="Mãe Blindada"/>
          <h1><mark className="mark1"> Atenção:</mark> Entenda de uma vez por todas quais as opções de vacinas essenciais para seu filho!</h1>
          <Iframe />
      </header>
      <SignUpForm/>
    </main>
  )
}