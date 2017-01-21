import Theme        from 'theme';

export default new class Style extends Theme {
  constructor(){
    super();

    this.style = this.create({
      someStyleObj: {
        //styles go here
      },
      //more style Objects go here
    });
  }

  styles(){
    return this.style;
  }
}