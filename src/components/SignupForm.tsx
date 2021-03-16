import React from 'react';

export default class SingUpForm extends React.Component<
  {},
  { email: string; name: string; phone: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
    };
  }

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event: Event) {
  //   event.preventDefault();
  //   this.setState({ name: event.target.value });
  //   this.setState({ email: event.target.value });
  //   this.setState({ phone: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch('https://mailchimp.us12.website.comXXXXXXXXXXXXXXX').then(
  //     (response) => {
  //       return response.json();
  //     },
  //   );
  // }
  render() {
    return (
      <main id="mc_embed_signup" className="form-container">
        <form
          action={process.env.MAILCHIMP_URL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <input type="hidden" name="u" value={process.env.MAILCHIMP_U} />
          <input
            type="hidden"
            name="id"
            value={process.env.MAILCHIMP_AUDIENCE}
          />

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
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                autoCapitalize="off"
                autoCorrect="off"
                // onChange={this.handleChange}
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
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                autoCapitalize="off"
                autoCorrect="off"
                // onChange={this.handleChange}
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
                value={this.state.phone}
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                // onChange={this.handleChange}
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
                // tabIndex="-1"
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
