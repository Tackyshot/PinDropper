import _      from 'lodash';
import Theme  from '../../_theme/';

export default new class Style {
  constructor(){
    let theme = Theme.theme;

    this.innerHeight = window.innerHeight;
    window.addEventListener('resize', (e)=>{
      this.innerHeight = window.innerHeight;
    });

    this.styles = {
      corkboard: {
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: `${this.innerHeight}px`,
        maxHeight: `${this.innerHeight}px`,
      },
      canvas: {
        position: 'absolute',
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: `${this.innerHeight}px`,
        maxHeight: `${this.innerHeight}px`
      },
      canvasTools: {
        display: 'none',
        visibility: 'hidden'
      },
      corkboardMenus: { //div that contains all custom menus

      },
      corkboardMenu: {
        zIndex: '10'
        /*width: '100%',
        maxHeight: '100%',*/
      },
      cbHideMenuBtn: {
        width: '32px'
      },
      cbMenuBar: {
        position: 'absolute',
        right: '0px',
        maxWidth: '64px',
        height: `${this.innerHeight}px`,
        maxHeight: `${this.innerHeight}px`,
        listStyleType: 'none',
        padding: '0px',
        margin: '0px'
      },
      cbMenuContent: {
        position: 'absolute',
        right:'64px',
        height: `${this.innerHeight-30}px`,
        maxHeight: `${this.innerHeight-30}px`,
        padding: '15px',
        border: '2px solid #CECECE1',
        borderRadius: '3px',
        backgroundColor: 'white'
      },
      cbMenuItem:{
        width: '64px',
        height: '64px',
        cursor: 'pointer',
        borderRadius: '3px'
      },
      cbMenuIcon: {
        width: '48px',
        height: '48px',
        margin: '8px'
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