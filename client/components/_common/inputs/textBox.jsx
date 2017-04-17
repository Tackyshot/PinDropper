import React, {Component} from 'react';
import Style from 'style';
//import any other dependencies here.

export default class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //rebindings for custom methods go here.
  }

  componentWillMount() {

  }

  render() {
    let style = this.buildStyles();
    let nProps = blacklist(this.props, {
      class: true,
      className: true,
      size: true,
    });

    //place JSX between the parens!
    return (
      <input
        type="text"
        className={`${this.props.className} ${style[`textBox-${this.props.size}`]}`}
        {...nProps}
      />
    )

  }

  componentWillUnmount() {

  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
  buildStyles() {
    let style = Style.styles();
    //let regex = /xs|sm|md|lg|xl\i/;
    let styles;

    return
  }//buildStyles
}//end TextBox class

TextBox.propTypes = {
  size: React.PropTypes.string,
  
};

