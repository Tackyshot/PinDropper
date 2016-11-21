import Alt from '../alt.jsx';
import Request from 'tools/request.js';

class CampaignsActions {
  load(){
    return (dispatch)=>{
      Request.get('/api/campaign', (err, data)=>{
        if(!err) dispatch(data);
        else console.error("Campaigns.load error:", err);
      });
    }
  }

  newCampaign(){

  }

  updateDescription(id, description){

  }

  updateName(id, name){

  }

  updateDM(id, accountID){

  }

  deleteCampaign(id){

  }
}

export default Alt.createActions(CampaignsActions);