import _      from 'lodash';
import Theme  from '../_theme/';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    this.styles = {
      baseComponent:{
        padding: "0px",
        margin: "0px",
        display: "block",
        width: "100%",
        height: "100%",
        maxHeight: "100%"
      }
    }//styles
  }//constructor

  setStyle(key, valueObj){
    try{
      return _.merge(_.clone(this.styles[key], true), valueObj);
    }
    catch(err){
      console.error("Expandable Styles Error:", err);
      return false;
    }
    //this.style[key][prop] = value;
  }
}