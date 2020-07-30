import React from 'react';
import TodoList from './todolist/todolist';
import TodoItem from './todoitem/todoitem';
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
        <TodoList todos={this.state.todos}></TodoList>
      
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
  
       await this.setState({todos:[...this.state.todos,todo]});
      localStorage.setItem('todos',JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));

      }
}



export default App;
