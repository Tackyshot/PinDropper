"use strict";
import React            from 'react';
import _                from 'lodash';
import {
        Corkboard,
        CorkboardMenu,
        CorkboardMenuItem,
       }                from 'corkboard'
import {
        Armor,
        Inventory,
        Notes,
        Skills,
        Spells,
        Stats,
        Weapons
      }                 from './rightMenuContent/'
/*
import ContentWrapper   from '../_common/contentWrapper/';
import TodoItem         from './todoItem.jsx';
import TodoActions      from '../../actions/todo-actions.jsx';
import TodoStore        from '../../stores/todo-store.jsx';

import FlatButton       from 'material-ui/lib/flat-button.js';
import AddIcon          from 'material-ui/lib/svg-icons/content/add.js';
*/

export default class Index extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {};

    //rebindings

  }

  componentWillMount(){

  }

  render(){
    return (
      <Corkboard>
        <CorkboardMenu>
          <CorkboardMenuItem menuIcon='viking-helmet-48.png' >
            <Stats />
          </CorkboardMenuItem>

          <CorkboardMenuItem menuIcon='sword-48.png' >
            <Weapons />
          </CorkboardMenuItem>

          <CorkboardMenuItem menuIcon='armored-breastplate-48.png' >
            <Armor />
          </CorkboardMenuItem>

          <CorkboardMenuItem menuIcon='rucksack-48.png' >
            <Inventory />
          </CorkboardMenuItem>

          <CorkboardMenuItem menuIcon='tasks-48.png' >
            <Skills />
          </CorkboardMenuItem>

          <CorkboardMenuItem menuIcon='wizard-48.png' >
            <Spells />
          </CorkboardMenuItem>

          <CorkboardMenuItem menuIcon='note-48.png' >
            <Notes />
          </CorkboardMenuItem>
        </CorkboardMenu>
      </Corkboard>
    )
  }//render

}