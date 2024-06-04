import React, { useContext } from "react";
import C from "./C";
import { CounterContext } from "./CounterContext";

function B() {
    const { count } = useContext(CounterContext)
    return (
        <>
            <div>{count}</div>
            <C />
        </>
    )
}
// class B extends React.Component {
//     static contextType = CounterContext;
//     render() {
//         const counterDetail = this.context;
//         return (
//             <>
//                 <div>{counterDetail.count}</div>
//                 <C />
//             </>
//         )
//     }
// }
export default B;