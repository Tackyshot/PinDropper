import React, {Component} from 'react';
import Style from 'styles';

export default class Row extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let theme = Style.theme();

    return(
      <div className={Style.css(theme.grid)} >
        {this.props.children}
      </div>

    )
  }
}