import React, { useReducer, useRef } from 'react';


let id = 0;
const ToDoList = () => {
    // const [taskArray, setTaskArray] = useState([]);
    const [taskArray, dispatch] = useReducer(formReducer, []);
    const inputRef = useRef();

    // const addTask = (e) => {
    //     e.preventDefault();
    //     setTaskArray([...taskArray, { id: id++, task: inputRef.current.value, done: false }]);
    //     inputRef.current.value = "";
    // }
    function addTask(e) {
        e.preventDefault();
        dispatch({
            type: 'added_task',
            taskId: id++,
            task: inputRef.current.value
        })
        inputRef.current.value = "";
    }
    function deleteTask(e, index) {
        e.stopPropagation();
        dispatch({
            type: 'delete_task',
            index: index
        })
    }
    function doneTask(index) {
        dispatch({
            type: 'done_task',
            index: index
        })
    }
    // const deleteTask = (e, index) => {
    //     e.stopPropagation();
    //     const deletedTaskList = [...taskArray]
    //     // setTaskArray([...taskArray,taskArray[deleteButtonId]])
    //     deletedTaskList.splice(index, 1)
    //     setTaskArray(deletedTaskList)
    //     // const deletedTaskArray = taskArray.filter((element) => (deleteButtonId !== element.id) ? element : null);
    //     // setTaskArray(deletedTaskArray)
    // }

    // const doneTask = (index) => {
    //     // console.log(index);
    //     const doneTaskList = [...taskArray]
    //     doneTaskList.splice(index, 1, { ...taskArray[index], done: !taskArray[index].done });
    //     // console.log(taskArray)
    //     setTaskArray(doneTaskList);
    //     // let doneTaskArray = taskArray.map((element) => (doneTaskId === element.id ? { ...element, done: !element.done } : element));
    //     // setTaskArray(doneTaskArray);
    // }
    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={addTask}>
                <input type="text"
                    placeholder='Enter Task'
                    ref={inputRef}
                />
                <input type='submit' value="Submit" />
            </form>
            <div>
                <ul>
                    <h1>Tasks</h1>
                    {taskArray.map((item, index) => {
                        const textStyle = item.done;
                        return <li id={item.id} key={item.id}
                            style={{ textDecoration: textStyle ? "line-through" : "none" }}>
                            <span onClick={() => doneTask(index)}>
                                {item.task}
                            </span>
                            <button id={item.id} onClick={(e) => deleteTask(e, index)}>Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
function formReducer(taskArray, action) {
    if (action.type === 'added_task') {
        return [
            ...taskArray, { id: action.id, task: action.task, done: false }
        ]
    } else if (action.type === 'delete_task') {
        taskArray.splice(action.index, 1)
        return [...taskArray]
    } else if (action.type === 'done_task') {
        taskArray.splice(action.index, 1, { ...taskArray[action.index], done: !taskArray[action.index].done })
        return [...taskArray]
    }
}
export default ToDoList