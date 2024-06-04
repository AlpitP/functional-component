import React, { useReducer } from 'react';

function Counter() {
    const [count, dispatch] = useReducer(countReducer, 0)
    console.log(count)
    function clickHandler() {
        dispatch({
            type: 'increment1'
        })
    }
    return (
        <>

            <div onClick={clickHandler}>
                +
            </div>
            <p>{count}</p>
        </>
    )
}
function countReducer(state, action) {
    console.log(state)
    switch (action.type) {
        case 'increment':
            return state + 1;
        default:
            return state
    }
}
export default Counter;