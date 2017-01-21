import Theme        from 'theme';

export default new class Style extends Theme {
  constructor(){
    super();

    this.style = this.create({

    });
  }

  styles(){
    return this.style;
  }
}