import React, { Component } from 'react';
import Style from '../styles/todoItems.css';

export default class todoItems extends Component {
  constructor(props) {
    super(props);
  }
  render(){
      let todoEntries = this.props.entries;
      const createTasks = (item) => ([
        <li key={item.key}>{item.text}<button onClick={()=>this.props.removeTodo(item)}  type="submit" value="Submit">x</button></li>,
      ])
      let listItems = todoEntries.map(createTasks);
      return(
        <ul className="theList">
        {listItems}
      </ul>
      )
    }
}
