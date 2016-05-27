"use strict";
import AppBar   from 'material-ui/lib/app-bar';
import Style    from './_common/_baseStyle/'
import React    from 'react';

export default class Base extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {}
  }

  render(){
    let style = Style.styles;

    return(
      <div className="baseComponent" style={style.baseComponent} >
        {this.props.children}
      </div>
    )
  }
}