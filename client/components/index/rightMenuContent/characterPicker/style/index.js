import _      from 'lodash';
import Theme  from '_common/_theme';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    this.styles = {
      charpicker:{
        display: 'flex',
        justifyContent: 'center'
      },
      charbtnarea: {
        display: 'inline-block'
      },
      charbtn:{
        backgroundColor: '#F9BB0E',
        border: '1px solid #FF9942',
        borderRadius: '4px',
        color: 'white',
        padding: '7px',
        fontSize: '16px',
        margin: '0px 5px',
        cursor: 'pointer'
      },
      charpickercontrols:{
        display: 'inline-block'
      },
      newcharbtn:{
        width: '32px',
        height: '32px',
        borderRadius: '3px',
        cursor: 'pointer'
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