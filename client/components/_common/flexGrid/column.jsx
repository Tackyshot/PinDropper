import React, {Component} from 'react';
import Style from 'style';

export default class Column extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let theme = Style.theme();
    let justify = this.constructor.findJustification(this.props.justify);

    return(
      <div className={Style.css(theme.column, justify, this.props.style)} >
        {this.props.children}
      </div>
    )
  }

  static findJustification(justify){
    let theme = Style.theme();

    return !!theme[`justify-${justify}`] ? theme[`justify-${justify}`] : theme.column;
  }
}