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
        border: '2px solid #7A90FF',
        backgroundColor: '#DDDDDD',
        zIndex: "11",
        padding: '5px',
        ":hover":{
          cursor: 'pointer',
          backgroundColor: '#A9A9A9'
        },
        ":focus":{
          outline: 0
        }
      }
    });
  }

  styles(){
    return this.style;
  }
}