"use strict";
import React                                       from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//components
import Base         from './components/base.jsx';
import Index        from './components/index/';
import PinDropper   from './components/pindropper';

export default () => {

  return (
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
        <IndexRoute component={Index} />
        <Route path='app' component={PinDropper} />
      </Route>
    </Router>
  )

}//Routes();
