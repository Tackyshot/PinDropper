import React, {Component} from 'react';

import CharacterPicker from './characterPicker.jsx';
import CampaignPicker from './campaignPicker.jsx';

export default class ManagerContent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.constructor.determineContent(this.props.settings)}
      </div>
    )
  }

  static determineContent(settings){
    if(settings == null){
      return <CampaignPicker />
    }
    else {
      if(settings.campaign == null) return <CampaignPicker />;
      else if (settings.character == null) return <CharacterPicker />;
    }
  }
}