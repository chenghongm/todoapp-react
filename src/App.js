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
    return (<div>
      {
        <AddTodo></AddTodo>
      }
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

}



export default App;
