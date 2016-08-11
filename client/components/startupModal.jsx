"use strict";
import Style            from '_common/_baseStyle';
import React            from 'react';

import Modal            from '_common/modal';

import CampaignActions  from 'actions/campaign.actions.js'
import CampaignStore    from 'stores/campaign.store.js'

export default class StartupModal extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      campaigns: []
    };
  }

  componentWillMount(){
    console.log("MOUNT MODAL");
  }

  render(){
    let style = Style.styles;

    return(
      <Modal title="Test Modal" isOpen={true}>
        <p>This is some test content for the modal</p>
      </Modal>
    )
  }//render

  componentDidMount(){
    CampaignActions.get((err)=>{
      if(!err){
        this.setState({
          campaigns: CampaignStore.getState()
        });
      }
    });
  }
}