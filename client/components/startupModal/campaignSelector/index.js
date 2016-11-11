"use strict";
import React    from 'react';
//import Style    from 'style';

export default class CampaignSelector extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {};

    //REBINDINGS
    this.handleCampaignSelect = this.handleCampaignSelect.bind(this);
    this.handleCharacterSelect = this.handleCharacterSelect.bind(this);
  }

  componentWillMount(){
    /*CampaignActions.get((err)=>{
      if(!err){
        this.setState({
          campaigns: CampaignStore.getState().campaigns
        });
      }
    });*/
  }

  render(){
    //let style = Style.styles;

    return(
      <ul>
        {this.props.map((campaign)=>{
          return(
            <li key={`campaign-${campaign._id}`}>
              <div onClick={(e)=>{}} >
                <p data-campaign={campaign._id} >{campaign.name}</p>
                <p>{campaign.description}</p>
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

  /*handleCharacterSelect(e){
    let character = e.target.dataset.character;

    SettingsActions.set('character', character, ()=>{
      this.setState({
        characterSelected: true,
        modalOpen: false
      });
    });
  }*/
}