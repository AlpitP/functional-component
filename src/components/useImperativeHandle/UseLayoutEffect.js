import { useState } from "react";
import useOnlineStatus from "../customHook/useOnlineStatus";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('useEffect function triggered ' + new Date().getMilliseconds());
    // })
    // useLayoutEffect(() => {
    //     console.log('useLayoutEffect function triggered ' + new Date().getMilliseconds());
    // })

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>UseLayoutEffect</h1>
                <h3>{count}</h3>
                <button onClick={() => setCount(count => count + 1)}>Update Count</button><hr />
                <SaveButton />
                <StatusBar />
            </div>
        </>
    )
}

function SaveButton() {
    const isOnline = useOnlineStatus();
    function handleClick() {
        console.log('Save Progress..')
    }
    return (
        <button onClick={handleClick} disabled={!isOnline}>{isOnline ? 'Save Progress' : 'Reconnected'}</button>
    )
}
function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? "Online" : "Disconnected"}</h1>
}
export default ParentComponent;