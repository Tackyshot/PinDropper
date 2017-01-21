import React, {Component} from 'react';
import Style       from 'style';

export default class SvgButton extends Component{
  constructor(props){
    super(props);

    this.state = {
      hasHover: false
    };

    //rebindings
    this.toggleHover = this.toggleHover.bind(this);
  }

  render(){
    let style = Style.styles();
    let theme = Style.theme();
    let secondStyle = this.buildSecondaryStyles();

    let value = typeof this.props.value !== 'undefined' ? this.props.value : null;
    let maxWidth = this.state.hasHover ? style.mwFull : secondStyle.mwNone;
    let display = this.state.hasHover ? style.fullDisplay : style.noDisplay;

    return(
      <button className={Style.css(style.playButton, secondStyle.playButtonSecondary, theme.row, theme['alignItems-center'], maxWidth)}
              onMouseOver={this.toggleHover}
              onMouseOut={this.toggleHover}
              onClick={this.props.onClick}
              value={value}
        >
        <div className={Style.css(style.svgWrap, secondStyle.svgWrapSecondary)} >
          {this.props.svgImg}
        </div>
        <div className={Style.css(style.playBtnTitle, display)} >
          {this.props.label}
        </div>
      </button>
    );
  }

  //custom handlers
  toggleHover(e){
    this.setState({
      hasHover: !this.state.hasHover
    });
  }

  buildSecondaryStyles(){
    let width = this.props.width;
    let height = this.props.height;

    return Style.create({
      playButtonSecondary:{
        minWidth: `${width+4}px`
      },
      svgWrapSecondary:{
        width: `${width}px`,
        minWidth: `${width}px`,
        height: `${height}px`,
        minHeight: `${height}px`,
      },
      mwNone:{
        maxWidth: `${width+4}px`
      },
      playBtnTitleSecondary:{

      }
    })
  }
}