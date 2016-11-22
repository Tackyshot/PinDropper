import React, {Component} from 'react';
import Style from 'style';

import {Column} from 'common/flexGrid/flexGrid.jsx';

import SettingsActions from 'actions/settings.actions.js';

export default class CampaignTile extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let style = Style.styles();
    let theme = Style.theme();
    let campaign = this.props.campaign;

    console.log("Theme", theme.button);

    return(
      <Column style={style.campaignTile} >
        <img src="http://placehold.it/100x100" width="100px" alt="placeholder image"/>
        <h2>{campaign.name}</h2>
        <button className={Style.css(theme.buttonPrimary)}  onClick={(e)=>SettingsActions.updateSetting("campaign", campaign._id)} >Play Campaign</button>
      </Column>
    )
  }
}