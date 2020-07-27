import React from 'react';
import TodoList from './todolist/todolist';
import TodoItem from './todoitem/todoitem';
import './App.css';

class App extends React.Component{
  render(){
    return (<div>
      <TodoList></TodoList>
      <TodoItem></TodoItem>
      </div>)

  }
}

export default App;
