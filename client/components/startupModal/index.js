"use strict";
import React        from 'react';
import Style        from 'style';
import {observer}   from 'mobx-react';

import Modal    from '_common/modal';
import {
  Expandable,
  ExpandableHeader,
  ExpandableContent
}        from '_common/expandable';

import CampaignSelector from './campaignSelector';
import CampaignStore from '_stores/campaign.store.js';

export default @observer
class StartupModal extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      modalOpen: true,
    };

    //REBINDINGS
  }

  componentWillMount(){
    CampaignStore.load();
  }

  render(){
    let style = Style.styles;

    return(
        <Modal title="Test Modal" isOpen={this.state.modalOpen}>
          <Expandable>
            <ExpandableHeader>
              Select or Create Campaign
            </ExpandableHeader>
            <ExpandableContent>
              <CampaignSelector {...CampaignStore.state} />
            </ExpandableContent>
          </Expandable>
        </Modal>
    )
  }

/*  handleCampaignSelect(e){
    let campaign = e.target.dataset.campaign;

    SettingsActions.set('campaign', campaign, ()=>{
      this.setState({
        campaignSelected: true
      });
    });
  }

  handleCharacterSelect(e){
    let character = e.target.dataset.character;

    SettingsActions.set('character', character, ()=>{
      this.setState({
        characterSelected: true,
        modalOpen: false
      });
    });
  }*/
}