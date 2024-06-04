import React from 'react'

let id = 0;
export default class ClassToDoList extends React.Component {
    constructor() {
        super();
        this.state = { task: [] };
        this.myRef = React.createRef();
    }

    addTask = (e) => {
        e.preventDefault();
        this.setState({ task: [...this.state.task, { id: id++, task: this.myRef.current.value, done: false }] });
        this.myRef.current.value = "";
    }
    deleteTask = (e, deleteButtonId) => {
        e.stopPropagation();
        const deletedTaskArray = this.state.task.filter((element) => deleteButtonId !== element.id);
        this.setState({ task: deletedTaskArray });
    }
    doneTask = (doneTaskId) => {
        const doneTaskArray = this.state.task.map((element) => doneTaskId === element.id ? { ...element, done: !element.done } : element);
        this.setState({ task: doneTaskArray });
    }
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.addTask}>
                    <input type="text"
                        placeholder='Enter task'
                        ref={this.myRef} />
                    <input type="submit"
                        value="Submit" />
                </form>
                <div>
                    <ul>
                        {this.state.task.map((element) => {
                            return <li key={element.id}
                                // className={element.done ? "abc" : "xyz"}
                                onClick={() => this.doneTask(element.id)}
                                style={{ textDecoration: element.done ? "line-through" : "none" }}
                            >{element.task}
                                {/* <input type="button"
                                    value="delete"
                                    onClick={(e) => this.deleteTask(e, element.id)} /> */}
                                <button onClick={(e) => this.deleteTask(e, element.id)}>Delete</button>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}