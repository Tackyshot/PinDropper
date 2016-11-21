"use strict";
import React    from 'react';

export default class Base extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return(
      <div className="baseComponent" style={{
        padding: "0px",
        margin: "0px",
        display: "block",
        width: "100%",
        height: "100%",
        maxHeight: "100%"
      }} >
        {this.props.children}
      </div>
    )
  }
}