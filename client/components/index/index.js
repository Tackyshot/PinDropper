"use strict";
import AppBar   from 'material-ui/lib/app-bar';
import Style    from './_common/_baseStyle/'
import React    from 'react';

export default class Index extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {}
  }

  render(){
    let style = Style.styles;

    return(
      <div className="ApplicationIndex" >

      </div>
    )
  }
}