import { useCallback, useState, memo } from "react";

function ParentComponent() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');
    const [tasks, setTasks] = useState([]);

    const buttonClick = useCallback(() => {
        setCount(count + 1);
    }, [count])
    // function increment(){
    //     setCount(count+1);
    // }
    const addTaskHandler = useCallback(() => {
        setTasks((tasks) => [...tasks, "New Task"])
    }, [])
    // function addTaskHandler() {
    //     setTasks([...tasks, "New Task"])
    // }
    return (
        <>
            <h1>Well come</h1>
            <p>Theme is : {theme}</p>
            <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>Change Theme</button> <hr />
            <h1>Count : {count}</h1>
            <ChildComponent onButtonClick={buttonClick} count={count} /> <hr />
            {/* <ChildComponent  count={count} /> */}
            {/* <button onClick={onButtonClick}>Increment</button> */}
            <Task addTaskButtonClick={addTaskHandler} tasks={tasks} />
        </>
    )
}
const ChildComponent = memo(({ onButtonClick, count }) => {
    console.log("Counter Render")
    return (
        <>
            <button onClick={onButtonClick}>Increment</button>
            {/* <h1>{count}</h1> */}
        </>
    )
})
const Task = memo(function Task({ addTaskButtonClick, tasks }) {
    console.log("Task Component Render")
    return (
        <>
            <button onClick={addTaskButtonClick}>Add Task</button>
            <div>
                {
                    tasks.map((task, index) => {
                        return <li key={index}>{task}</li>
                    })
                }
            </div>
        </>
    )
})
// function ChildComponent({ onButtonClick }) {
//     console.log(" Child Render")
//     return <button onClick={onButtonClick}>Increment</button>
// }
export default ParentComponent;
