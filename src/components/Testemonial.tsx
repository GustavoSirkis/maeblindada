import React from 'react';

import CallToAction from './CallToAction';

import '../styles/scss/testemonial.scss';

export default function Testemonial() {
  return (
    <main className="testemonial-wrapper">
      <div className="testemonial-overlay"></div>
      <div className="testemonial-container">
        <header className="testemonial-cta">
          <CallToAction />
        </header>
        <section className="carousel-wrapper"></section>
      </div>
    </main>
  );
}
