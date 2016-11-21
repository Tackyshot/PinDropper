"use strict";
import React, {Component} from 'react';

import CampaignsActions from 'actions/campaigns.actions.js';
import CampaignsStore from 'stores/campaigns.store.js';

export default class CampaignPicker extends Component{
  constructor(props){
    super(props);

    this.state = {
      campaigns: null
    }

    this.campaignsStoreListener = this.campaignsStoreListener.bind(this);
  }

  componentWillMount(){
    let campaigns = CampaignsStore.getState().campaigns;
    CampaignsStore.listen(this.campaignsStoreListener);

    if(campaigns == null) CampaignsActions.load();
    else this.setState({campaigns: campaigns});

  }

  render(){
    return (
      <div>
        {this.state.campaigns === null ? null : this.state.campaigns.map((campaign)=>{
          return (
            <p>{campaign.name}</p>
          )
        })}
      </div>
    )
  }

  campaignsStoreListener(testvar){
    console.log("TEST VAR:", testvar);
    this.setState(CampaignsStore.getState());
  }
}