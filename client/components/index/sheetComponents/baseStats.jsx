"use strict";
import React            from 'react';
import _                from 'lodash';

import TextField        from '../../_common/textField/';

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
    return (
        <table style={style.tableStats} >
          <tr style={style.trStats} >
            <th style={style.tdStats} >Stat</th>
            <th style={style.tdStats} >Score</th>
            <th style={style.tdStats} >Mod</th>
            <th style={style.tdStats} >Temp Score</th>
            <th style={style.tdStats} >Temp Mod</th>
          </tr>
          <tr style={style.trStats} >
            <td style={style.tdStats} >Str</td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          </tr>
          <tr style={style.trStats} >
            <td style={style.tdStats} >Dex</td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          </tr>
          <tr style={style.trStats} >
            <td style={style.tdStats} >Con</td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          </tr>
          <tr style={style.trStats} >
            <td style={style.tdStats} >Int</td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          </tr>
          <tr style={style.trStats} >
            <td style={style.tdStats} >Wis</td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          </tr>
          <tr style={style.trStats} >
            <td style={style.tdStats} >Cha</td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} s/></td>
            <td style={style.tdStats} ><TextField size='small' text={this.state.text} onChange={this.onChange} disabled={true} /></td>
          </tr>
        </table>
    )
  }//render

  onChange(e){
    this.setState({
      text: e.target.value
    });
  }

}