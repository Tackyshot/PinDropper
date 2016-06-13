"use strict";
import Style    from '_common/_baseStyle';
import React    from 'react';

import Modal    from '_common/modal';

export default class Base extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {}
  }

  render(){
    let style = Style.styles;

    return(
      <div className="baseComponent" style={style.baseComponent} >
        <Modal title="Test Modal" isOpen={true}>
          <p>This is some test content for the modal</p>
        </Modal>
        {this.props.children}
      </div>
    )
  }
}