"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from 'style';
import TextField        from 'textfield';

export default class Health extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
    };

    //rebindings

  }

  componentWillMount(){

  }

  render(){
    let style = Style.styles;

    return (
      <div style={style.health} >
        <div style={style.healthBar} >
          <div style={style.hpProgress}></div> {/*this is used to show HP as a bubble*/}
        </div>
        <div style={style.hpInputs} >
          <div style={style.hpCurrent} >
            <TextField size='small' text='' onChange={} />
          </div>
          <div style={style.hpMax} >
            <TextField size='small' text='' onChange={} />
          </div>
        </div>
      </div>
    )
  }//render

}