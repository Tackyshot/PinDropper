"use strict";
import React                                       from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//components
import Base         from './components/base.jsx';
import Index        from './components/index/';

export default () => {

  return (
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
        <IndexRoute component={Index} />
      </Route>
    </Router>
  )

}//Routes();
