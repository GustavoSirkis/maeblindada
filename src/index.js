import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage';
import Ebook from './pages/ebook';
import EbookPreview from './pages/ebookpreview';
import LinkBio from './pages/linkbio';
import TermsOfUse from './pages/termsofuse';
import SuccessPage from './pages/success';

import './styles/global.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
      <Route path="/ebook" render={(props) => <EbookPage {...props} />} />
      <Route
        path="/ebook-preview"
        render={(props) => <EbookPreview {...props} />}
      />
      <Route path="/termsofuse" render={(props) => <TermsOfUse {...props} />} />
      <Route path="/linkbio" render={(props) => <LinkBio {...props} />} />
      <Route path="/success" render={(props) => <SuccessPage {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
