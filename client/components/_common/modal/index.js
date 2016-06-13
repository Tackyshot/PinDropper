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

  componentWillMount(){
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillReceiveProps(nProps){
    if(nProps.isOpen !== this.state.isOpen){
      this.setState({
        isOpen: nProps.isOpen
      });
    }
  }

  render(){
    return this.state.isOpen ? this.modal() : null;
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  /*CUSTOM HANDLERS*/

  handleKeyPress(e){
    console.log('KEYPRESS');
    if(e.keyCode === 27 && this.state.isOpen){
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

  modal(){
    let style = Style.styles;

    return(
      <div className="modalBackground" style={style.modalBackground} >
        <div className='modal' style={style.modal} >
          <div className="modalTitleArea" style={style.modalTitleArea} >
            <h3 className="modalTitle" style={style.modalTitle} >{this.props.title}</h3>
            <img className='modalCloseBtn' src='/img/delete-52.png' onClick={this.handleClick} style={style.modalCloseBtn} />
          </div>
          <hr className="modalHr" style={style.modalHr} />
          <div className="modalContentArea" style={style.modalContentArea}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

} //Modal