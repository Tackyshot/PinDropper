"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from 'style';

export default class CharacterPicker extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      isCharBtnHover: false,
      isNewCharHover: false,
      characters: {}
    };

    //rebindings
    this.toggleCharBtnHover = this.toggleCharBtnHover.bind(this);
    this.toggleNewCharHover = this.toggleNewCharHover.bind(this);
  }

  componentWillMount(){
    //This is where character data is retrieved. make the action call here.
  }

  render(){
    let style = Style.styles;

    return (
      <div className="charpicker" style={style.charpicker}>
        <div className="charbtnarea" style={style.charbtnarea} >
          {/*MAP THROUGH CHARACTER LIST value is the character id*/}
          <button className="charbtn" style={style.charbtn} value={1} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > William Caffery </button>




          <button className="charbtn" style={style.charbtn} value={2} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > Jarvis </button>
          <button className="charbtn" style={style.charbtn} value={3} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > Glen </button>
          <button className="charbtn" style={style.charbtn} value={4} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > Varro </button>
          <button className="charbtn" style={style.charbtn} value={5} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > Icy Dagger </button>
          <button className="charbtn" style={style.charbtn} value={6} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > Alkoze </button>
          <button className="charbtn" style={style.charbtn} value={7} onMouseOver={this.toggleCharBtnHover} onMouseOut={this.toggleCharBtnHover}  > Wylin </button>
        </div>
        <div className="charpickercontrols" style={style.charpickercontrols}>
          <img src="/img/plus-52.png"
               alt="New Character"
               style={
                _.merge(
                    {},
                  style.newcharbtn,
                  {backgroundColor: this.state.isNewCharHover ? '#F1F1F1' : 'transparent'}
                )
               }
               onMouseOver={this.toggleNewCharHover}
               onMouseOut={this.toggleNewCharHover}/>
        </div>
      </div>
    );
  }//render

  /*CUSTOM EVENT HANDLERS*/
  toggleCharBtnHover(e){
    this.setState({
      isCharBtnHover: e.type === 'mouseover' ? e.target.value : null
    });
  }

  toggleNewCharHover(e){
    console.log('toggle');
    this.setState({
      isNewCharHover: e.type === 'mouseover'
    });
  }
}