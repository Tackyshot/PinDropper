import _ from 'lodash';

export default new class Style {
  constructor(){
    this.styles = {
      wrapper:{
        width: '100%',
        border: '1px solid #CECECE',
        borderRadius: '5px',
        boxShadow: '0px 0px 6px #AFAFAF'
      },
      content:{
        width: '100%',
        overflow: "hidden",
        transition: "max-height .3s ease"
      },
      header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      },
      headerTitle:{
        padding: '3%',
        paddingRight: 0,
        display: 'flex',
        alignItems: 'center'
      },
      headerButton: {
        padding: '2% 0',
        display: 'inline-block'
      },
      headerIcon:{
        transition: 'transform .3s ease'
      }
    }
  }

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