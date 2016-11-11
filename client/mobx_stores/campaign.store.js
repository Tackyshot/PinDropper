import {observable, computed, computer} from 'mobx';
//import ErrorStore from './errors.store.js';
import request from 'tools/request.js';

export default new class CampaignStore{
  @observable state = [];

  baseUrl = '/api/campaign/';

  //TODO: add object schema validation
  campaginModel = {
    name: "string",
    description: "string",
    dm: "account._id string"
  };

  //TODO: figure out way to abstract api actions to parent class
  //do parents have access to child data? is that anti-pattern?
  @action load(){
    request.get(baseUrl, (err, campaigns)=>{
      if(!err) this.state = campaigns;
      else console.error("Error while loading campaigns"); //ErrorStore.Err(err, "Error while loading campaigns")
    });
  }

  @action updateById(id){
    let url = `${baseUrl}/${id}`;
    let data = this.constructor.findById(id, this.state)[0];
    request.put(url, data, (err, campaign)=>{
      if(err) console.error("Error while updating campaign"); //ErrorStore.Err(err, "Error while updating campaign.")
    });
  }

  @action create(newCampaign){
    request.post(url, newCampaign, (err, campaign)=>{
      if(!err) this.state.push(campaign);
      else console.error("Error while creating campaigns"); //ErrorStore.Err(err, "Error while creating campaign.");
    });
  }

  static findById(id, state){
    return state.map((item)=>{
      if(item._id === id) return item;
    });
  }

}