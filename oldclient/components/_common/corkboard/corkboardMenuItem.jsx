import React      from 'react';
import _          from 'lodash';
import Style      from './style/';

import IconButton from 'material-ui/lib/icon-button.js';
import FontIcon   from 'material-ui/lib/font-icon.js';

export default class CorkboardMenuItem extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      isOpen: false,
      isHover: false
    };

    //rebindings
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  componentWillReceiveProps(nProps){
    if(nProps.forceClose){
      this.setState({
        isOpen: false
      });
    }
  }

  render(){
    let style         = Style.styles;
    let cbMenuItem    = _.merge({}, style.cbMenuItem, {backgroundColor: this.state.isHover ? 'grey' : 'transparent'});

    return (
      <li className="cbMenuItem" style={cbMenuItem} onClick={this.toggleOpen} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover} >
        <img src={`/img/${this.props.menuIcon}`} alt={`${this.props.menuIcon}`} style={style.cbMenuIcon} />
      </li>
    );

  }//render

  toggleOpen(e){
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.onClick(this.state.isOpen ? -1 : this.props.menuIndex);
  }

  toggleHover(e){
    this.setState({
      isHover: e.type === 'mouseover'
    });
  }

}//Wrapper

CorkboardMenuItem.defaultProps = {
  menuIndex: -1,
  onClick: ()=>{},
  menuIcon: 'muidocs-icon-social-person',
  forceClose: false
};

CorkboardMenuItem.propTypes = {
  menuIndex: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  menuIcon: React.PropTypes.string,
  forceClose: React.PropTypes.bool
};

/*
 * muidocs-icon-social-person --> character stats
 * muidocs-icon-social-whatshot --> spells
 */