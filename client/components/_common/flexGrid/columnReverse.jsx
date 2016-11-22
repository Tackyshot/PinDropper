import React, {Component} from 'react';
import Style from 'style';

export default class ColumnReverse extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let theme = Style.theme();

    return(
      <div className={Style.css(theme.columnReverse)} >
        {this.props.children}
      </div>
    )
  }
}