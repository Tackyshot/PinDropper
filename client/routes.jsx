"use strict";
import React                                       from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//components
import Base from './components/base.jsx';
import PinDropper from './components/pindropper/pindropper.jsx';

export default class Routes extends React.Component {

  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Base}>
          <IndexRoute component={PinDropper} />
        </Route>
      </Router>
    )
  }

  handleOnEnter(){

  }

  static checkLoggedIn(){

  }

}//Routes();
