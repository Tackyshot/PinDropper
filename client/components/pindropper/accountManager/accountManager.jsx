import React, {Component} from 'react';
import Style from 'style';

import SettingsActions from 'actions/settings.actions.js';

import Modal    from 'common/modal/modal.jsx';
import GearSvg from 'svg/gear.jsx';
import ManagerContent from './managerContent.jsx';

export default class AccountManager extends Component{
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.settings == null || this.props.settings.campaign === null
    };

    this.toggleManager = this.toggleManager.bind(this);
  }

  render(){
    let style = Style.styles();
    let theme = Style.theme();

    return (
      <div className={Style.css(style.accountManager)} >
        <button className={Style.css(style.accountManagerBtn)} onClick={this.toggleManager} ><GearSvg width='24' height='24' /></button>
        <Modal title="Test Modal" isOpen={this.state.modalOpen}>
          <p>This is some test content for the modal</p>
          <ManagerContent />
        </Modal>
      </div>
    )
  }

  toggleManager(e){
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }
}