import Theme from 'theme';

export default new class Style extends Theme{
  constructor(){
    super();
    //this.innerHeight = this.screensize().y; //window.innerHeight;

    this.style = this.create({
      modalBackground: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.5)',
        zIndex: '10'
      },
      modal: {
        position: 'inherit',
        width: '40%',
        left: '30%',
        top: '30%',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '5px',
        zIndex:'11'
      },
      modalTitleArea: {
        paddingRight: '21px'
      },
      modalTitle:{
        margin: '0px',
      },
      modalCloseBtn: {
        position: 'absolute',
        right: '10px',
        top: '10px',
        width: '16px',
        height: '16px',
        cursor: 'pointer'
      }
    });
  }//constructor

  styles(){
    return this.style;
  }

}