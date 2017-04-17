import React, {Component} from 'react';
import Style from './css/style.js';
import blacklist from 'blacklist';
//import any other dependencies here.

export default class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let newProps = blacklist(this.props, {
      className: true,
      style: true,
      order: true,
      flexGrow: true,
      flexShrink: true,
      flexBasis: true
    });

    //place JSX between the parens!
    return (
      <div
        className={{...this.buildStyles(), ...this.props.className}}
        style={this.props.style}
        {...newProps}
      >
        {this.props.children}
      </div>
    );
  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
  buildStyles(){
    let style = Style.styles();
    let alignSelf = this.props.alignSelf ? style[`alignS_${this.props.alignSelf}`] : style['align-self_stretch'];
    let styleObj = {
      flexStyles:{}
    };

    if(this.props.order) styleObj.flexStyles.order = this.props.order;
    if(this.props.flexShrink) styleObj.flexStyles.flexShrink = this.props.flexShrink;
    if(this.props.flexGrow) styleObj.flexStyles.flexGrow = this.props.flexGrow;
    if(this.props.flexBasis) styleObj.flexStyles.flexBasis = this.props.flexBasis;

    return Style.css(alignSelf, Style.create(styleObj).flexStyles);
  }

}//end Block class

Block.propTypes = {
  className: React.PropTypes.any,
  style: React.PropTypes.object,
  order: React.PropTypes.string || React.PropTypes.number,
  flexGrow: React.PropTypes.number || React.PropTypes.string,
  flexShrink: React.PropTypes.number || React.PropTypes.string,
  flexBasis: React.PropTypes.string || React.PropTypes.number,
};

