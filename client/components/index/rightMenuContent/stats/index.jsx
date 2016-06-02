"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from 'style';
import TextField        from 'textfield';
//character stats components
import BaseStats        from './baseStats/';

export default class Stats extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      text: ''
    };

    //rebindings

  }

  componentWillMount(){

  }

  render(){
    let style = Style.styles;

    return (
      <div>
        <h2>this is where character stats go</h2>
        <TextField size='small' text={this.state.text} onChange={this.onChange}/>
        <BaseStats />
      </div>
    )
  }//render

  onChange(e){
    this.setState({
      text: e.target.value
    });
  }

}