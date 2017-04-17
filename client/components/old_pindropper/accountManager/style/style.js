import Theme        from 'theme';

export default new class Style extends Theme {
  constructor(){
    super();

    this.style = this.create({
      accountManager: {
      },
      accountManagerBtn:{
        position: 'fixed',
        left: '10px',
        bottom: '10px',
        borderRadius: '50%',
        border: '2px solid #607D8B',
        backgroundColor: '#DDDDDD',
        zIndex: "11",
        padding: '5px',
        ":hover":{
          cursor: 'pointer',
          backgroundColor: '#A9A9A9'
        },
        ":focus":{
          outline: 0
        },
        ":active":{
          backgroundColor: '#8F8F8F'
        }
      },
      campaignTile: {
        position: 'relative',
        width: '300px',
        height: '300px',
        border: '2px solid black',
        borderRadius: '5px'
      },
      tileHeader:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
      headerTitle:{
        color: 'white',
        textTransform: 'capitalize',
        padding: '0px 5px'
      },
      tileFooter:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',

      },
      playButton: {
        position:'relative',
        border: `2px solid ${/*this.colors().btn.primary*/ 'white'}`,
        borderRadius: '5px',
        padding:'0px',
        backgroundColor: 'transparent', //this.colors().btn.primary,
        transition: 'max-width .5s ease',
        overflow: 'hidden',
        minWidth: '40px',
        margin: '5px',
        ':hover': {
          cursor: 'pointer',
          backgroundColor: 'rgba(255,255,255,0.2)',
        },
        ':focus': {
          outline: 0
        },
        ':active': {
          backgroundColor: 'rgba(255,255,255,0.5)',
        }
      },
      svgWrap:{
        //position: 'absolute',
        display:'inline-block',
        width:'36px',
        height: '36px',
        minWidth:'36px',
        minHeight: '36px'

      },
      mwFull:{
        maxWidth:'100%'
      },
      mwNone:{
        maxWidth:'40px'
      },
      playBtnTitle:{
        display:'inline-block',
        color: 'white',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: '0px 10px 0px 0px',
        fontWeight: 'bold'
      },
      noDisplay: {
        display: 'none'
      },
      fullDisplay: {
        display: 'inline-block'
      }
    });
  }

  styles(){
    return this.style;
  }
}