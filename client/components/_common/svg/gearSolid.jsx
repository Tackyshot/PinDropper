import React, {Component} from 'react';

export default class GearSolidSvg extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <svg version="1.0"
           xmlns="http://www.w3.org/2000/svg"
           x="0px"
           y="0px"
           width={`${this.props.width}px`}
           height={`${this.props.height}px`}
           fill={!!this.props.color ? this.props.color : '#FFFFFF'}
           viewBox="0 0 24 24">
        <path d="M19.4,13c0-0.3,0.1-0.7,0.1-1s0-0.7-0.1-1l2.1-1.5c0.2-0.1,0.3-0.4,0.1-0.7l-2-3.5C19.5,5,19.2,4.9,19,5l-2.4,1.1 c-0.5-0.4-1.2-0.8-1.8-1l-0.3-2.6C14.5,2.2,14.3,2,14,2H10C9.7,2,9.5,2.2,9.5,2.5L9.2,5c-0.7,0.3-1.3,0.6-1.8,1L5,5 C4.8,4.9,4.5,5,4.4,5.2l-2,3.5C2.2,9,2.2,9.3,2.5,9.4L4.6,11c0,0.3-0.1,0.7-0.1,1s0,0.7,0.1,1l-2.1,1.5c-0.2,0.1-0.3,0.4-0.1,0.7 l2,3.5C4.5,19,4.8,19.1,5,19l2.4-1.1c0.5,0.4,1.2,0.8,1.8,1l0.3,2.6c0,0.3,0.2,0.5,0.5,0.5H14c0.3,0,0.5-0.2,0.5-0.5l0.3-2.6 c0.7-0.3,1.3-0.6,1.8-1L19,19c0.2,0.1,0.5,0,0.6-0.2l2-3.5c0.1-0.2,0.1-0.5-0.1-0.7L19.4,13z M12,16c-2.2,0-4-1.8-4-4 c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"
          >
        </path>
      </svg>
    )
  }
}