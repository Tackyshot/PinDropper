"use strict";
import Style    from '_common/_baseStyle';
import React    from 'react';

import Modal    from '_common/modal';
import {
        Expandable,
        ExpandableHeader,
        ExpandableContent
       }        from '_common/expandable';

import SettingsActions  from 'actions/settings.actions.js'
import CampaignActions  from 'actions/campaign.actions.js';
import CampaignStore    from 'stores/campaign.store.js';

export default class Base extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      modalOpen: true,
      campaigns: [],
      campaignSelected: false,
      characters:[],
      characterSelected: false,
    };

    //REBINDINGS
    this.handleCampaignSelect = this.handleCampaignSelect.bind(this);
    this.handleCharacterSelect = this.handleCharacterSelect.bind(this);
  }

  componentWillMount(){
    CampaignActions.get((err)=>{
      if(!err){
        this.setState({
          campaigns: CampaignStore.getState().campaigns
        });
      }
    });
  }

  render(){
    let style = Style.styles;

    return(
      <div className="baseComponent" style={style.baseComponent} >
        <Modal title="Test Modal" isOpen={this.state.modalOpen}>
          <Expandable>
            <ExpandableHeader>
              Select or Create Campaign
            </ExpandableHeader>
            <ExpandableContent>

            </ExpandableContent>
          </Expandable>
        </Modal>
        {this.props.children}
      </div>
    )
  }

  renderCampaigns(){
    let style = Style.styles;

    return(
      <ul>
        {this.state.campaigns.map((campaign)=>{
          return(
            <li key={`campaign-${campaign._id}`}>
              <div onClick={this.handleCampaignSelect} >
                <p data-campaign={campaign._id} >{campaign.name}</p>
                <p>{campaign.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  renderCampaigns(){
    let style = Style.styles;

    return (
      <ul>
        {this.state.characters.map((character)=>{
          return(
            <li key={`character-${character._id}`}>
              <div onClick={this.handleCampaignSelect} >
                <p data-character={character._id} >{character.name}</p>
                <p>{character.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  handleCampaignSelect(e){
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
  }
}