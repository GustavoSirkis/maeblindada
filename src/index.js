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
  <React.StrictMode>
      <BrowserRouter>
        <Switch>  
          <Route path="/" exact component={HomePage} />
          <Route path="/ebook" component={Ebook} />         
          <Route path="/ebook-preview" component={EbookPreview} />         
          <Route path="/linkbio" component={LinkBio} />         
          <Route path="/termsofuse" component={TermsOfUse} />         
          <Route path="/success" component={SuccessPage} />         
        </Switch>        
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


