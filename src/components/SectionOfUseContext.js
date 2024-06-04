import React, { useContext } from 'react';
import { LevelContext } from './LevelContext';

function Section({ children }) {
    const level = useContext(LevelContext);
    return (
        <section style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}
// function Section({children}) {
//     return (
//         <section>
//             {children}
//         </section>
//     )
// }
export default Section;