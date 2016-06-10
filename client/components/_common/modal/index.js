"use strict";
import Style    from 'style'
import React    from 'react';

export default class Modal extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      isOpen: this.props.isOpen || true
    };

    //rebindings
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick    = this.handleClick.bind(this);
    this.closeModal     = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nProps){
    console.log('nprops');
    if(nProps !== this.props){
      this.setState({
        isOpen: this.props.isOpen
      });
    }
  }

  render(){
    console.log('render', this.state.isOpen);
    let style = Style.styles;

    return(
      <div className="modalBackground" style={style.modalBackground} >
        <div className='modal' onKeyPress={this.handleKeyPress} style={style.modal} >
          <div className="modalTitleArea" style={style.modalTitleArea} >
            <p className="modalTitle" style={style.modalTitle} >{this.props.title}</p>
            <span className='modalCloseBtn' onClick={this.handleClick} style={style.modalCloseBtn}>X</span>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }

  /*CUSTOM HANDLERS*/

  handleKeyPress(e){
    console.log('KEYPRESS');
    if(e.keyCode === 27){
      this.closeModal();
    }
  }

  handleClick(e){
    console.log('CLICK');
    this.closeModal();
  }

  /*CUSTOM FUNCTIONS*/
  closeModal(){
    this.setState({
      isOpen: false
    })
  }

} //Modal