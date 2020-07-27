import React from 'react';

class AddTodo extends React.Component{


    render(){
        return(<div className='addTodoContainer'>
            
            <form>
                <input onChange={(e) => this.updateInput(e)} type='text'></input>
                <button type='submit'>Add Todo</button>
            </form>
           
           </div>);
    }

    updateInput = (e) =>{
        console.log(e);
    }

}

export default AddTodo;