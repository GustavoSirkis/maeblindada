import React from 'react';
import '../styles/footer.css';

export default function Footer() {

  return (
    <div className="footer-container">
      <section className="footer-list">
      <p>"Este Produto é destinado exclusivamente a profissionais da área da saúde.”</p>
        <ul>
          <li><a href="/TermsOfUse">Termos de Uso</a></li>
          <li><a href="/TermsOfUse">Políticas de Privacidade</a></li>
        </ul> 
               
      </section>
      <div className="copyRight">
          &copy; {1900 + new Date().getYear()} , feito com amor
          <i className=""/> por{" "}
          <a
            href="/"
            className=""
            target="_blank"
          >
            Mãe Blindada
          </a>{" "}
          para um mundo melhor.
      </div>
    </div>
  )
}