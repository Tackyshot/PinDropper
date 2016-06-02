import _      from 'lodash';
import Theme  from 'theme';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    this.styles = {
      tableStats:{
        padding: '15px',
        border: '1px solid grey',
        borderRadius: '5px'
      },
      trStats:{},
      thStats:{
        fontWeight: 'normal',
        fontSize: '12px'
      },
      tdStats:{
        width: '48px',
        //height: '48px',
        textAlign: 'center',
        fontSize: '20px'
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