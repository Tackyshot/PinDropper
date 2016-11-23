"use strict";
import Style    from 'style'
import React    from 'react';

export default class Modal extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      isOpen: this.props.isOpen || false
    };

    //rebindings
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick    = this.handleClick.bind(this);
    this.closeModal     = this.closeModal.bind(this);
  }

  componentWillMount(){
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
    let style = Style.styles();
    let screenheight = Style.screensize().y;

    if(!this.state.isOpen) return null; //don't render modal if isn't open.

    return(
      <div className={Style.css(style.modalBackground)} style={{height: `${screenheight}px`,}} >
        <div className={Style.css(style.modal)} style={{height: `${(screenheight*.4)}px`}} >
          <div className={Style.css(style.modalTitleArea)} >
            <h2 className={Style.css(style.modalTitle)} >{this.props.title}</h2>
            <img src='/img/delete-52-dark.png' className={Style.css(style.modalCloseBtn)} onClick={this.handleClick}/>
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

} //Modal