"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from './style/';

export default class Corkboard extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {};

    //rebindings

  }

  componentWillMount(){

  }

  render(){
    let styles = Style.styles;

    return (
      <div className="corkboard" style={styles.corkboard}>
        <div className="canvas" style={styles.canvas} >
          {/*this section is where the drawing happens.*/}
        </div>
        <div className="canvasTools" style={styles.canvasTools} >
          {/*Canvas Tool Bar goes here (contains brushes and pins and shit.)*/}
        </div>
        <div className="corkboardMenus" style={styles.corkboardMenus} >
          {/*Custom Corkboard Menus go here via children*/}
          {this.props.children}
        </div>
      </div>
    );
  }//render

}

Corkboard.propTypes = {};

Corkboard.defaultProps = {};

