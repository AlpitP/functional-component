import { useReducer } from "react"
import './context/user.css'

function ToggleReducer() {
    const [toggle, dispatch] = useReducer(toggleReducer, true);
    function clickEvent() {
        console.log(toggle)
        dispatch({
            type: 'toggle'
        })
    }
    return (
        <div>
            <button onClick={clickEvent}>Toggle</button>
            <div className={toggle ? 'show' : 'hide'}><h1>Hello World</h1></div>
        </div>
    )
}

function toggleReducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return !state;
        default:
            return state;
    }
}
export default ToggleReducer;