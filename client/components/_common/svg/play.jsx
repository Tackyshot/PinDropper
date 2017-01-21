import React, {Component} from 'react';

export default class PlaySvg extends Component {
  constructor(props){
    super(props);
  }

  /*render(){
    return(
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 50 50"
           width={`${this.props.width}px`}
           height={`${this.props.height}px`}
           fill={!!this.props.color ? this.props.color : '#FFFFFF'}
        >
        <path d="M10,5.251v39.497L43.572,25L10,5.251z"></path>
      </svg>
    )
  }*/

  /*render(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           width={`${this.props.width}px`}
           height={`${this.props.height}px`}
           fill={!!this.props.color ? this.props.color : '#FFFFFF'}
           viewBox="0 0 26 26">
        <path d="M20.208,11.857L6.902,5.26C6.499,5.057,6.018,5.079,5.634,5.312c-0.386,0.232-0.619,0.646-0.619,1.09V19.6 c0,0.443,0.233,0.856,0.619,1.089c0.208,0.126,0.444,0.19,0.683,0.19c0.201,0,0.401-0.046,0.586-0.138l13.306-6.599 c0.438-0.218,0.716-0.658,0.716-1.143S20.646,12.075,20.208,11.857z"></path>
      </svg>
    )
  }*/

  render(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           width={`${this.props.width}px`}
           height={`${this.props.height}px`}
           fill={!!this.props.color ? this.props.color : '#FFFFFF'}
           version="1"
           viewBox="0 0 24 24"
           style={!!this.props.style ? this.props.style : {}}
        >
        <path d="M 7 5 L 7 19 L 19 12 L 7 5 z"></path>
      </svg>
    )
  }
}