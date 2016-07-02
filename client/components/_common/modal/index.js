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
    console.log("mount", this.state.isOpen);
    if(this.state.isOpen){
      window.addEventListener('keydown', this.handleKeyPress);
    }
  }

  componentWillReceiveProps(nProps){
    console.log('nprops');
    if(nProps !== this.props){
      this.setState({
        isOpen: nProps.isOpen
      });
    }
  }

  componentWillUpdate(nProps, nState){
    if(nState.isOpen){
      window.addEventListener('keydown', this.handleKeyPress);
    }
  }

  render(){
    console.log('render', this.state.isOpen);
    let style = Style.styles;

    if(!this.state.isOpen) return null; //don't render modal if isn't open.

    return(
      <div className="modalBackground" style={style.modalBackground} >
        <div className='modal' style={style.modal} >
          <div className="modalTitleArea" style={style.modalTitleArea} >
            <p className="modalTitle" style={style.modalTitle} >{this.props.title}</p>
            <img src='/img/delete-52-dark.png' className='modalCloseBtn' onClick={this.handleClick} style={style.modalCloseBtn} />
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }

  componentDidUpdate(){
    if(!this.state.isOpen){
      window.removeEventListener('keydown', this.handleKeyPress);
    }
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