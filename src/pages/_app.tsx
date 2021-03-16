import App from 'next/app';
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';

import '../styles/system.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
