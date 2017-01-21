import React, {Component} from 'react';
import Style from 'style';

export default class RowReverse extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let theme = Style.theme();

    return(
      <div className={Style.css(theme.rowReverse)} >
        {this.props.children}
      </div>
    )
  }
}