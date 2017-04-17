import React, {Component} from 'react';
import Style from './css/style.js';
import blacklist from 'blacklist';
//import any other dependencies here.

export default class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let newProps = blacklist(this.props, {
      className: true,
      style: true,
      reverse: true,
      justify: true,
      wrap: true,
      alignItems: true,
      alignContent: true,
    });

    //place JSX between the parens!
    return (
      <div
        className={`${this.buildStyles()} ${this.props.className}`}
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
  buildStyles() {
    let style = Style.styles();
    let reverse = this.props.reverse ? style.rowReverse :  style.row;
    let justify = this.props.justify ? style[`justify_${this.props.justify}`] : style['justify_flex-start'];
    let wrap = this.props.wrap ? style[`flex-wrap_${this.props.wrap}`] : style['flex-wrap_nowrap'];
    let alignItems = this.props.alignItems ? style[`alignI_${this.props.alignItems}`] : style['alignI_stretch'];
    let alignContent = this.props.alignContent ? style[`alignC_${this.props.alignContent}`] : style[`alignC_stretch`];

    return Style.css(reverse, justify, wrap, alignItems, alignContent);
  }//buildStyles

}//end Row class

Row.propTypes = {
  className: React.PropTypes.any,
  style: React.PropTypes.object,
  reverse: React.PropTypes.bool,
  justify: React.PropTypes.string,
  wrap: React.PropTypes.string,
  alignItems: React.PropTypes.string,
  alignContent: React.PropTypes.string,
};

