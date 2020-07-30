import React from 'react';
import TodoList from './todolist/todolist';

import AddTodo from './addTodo/addTodo';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos:[]
    };
  }

  render(){
    return (
      <div>
      
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList updateTodoFn = {this.updateTodo} todos={this.state.todos}></TodoList>
      
      </div>);

  } 

componentDidMount = () =>{
  const todos = localStorage.getItem('todos');
  if(todos){
    const saverTodos = JSON.parse(todos);
    this.setState({todos: saverTodos})
  }else{
    console.log('No todos');
  }
}

addTodo = async(todo) => { 
  
       await this.setState({todos:[...this.state.todos,todo, {
          text: todo,
          completed: false

       }]});
      localStorage.setItem('todos',JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));

      }

    updateTodo = (todo) => {
     const newTodos =  this.state.todos.map(_todo => {
         if(todo === _todo)
          return {
            text: todo.text,
            completed: !todo.completed
          }
          else
            return _todo
      });
      console.log(newTodos);
      this.setState({todos:newTodos});
    }

}



export default App;
