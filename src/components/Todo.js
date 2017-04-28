import React, { PropTypes, Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { status: 0, item: 'Create app' },
                { status: 0, item: 'Buy vegetables' }
            ]
        }
    }

    _add(e) {
        e.preventDefault()
        let input = e.target.firstChild;
        if (!input.value) {
            return;
        }
        this.setState({
            todos : this.state.todos.concat({item: input.value, status: 0})
        });
        input.value = null;
    }

    _check(e) {
        this.state.todos[e].status =  this.state.todos[e].status == 0 ? 1 : 0;
        this.setState({
            todos: this.state.todos
        })
    }

    _delete(e) {
         var newTodos = this.state.todos.slice();
         newTodos.splice(e, 1);
         this.setState({
             todos: newTodos
         })
    }

    render() {
        return (
            <div id="contents">
                <form onSubmit={ this._add.bind(this) }>
                    <input type="text" className="newTodo" placeholder="What to done?" />
                </form>
                <ul id="todos">
                    { this.state.todos.map((todo, idx) => {
                        let liClass = todo.status === 1 ? 'todo todo-done' : 'todo';
                        return (
                            <li className={ liClass } key={ idx }>
                                <input type="checkbox" id={ 'todo' + idx } onClick={ this._check.bind(this, idx) } />
                                <label htmlFor={ 'todo' + idx } className="checkbox" />
                                <label className="item">{ todo.item }</label>
                                <button className="deleteBtn" onClick={ this._delete.bind(this, idx) }>×</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Todo;
