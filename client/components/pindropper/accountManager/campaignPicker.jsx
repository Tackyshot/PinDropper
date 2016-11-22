"use strict";
import React, {Component} from 'react';
import {Row} from 'common/flexGrid/flexGrid.jsx';

import CampaignTile from './campaignTile.jsx';
import CampaignsActions from 'actions/campaigns.actions.js';
import CampaignsStore from 'stores/campaigns.store.js';

export default class CampaignPicker extends Component{
  constructor(props){
    super(props);

    this.state = {
      campaigns: null
    };

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
      <Row>
        {this.state.campaigns === null ? null : this.state.campaigns.map((campaign)=>{
          return (<CampaignTile key={campaign._id} campaign={campaign} />);
        })}
      </Row>
    )
  }

  campaignsStoreListener(campaigns){
    this.setState(campaigns);
  }
}