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
        width: '150px'
      }
    });
  }

  styles(){
    return this.style;
  }
}