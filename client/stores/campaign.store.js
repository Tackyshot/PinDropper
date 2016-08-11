import Alt              from '../alt.jsx';
import CampaignActions  from 'actions/campaign.actions.js';
import _                from 'lodash';

class CampaignStore {
  constructor(){
    this.bindListeners({
      set: CampaignActions.get,
      put: CampaignActions.put,
      post: CampaignActions.post,
    });

    this.state = {
      campaigns: []
    };
  }//constructor

  set(campaigns){
    if(campaigns !== null){
      this.setState({
        campaigns: campaigns
      });
    }
  }//set

  put(campaign){
    if(campaign !== null) {
      let campaigns = _.clone(this.state.campaigns, true);

      campaigns.forEach((camp, index)=>{
        if(camp.id == campaign.id){
          campaigns[index] = campaign;
        }
      });

      this.setState({
        campaigns: campaigns
      });
    }
  }//put

  post(campaign){
    if(campaign !== null){
      let campaigns = _.clone(this.state.campaigns, true);

      campaigns.push(campaign);

      this.setState({
        campaigns: campaigns
      });
    }
  }

}

export default Alt.createStore(CampaignStore);