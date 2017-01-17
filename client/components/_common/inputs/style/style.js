import Theme        from 'theme';

export default new class Style extends Theme {
  constructor(){
    super();

    this.style = this.create({
      playButton: {
        position:'relative',
        border: `2px solid ${/*this.colors().btn.primary*/ 'white'}`,
        borderRadius: '5px',
        padding:'0px',
        backgroundColor: 'transparent', //this.colors().btn.primary,
        transition: 'max-width .5s ease',
        overflow: 'hidden',
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
        display:'inline-block',
      },
      mwFull:{
        maxWidth:'100%'
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