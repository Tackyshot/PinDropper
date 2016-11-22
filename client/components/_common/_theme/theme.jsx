import {StyleSheet, css} from 'aphrodite/no-important';

export default class Theme{
  constructor(){
    let gridType = this.constructor.gridType();
    let gridPos = this.constructor.gridPos();
    let gridItems = this.constructor.gridItems();
    let elements = this.constructor.elements(this.colors());

    this.themeStyles = StyleSheet.create({
      ...gridType,
      ...gridPos,
      ...gridItems,
      ...elements
    });
  };

  theme(){
    return this.themeStyles;
  };

  screenSize(){
    return this.constructor.queries();
  };

  colors(){
    return this.constructor.color();
  };

  create(styles){
    return StyleSheet.create(styles);
  };

  css(){
    return css(...arguments);
  }

  static gridType(){
    return {
      'row':{
        display: 'flex',
        flexDirection: 'row'
      },
      'rowReverse':{
        display: 'flex',
        flexDirection: 'row-reverse'
      },
      'column': {
        display: 'flex',
        flexDirection: 'column'
      },
      'columnReverse':{
        display: 'flex',
        flexDirection: 'column-reverse'
      },
    }
  };

  static gridPos(){

    return {
      //Horizontal ROW Justification
      'gridLeft':{
        justifyContent: 'flex-start'
      },
      'gridCenter':{
        justifyContent: 'center'
      },
      'gridRight':{
        justifyContent: 'flex-end'
      },
      'gridSpaceBetween':{
        justifyContent: 'space-between'
      },
      'gridSpaceAround':{
        justifyContent: 'space-around'
      },

      //Vertical align items
      'gridAlignTop':{
        alignItems: 'flex-start',
      },
      'gridAlignBottom':{
        alignItems: 'flex-end'
      },
      'gridAlignCenter':{
        alignItems: 'center'
      },
      'gridAlignStretch':{
        alignItems: 'stretch'
      },
      'gridAlignBaseline': {
        alignItems: 'baseline'
      },

      //Horizontal Grid CONTENT Align
      'gridContentTop':{
        alignContent: 'flex-start',
      },
      'gridContentBottom':{
        alignContent: 'flex-end',
      },
      'gridContentCenter':{
        alignContent: 'center'
      },
      'gridContentStretch':{
        alignContent: 'stretch'
      },
      'gridContentSpaceBetween':{
        alignContent: 'space-between'
      },
      'gridContentSpaceAround': {
        alignContent: 'space-between'
      }
    }
  };

  static gridItems (){
    return {
      'gridItemAlignTop': {
        alignSelf: 'flex-start'
      },
      'gridItemAlignBottom': {
        alignSelf: 'flex-end'
      },
      'gridItemCenter':{
        alignSelf: 'center'
      },
      'gridItemStretch':{
        alignSelf: 'stretch'
      },
      'gridItemBaseline':{
        alignSelf: 'baseline'
      }
    }
  };

  static elements(colors){

    return {
      'buttonPrimary':{
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        backgroundColor: colors.btn.primary,
        ":hover":{
          cursor: 'pointer',
          boxShadow: 'inset 0px 0px 50px 0px rgba(0,0,0,0.1)'
        },
        ":focus":{
          outline: 0
        },
        ":active":{
          boxShadow: 'inset 0px 2px 5px 1px #308AAE'
        }
      }

    }
  }

  static queries (){
    return {
      xs: '@media (min-width: 480px)',
      sm: '@media (min-width: 640px)',
      md: '@media (min-width: 1024px)',
      lg: '@media (min-width: 1440px)',
      xl: '@media (min-width: 1920px)'
    }
  };

  static color () {

    return {
      base: {
        primary:   '#1D2731',
        secondary: '#0B3C5D',
        contrast:  '#FCEBB6',
        accent:    "#F07818" /*'#328CC1'*/,
        highlight: '#D98310',
        error: '',
        success: '',
        warning: ''
      },
      btn: {
        primary:   '#66AFEE',
        secondary: '#0B3C5D',
        contrast:  '#FCEBB6',
        accent:    "#F07818" /*'#328CC1'*/,
        highlight: '#D98310',
        error: '',
        success: '',
        warning: ''
      }
    }
  }; //static color();
}