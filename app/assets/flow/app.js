/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,IndexRoute,Route,browserHistory} from 'react-router'

// controllers
import AppController from './controllers/app'
import PortfolioController from './controllers/portfolio'
import HomepageController from './controllers/homepage'
import OpenSourceController from './controllers/open-source'
import PlaygroundController from './controllers/playground'
import MaroonedController from './controllers/marooned'

let router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppController}>
      <IndexRoute component={HomepageController} />
      <Route path="portfolio" component={PortfolioController} />
      <Route path="open-source" component={OpenSourceController} />
      <Route path="playground" component={PlaygroundController} />
      <Route path="marooned" component={MaroonedController} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));

// import $$ from './decouple/decouple'
// import LinkDirective from './directives/link'
// $$.dom.registerDirective(LinkDirective);
// $$.dom.bootstrap();
