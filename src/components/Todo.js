import React, { Component } from 'react';
import Style from '../styles/todo.css';
import TodoItems from './TodoItems'


export default class todo extends Component {
  constructor(props) {
   super(props);
   this.state = {todos: []};
   this.addTodo = this.addTodo.bind(this);
   this.removeTodo = this.removeTodo.bind(this);
 }

 addTodo(e) {
   let todosArray = this.state.todos;

  todosArray.push(
    {
      text: this._inputElement.value,
      key: Date.now()
    }
  );

  this.setState({
    todos: todosArray
  });

  this._inputElement.value = "";

  e.preventDefault();
 }

 removeTodo(item){
   let todosArray = this.state.todos.filter(
     (todo)=> (item.key !== todo.key)
   );

   this.setState({
     todos: todosArray
   });
 }
  render() {
    return (
      <div className="todoAppContainer">
        <div className="todoAppHeader">
          <h1>TO DO:</h1>
        </div>
        <div className="todoList">
          <form onSubmit={this.addTodo}>
              <input ref={(a) => this._inputElement = a}
                placeholder="new task">
              </input>
              <button type="submit" value="Submit">add</button>
            </form>
        </div>
        <TodoItems entries={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}
