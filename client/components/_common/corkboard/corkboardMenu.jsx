"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from './style/';

export default class CorkboardMenu extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      menuHidden: false,
      activeChildIndex: -1
    };

    //rebindings
    this.menuItemOnClick = this.menuItemOnClick.bind(this);
  }

  componentWillMount(){

  }

  render(){
    let styles              = Style.styles;
    let menuStyle           = _.merge({}, styles.corkboardMenu, {});
    let cbHideMenuBtnStyle  = _.merge({}, styles.hideMenuBtn, {});
    let cbMenuBarStyle      = _.merge({}, styles.cbMenuBar, {}); //change whether right / left / top / bottom based on this.props.menuEdge
    let menuContentStyle    = _.merge({}, styles.cbMenuContent, {display: this.state.activeChildIndex !== -1 ? 'block' : 'none'}); //change whether right / left / top / bottom based on this.props.menuEdge

    let menuItems           = this.injectChildProps(this.props.children);
    let menuContent         = this.getActiveMenuItem(this.props.children);

    return (
      <div key={'cbMenu'} className="corkboardMenu" style={menuStyle}>
        <ul className="cbMenuBar" style={cbMenuBarStyle} >
          <li className="cbHideMenuBtn" style={cbHideMenuBtnStyle} >

          </li>
          {menuItems}
        </ul>
        <div className="cbMenuContent" style={menuContentStyle} >
          {menuContent}
        </div>
      </div>
    );
  }//render


  /*CUSTOM METHODS*/
  menuItemOnClick(childIndex) {
    //set the active index of the child will be either index or -1
    this.setState({
      activeChildIndex: childIndex
    });
  }

  injectChildProps(children){
    return React.Children.map(children, (child, index)=>{
      return React.cloneElement(child, {
        menuIndex: index,
        onClick: this.menuItemOnClick,
        forceClose: this.state.activeChildIndex !== index
      });
    });
  }

  getActiveMenuItem(children){
    let activeChildIndex = this.state.activeChildIndex;
    return activeChildIndex != -1 ? children[activeChildIndex].props.children : null;
  }

}

CorkboardMenu.propTypes = {
  menuEdge: React.PropTypes.string
};

CorkboardMenu.defaultProps = {
  menuEdge: 'right' //specifies which edge of the screen menu should be bound to.
};

