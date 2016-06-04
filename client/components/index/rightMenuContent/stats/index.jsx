"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from 'style';
import TextField        from 'textfield';
//character stats components
import BaseStats        from './baseStats/';
import request          from 'superagent';

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
        <button onClick={this.handleClick} value={'get'} >get</button>
        <button onClick={this.handleClick} value={'post'} >post</button>
        <button onClick={this.handleClick} value={'put'} >put</button>
        <BaseStats />
      </div>
    )
  }//render

  onChange(e){
    this.setState({
      text: e.target.value
    });
  }

  handleClick(e){
    let val = e.target.value;
    if(val === 'get'){
      request
        .get('/api/{campaignId}/newchar')
        .end((err, res)=>{
          console.log("GET RES:", res.text);
        });
    }
    else if(val === 'post'){
      request
        .post('/api/{campaignId}/newchar')
        .end((err, res)=>{
          console.log("POST RES:", res.text);
        });
    }
    else if(val == 'put'){
      request
        .put('/api/{campaignId}/newchar')
        .end((err, res)=>{
          console.log("PUT RES:", res.text);
        });
    }

  }

}