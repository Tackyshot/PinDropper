import React  from 'react';
import _      from 'lodash';

import Style  from './style/';

export default class TextField extends React.Component {
  constructor(props){
    super(props);

    this.state = {};

    //rebindings

  }

  render(){
    let inputStyle = _.merge({}, this.constructor.findStyle(this.props.size), this.props.style);
    return <input className type="text" style={inputStyle} disabled={this.props.disabled} />
  }

  static findStyle(size){
    let style = Style.styles;

    switch (size){
      case 'small':
        return style.inputSm;
      break;
      case 'medium':
        return style.inputMed;
      break;
      case 'large':
        return style.inputLg;
      break;
      case 'extraLarge':
        return style.inputXl;
      break;
      default:
        return style.inputSm;
      break;
    }
  }//findStyle

}//TextField

TextField.defaultProps = {
  size: 'small',
  onChange: ()=>{},
  disabled: false,
  text: '',
  style: {}
};

TextField.propTypes = {
  size: React.PropTypes.string,
  onChange: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  style: React.PropTypes.object
}