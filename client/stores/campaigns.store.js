import Alt from '../alt.jsx';
import CampaignsActions from 'actions/campaigns.actions.js';

class CampaignsStore {
  constructor(){
    this.bindActions(CampaignsActions);

    this.state = {
      campaigns: null
    }
  }

  onLoad(campaigns){
    this.setState({
      campaigns: campaigns
    })
  }

  onNewCampaign(){

  }

  onUpdateDescription(){

  }

  onUpdateName(){

  }

  onUpdateDM(){

  }

  onDeleteCampaign(){

  }
}

export default Alt.createStore(CampaignsStore);