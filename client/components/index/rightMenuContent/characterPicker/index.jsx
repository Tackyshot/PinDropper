"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from 'style';

export default class CharacterPicker extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      characters: {}
    };

    //rebindings

  }

  componentWillMount(){

  }

  render(){
    let style = Style.styles;

    return (
      <div className="charpicker" style={style.charpicker}>
        <div className="charbtnarea" style={style.charbtnarea} >
          <button className="charbtn" style={style.charbtn} > William Caffery </button>
          <button className="charbtn" style={style.charbtn} > Jarvis </button>
          <button className="charbtn" style={style.charbtn} > Glen </button>
          <button className="charbtn" style={style.charbtn} > Varro </button>
          <button className="charbtn" style={style.charbtn} > Icy Dagger </button>
          <button className="charbtn" style={style.charbtn} > Alkoze </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
          <button className="charbtn" style={style.charbtn} > Wylin </button>
        </div>
        <div className="charpickercontrols" style={style.charpickercontrols}>
          <img src="/img/plus-52.png" alt="New Character" style={style.newcharbtn} />
        </div>
      </div>
    )
  }//render

}