import Theme from 'theme';

export default new class Style extends Theme {
  constructor(){
    super();

    this.style = this.create({
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

      'justify_flex-start': {
        justifyContent: 'flex-start'
      },
      'justify_flex-end':{
        justifyContent: 'flex-start'
      },
      'justify_center':{
        justifyContent: 'center'
      },
      'justify_space-between':{
        justifyContent: 'space-between'
      },
      'justify_space-around':{
        justifyContent: 'space-around'
      },


      'alignI_flex-start':{
        alignItems: 'flex-start',
      },
      'alignI_flex-end':{
        alignItems: 'flex-end',
      },
      'alignI_center':{
        alignItems: 'center',
      },
      'alignI_space-around':{
        alignItems: 'space-around',
      },
      'alignI_space-between':{
        alignItems: 'space-between',
      },


      'alignC_flex-start':{
        alignContent: 'flex-start',
      },
      'alignC_flex-end':{
        alignContent: 'flex-end',
      },
      'alignC_center':{
        alignContent: 'center',
      },
      'alignC_space-around':{
        alignContent: 'space-around',
      },
      'alignC_space-between':{
        alignContent: 'space-between',
      },


      'alignS_auto':{
        alignSelf: 'auto',
      },
      'alignS_flex-start':{
        alignSelf: 'flex-start',
      },
      'alignS_flex-end':{
        alignSelf: 'flex-end',
      },
      'alignS_center':{
        alignSelf: 'center',
      },
      'alignS_baseline':{
        alignSelf: 'baseline',
      },
      'alignS_baseline':{
        alignSelf: 'stretch'
      },
    });
  }

  styles(){
    return this.style;
  }
}
