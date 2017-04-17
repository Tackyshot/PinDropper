import React, {Component} from 'react';
//import any other dependencies here.

export default class VikingHelmetSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //rebindings for custom methods go here.
  }

  componentWillMount() {

  }

  render() {

    //place JSX between the parens!
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={this.props.width ? this.props.width : "48px"}
        height={this.props.height ? this.props.height : "48px"}
        viewBox="0 0 48 48"
        enable-background="new 0 0 48 48"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              fill="#FFD54F"
              d="M15.898,26.5l-1.678-0.354c-0.654-0.148-1.217-0.309-1.827-0.515c-1.193-0.399-2.373-0.927-3.47-1.606
              c-2.216-1.338-3.993-3.357-4.987-5.505c-1.021-2.149-1.394-4.352-1.466-6.442C2.401,9.979,2.632,7.959,3,6
              c0.38,1.957,0.909,3.866,1.667,5.602c0.753,1.73,1.761,3.279,2.971,4.362c1.207,1.098,2.564,1.679,3.963,1.866
              c0.701,0.099,1.42,0.107,2.156,0.047c0.353-0.027,0.765-0.078,1.087-0.145c0.182-0.039,0.27-0.064,0.52-0.107l0.738-0.123
              L15.898,26.5z"></path>
          </g>
          <g>
            <path fill="#FFD54F" d="M31.898,17.502l0.737,0.123c0.25,0.043,0.339,0.068,0.521,0.107c0.321,0.066,0.733,0.117,1.086,0.145
              c0.736,0.061,1.455,0.052,2.156-0.047c1.399-0.188,2.756-0.769,3.963-1.866c1.211-1.083,2.218-2.632,2.971-4.362
              C44.091,9.866,44.62,7.957,45,6c0.367,1.959,0.599,3.979,0.531,6.078c-0.072,2.091-0.445,4.293-1.467,6.442
              c-0.994,2.147-2.771,4.167-4.986,5.505c-1.098,0.68-2.277,1.207-3.471,1.606c-0.61,0.206-1.174,0.366-1.827,0.515L32.102,26.5
              L31.898,17.502z"></path>
          </g>
        </g>
        <path fill="#795548" d="M37,26c0-7.18-5.82-13-13-13s-13,5.82-13,13v4.002h26V26z"></path>
        <path fill="#5D4037" d="M11,26v1.002h26V26c0-0.338-0.025-0.668-0.051-0.998H11.05C11.025,25.332,11,25.662,11,26z"></path>
        <g>
          <rect x="9" y="27" fill="#C5CAE9" width="30" height="6"></rect>
          <polygon fill="#C5CAE9" points="27,38 24,41 21,38 21,11 27,11 	"></polygon>
        </g>
        <circle fill="#5C6BC0" cx="24" cy="30.002" r="2"></circle>
        <g>
          <circle fill="#3F51B5" cx="30" cy="30.002" r="1"></circle>
          <circle fill="#3F51B5" cx="24" cy="17" r="1"></circle>
          <circle fill="#3F51B5" cx="24" cy="22" r="1"></circle>
          <circle fill="#3F51B5" cx="18" cy="30.002" r="1"></circle>
          <circle fill="#3F51B5" cx="13" cy="30.002" r="1"></circle>
          <circle fill="#3F51B5" cx="35" cy="30.002" r="1"></circle>
        </g>
      </svg>
    );
  }

  componentWillUnmount() {

  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
}//end VikingHelmetSvg class

VikingHelmetSvg.propTypes = {};

