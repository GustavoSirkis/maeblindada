import React from 'react';

import '../styles/signupform.css';

export default class SingUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ nameValue: event.target.value });
    this.setState({ emailValue: event.target.value });
    this.setState({ telefoneValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://mailchimp.us12.website.comXXXXXXXXXXXXXXX').then(
      (response) => {
        return response.json();
      },
    );
  }

  render() {
    return (
      <main id="mc_embed_signup" className="form-container">
        <form
          action="https://mailchimp.us12.website.comXXXXXXXXXXXXXXX"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <input type="hidden" name="u" value="XXXXXxxXXXXXXxxxXXXXxxX" />
          <input type="hidden" name="id" value="XXXXXXXXXxXXxx" />

          <section id="mc_embed_signup_scroll">
            <h5>
              Cadastre seu e-mail para receber a prévia do meu E-Book gratuito.
            </h5>
            <label htmlFor="mce-NOME">
              <title>Nome:</title>
              <input
                name="NOME"
                id="mce-NOME"
                type="text"
                value={this.state.nameValue}
                onChange={this.handleChange}
                placeholder="Nome"
                required
              />
            </label>

            <label htmlFor="mce-EMAIL">
              <title>Email:</title>
              <input
                name="EMAIL"
                id="mce-EMAIL"
                type="email"
                value={this.state.value}
                onChange={this.handleChange.emailValue}
                placeholder="Email"
                required
              />
            </label>

            <label htmlFor="mce-TELEFONE">
              <title>Telefone:</title>
              <input
                name="TELEFONE"
                id="mce-TELEFONE"
                type="tel"
                value={this.state.value}
                onChange={this.handleChange.telefoneValue}
                placeholder="Telefone"
                required
              />
            </label>

            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>

            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_89b19e4d87d3f627d817dbf94_16ce464f43"
                tabIndex="-1"
              />
            </div>

            <input
              type="submit"
              value="CADASTRAR"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </section>
        </form>
      </main>
    );
  }
}
