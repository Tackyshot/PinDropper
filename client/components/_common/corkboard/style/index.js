import _      from 'lodash';
import Theme  from '../../_theme/';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    this.styles = {
      corkboard: {
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
      },
      canvas: {
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: '100%',
        maxHeight: '100%'
      },
      canvasTools: {
        display: 'none',
        visibility: 'hidden'
      },
      corkboardMenus: { //div that contains all custom menus

      },
      corkboardMenu: {
        width: '100%',
        maxHeight: '100%',
      },
      cbHideMenuBtn: {
        width: '5%'
      },
      cbMenuBar: {
        width: '5%',
        maxHeight: '100%'
      },
      cbMenuContent: {
        width: '95%',
        maxHeight: '100%'
      },
      /*expandableStyle: {
        backgroundColor: theme.contrastColor,//'#5E412F',
        borderColor: "#F07818"
      },
      expandableIconColor: theme.accentColor,
      cbStyle :{
        width: 'initial',
        float: 'left',
        display: 'inline-block'
      },
      cbLabelStyle: { //'checkboxLabelStyle'
        fontFamily: "'Open Sans Condensed', sans-serif",
        fontSize: '2em',
        display: 'inline-block',
        float: 'left',
        margin: '0',
        color: theme.secondaryColor, //"white"
        lineHeight: '75%'
      },
      cbIconStyle: {
        fill: theme.accentColor, //"white"
        float: 'left'
      },
      contentArea: {
        padding: '0px 3%'
      },*/

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