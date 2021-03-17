import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';

import '../styles/global.scss';

const propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired, // eslint-disable-line
};

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props;

    console.log(pageProps);

    return <Component {...pageProps} />;
  }
}

export default MyApp;
