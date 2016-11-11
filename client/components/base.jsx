"use strict";
import Style    from '_common/_baseStyle';
import React    from 'react';

import Modal    from './startupModal/';
/*
import {
        Expandable,
        ExpandableHeader,
        ExpandableContent
       }        from '_common/expandable';
*/

/*import SettingsActions  from 'actions/settings.actions.js'
import CampaignActions  from 'actions/campaign.actions.js';
import CampaignStore    from 'stores/campaign.store.js';*/

export default class Base extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {};
  }

  componentWillMount(){

  }

  render(){
    let style = Style.styles;

    return(
      <div className="baseComponent" style={style.baseComponent} >
        <Modal />
        {this.props.children}
      </div>
    )
  }
}