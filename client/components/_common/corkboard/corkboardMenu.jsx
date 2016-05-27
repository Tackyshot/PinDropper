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

  }

  componentWillMount(){

  }

  render(){
    let styles              = Style.styles;
    let menuStyle           = _.merge({}, styles.corkboardMenu, {});
    let cbHideMenuBtnStyle  = _.merge({}, styles.hideMenuBtn, {});
    let menuBarStyle        = _.merge({}, styles.cbMenuBar, {});
    let menuContentStyle    = _.merge({}, styles.cbMenuContent, {});

    let menuItems           = this.injectChildProps(this.props.children);
    let menuContent         = this.getActiveMenuItem(this.props.children);

    return (
      <div key={'cbMenu'} className="corkboardMenu" style={menuStyle}>
        <div className="hideMenuBtn" style={cbHideMenuBtnStyle} >
        </div>
        <div className="cbMenuBar" style={menuBarStyle} >
          {menuItems}
        </div>
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
      return React.cloneElement(child, {menuIndex: index, onClick: this.menuItemOnClick});
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

