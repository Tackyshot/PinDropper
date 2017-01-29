import React, {Component} from 'react';
import Style from 'style';

import {Row} from 'common/flexGrid/flexGrid.jsx';
import {SvgButton} from 'inputs';
import PlaySvg from 'svg/play.jsx';
import GearSolidSvg from 'svg/gearSolid.jsx';

import SettingsActions from 'actions/settings.actions.js';

export default class CampaignTile extends Component{
  constructor(props){
    super(props);

  }


  render(){
    console.log('render campaign tile', this.props);
    let style = Style.styles();

    let campaign = this.props.campaign;

    return(
      <div className={Style.css(style.campaignTile)} >
        <img src="https://placekitten.com/g/300/300" width="300px" alt="placeholder image"/>
        <div className={Style.css(style.tileHeader)}>
          <p className={Style.css(style.headerTitle)} >{campaign.name}</p>
        </div>
        <Row style={style.tileFooter} justify="flex-start" >
          <SvgButton
            onClick={(e)=>SettingsActions.updateSetting("campaign", campaign._id)}
            label="Play Campaign"
            width={36}
            height={36}
            svgImg={<PlaySvg width={36} height={36} color={'white'} />}
            />
          <SvgButton
            onClick={(e)=>SettingsActions.updateSetting("campaign", campaign._id)}
            label="Edit Campaign"
            width={36}
            height={36}
            svgImg={<GearSolidSvg width={36} height={36} color={'white'} />}
            />
        </Row>
      </div>
    )
  }

}