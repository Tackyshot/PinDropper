"use strict";
import React            from 'react';
import _                from 'lodash';
import Style            from 'style';
import TextField        from 'textfield';

export default class BaseStats extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      text: ''
    };

    //rebindings

  }

  componentWillMount(){

  }

  render(){
    let style = Style.styles;
    let textFieldStyle = {
      border: 'none',
      borderBottom: '1px solid grey',
    };

    return (
      <table style={style.tableStats} >
        <thead>
        <tr style={style.trStats} >
          <th style={style.thStats} ></th>
          <th style={style.thStats} >Ability</th>
          <th style={style.thStats} >Mod</th>
          <th style={style.thStats} >Temp Ability</th>
          <th style={style.thStats} >Temp Mod</th>
        </tr>
        </thead>
        <tbody>
        {/*LOOP THROUGH DATA, SHOULD ONLY NEED ONE TR/TD group*/}
        <tr style={style.trStats} >
          <td style={style.tdStats} >Str</td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
        </tr>
        {/*END LOOP*/}
        <tr style={style.trStats} >
          <td style={style.tdStats} >Dex</td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
        </tr>
        <tr style={style.trStats} >
          <td style={style.tdStats} >Con</td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
        </tr>
        <tr style={style.trStats} >
          <td style={style.tdStats} >Int</td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
        </tr>
        <tr style={style.trStats}>
          <td style={style.tdStats} >Wis</td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
        </tr>
        <tr style={style.trStats}>
          <td style={style.tdStats} >Cha</td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} s/></td>
          <td style={style.tdStats} ><TextField size='small' style={textFieldStyle} text={this.state.text} onChange={this.onChange} disabled={true} /></td>
        </tr>
        </tbody>
      </table>
    )
  }//render

  onChange(e){
    this.setState({
      text: e.target.value
    });
  }

}