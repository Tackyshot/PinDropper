import _      from 'lodash';
import Theme  from '../../_theme/';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    let height = '32px';
    let border = '1px solid grey';
    let fontSize = '20px';

    this.styles = {
      inputSm: {
        width: '32px',
        height: height,
        maxHeight: height,
        border: border,
        fontSize: fontSize,
        textAlign: 'center',
        padding: 0
      },
      inputMed:{
        witdth: '64px',
        height: height,
        border: border,
        fontSize: fontSize,
      },
      inputLg: {
        width: '128px',
        height: height,
        border: border,
        fontSize: fontSize,
      },
      inputXl:{
        width: '256px',
        height: height,
        border: border,
        fontSize: fontSize,
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