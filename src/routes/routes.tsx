import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Ebook from '../pages/Ebook';
import EbookPreview from '../pages/EbookPreview';
import LinkBio from '../pages/LinkBio';
import TermsOfUse from '../pages/TermsOfUse';
import SuccessPage from '../pages/Success';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ebook" component={Ebook} />
        <Route path="/ebook-preview" component={EbookPreview} />
        <Route path="/termsofuse" component={TermsOfUse} />
        <Route path="/linkbio" component={LinkBio} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </BrowserRouter>
  );
}
