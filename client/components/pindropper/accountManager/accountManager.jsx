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

  componentWillReceiveProps(nProps){
    if(nProps !== this.props){
      this.setState({
        modalOpen: nProps.settings == null || nProps.settings.campaign === null
      });
    }
  }

  render(){
    let style = Style.styles();
    let theme = Style.theme();

    return (
      <div className={Style.css(style.accountManager)} >
        <button className={Style.css(style.accountManagerBtn)} onClick={this.toggleManager} ><GearSvg width='24' height='24' /></button>
        <Modal title="Campaign Picker" isOpen={this.state.modalOpen}>
          <ManagerContent settings={this.props.settings} />
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