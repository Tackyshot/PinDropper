import _      from 'lodash';
import Theme  from 'theme';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    this.styles = {
      heath:{
        width: '150px',
        height: '100px'
      },
      healthBar: {
        width: '98px',
        height: '98px',
        border: '1px solid grey',
        borderRadius: '50%',
        display: 'inline-block'
      },
      hpProgress: {
        width: '98px'
      },
      hpInputs: {
        width: '48px',
        height: '100px'
      },
      hpCurrent: {
        width: '48px',
        height: '50px',
        display: 'inline-block'
      },
      hpMax: {
        width: '48px',
        height: '50px',
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