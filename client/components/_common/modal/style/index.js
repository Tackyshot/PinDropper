import _ from 'lodash';

export default new class Style {
  constructor(){
    this.innerHeight = window.innerHeight;

    this.styles = {
      modalBackground: {
        position: 'absolute',
        width: '100%',
        height: `${this.innerHeight}px`,
        backgroundColor: 'rgba(0,0,0,.5)',
        zIndex: '10'
      },
      modal: {
        position: 'inherit',
        width: '40%',
        height: `${(this.innerHeight*.4)}px`,
        left: '30%',
        top: '30%',
        backgroundColor: 'white',
        borderRadius: '5px',
        zIndex:'11'
      },
      modalTitleArea: {
      },
      modalTitle:{},
      modalCloseBtn: {}
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