import React, { Component } from 'react';

import  "./ToDo.css";

class ToDo extends Component {
    state = { 
        todoText: "",
        todos: []
         
     };

        
    render() { 
        return ( 
            <div>
                <div>
                    <input 
                        value={this.state.todoText}
                        onChange={this.handleTextChange}
                        type="text"
                        />
                        <button onClick={this.handleButtonClick} className="btn btn-info">
                            Add Todo
                        </button>
                     </div>
                       <ul>
                           {this.state.todos.map((todo) =>(
                           <li key={todo}>{todo}-{" "} <button className="btn btn-sm btn-danger"
                           onClick={() => this.handleDeleteTodo(todo)}
                           >Remove</button>
                           </li>
                           ))}

                           </ul>
                        </div>
         );
    }

    handleTextChange = (event) =>{
        this.setState({ todoText: event.target.value});

    };

    handleButtonClick = () => {
        console.log(this.state.todoText);

        var todos = this.state.todos;
        todos.push(this.state.todoText);

        this.setState({ todos: todos, todoText: ""});
    };

    handleDeleteTodo = (todoText) => {
        todoText.remove()

    }; 
}
 
export default ToDo;