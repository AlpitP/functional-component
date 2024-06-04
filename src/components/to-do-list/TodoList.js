import { useState } from "react";
let id = 1;
function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState()
    function addTask() {
        setTaskList([...taskList, { id: id++, task: task, done: false }])
        setTask('');
    }
    function deleteTask(index) {
        taskList.splice(index, 1);
        setTaskList([...taskList])
    }
    function doneTask(index) {
        taskList.splice(index, 1, { ...taskList[index], done: !taskList[index].done })
        setTaskList([...taskList])
    }
    return (
        <>
            <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={addTask}>Submit</button>

            <ul>
                {taskList && taskList.map((task, index) => {
                    return (
                        <li key={task.id} className={task.done ? 'done' : 'un-done'}>
                            <span onClick={() => doneTask(index)}>
                                {task.task}
                            </span>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default ToDoList;