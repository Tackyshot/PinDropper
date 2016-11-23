import React, {Component} from 'react';
import Style from 'style';

import {Row} from 'common/flexGrid/flexGrid.jsx';
import PlaySvg from 'svg/play.jsx';

import SettingsActions from 'actions/settings.actions.js';

export default class CampaignTile extends Component{
  constructor(props){
    super(props);

    this.state = {
      hasHover: false
    };

    this.toggleHover = this.toggleHover.bind(this);

  }

  render(){
    let style = Style.styles();
    let theme = Style.theme();
    let color = Style.colors();

    let maxWidth = this.state.hasHover ? style.mwFull : style.mwNone;
    let display = this.state.hasHover ? style.fullDisplay : style.noDisplay;

    let campaign = this.props.campaign;

    return(
      <div className={Style.css(style.campaignTile)} >
        <img src="https://placekitten.com/g/300/300" width="300px" alt="placeholder image"/>
        <div className={Style.css(style.tileHeader)}>
          <p className={Style.css(style.headerTitle)} >{campaign.name}</p>
        </div>
        <Row style={style.tileFooter} justify="flex-start" >
          <button className={Style.css(style.playButton, theme.row, /*theme['justify-space-between'],*/ theme['alignItems-center'], maxWidth)}
                  onMouseOver={this.toggleHover}
                  onMouseOut={this.toggleHover}
                  onClick={(e)=>SettingsActions.updateSetting("campaign", campaign._id)}
          >
            <div className={Style.css(style.svgWrap)} >
              <PlaySvg width={36} height={36} color={'white'} />
            </div>
            <div className={Style.css(style.playBtnTitle, display)} >
              Play Campaign
            </div>
          </button>
        </Row>
      </div>
    )
  }

  toggleHover(e){
    this.setState({
      hasHover: !this.state.hasHover
    });
  }
}