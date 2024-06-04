import { useEffect, useRef, useState } from "react";
import useCounter from "./customHook/useCounter";
import useFetch from "./customHook/useFetch";
import useToggle from "./customHook/useToggle";

const urlHead = ['posts', 'users', 'albums']
function Fetch() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/' + urlHead[0])
    // const data = useFetch(url);
    const isOnline = useStatus();
    const [toggle, setToggle] = useToggle(true);
    function keyPress(e) {
        console.log(e.key);
    }
    useKeyPress(keyPress);
    const width = useWindowSize();
    const renderCount = useRenderCount();
    console.log(renderCount)
    return (
        <>
            {/* <p>Hello World</p>
            <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/' + urlHead[Math.floor(Math.random() * 3)])}>Change Url</button>
            {data && data.map((post, index) => {
                return (index <= 10) ? <p key={post.id}>{post.title}</p> : null;
            })} */}
            {/* <h1>User is {isOnline}</h1> */}
            <button onClick={setToggle}>{!toggle ? 'Show Counter' : 'Hide Counter'}</button>
            {toggle ? <Counter /> : null}
        </>
    )
}


function Counter() {
    const [count, increment, decrement, reset] = useCounter(5, { min: 5, max: 10 });
    return (
        <div>
            <p>Counter</p>
            <p>{count}</p>
            <button onClick={increment} >increment</button>
            <button onClick={decrement} > decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}

function useStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function handlerOnline() {
            setIsOnline(true)
        }
        function handlerOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handlerOnline)
        window.addEventListener('offline', handlerOffline)
        return () => {
            window.removeEventListener('online', handlerOnline)
            window.removeEventListener('offline', handlerOffline)
        }
    }, []);

    return isOnline ? 'Online' : 'Offline';
}

function useKeyPress(eventHandler) {
    useEffect(() => {
        window.addEventListener('keypress', eventHandler)
        return () => {
            window.removeEventListener('keypress', eventHandler)
        }
    }, [eventHandler])
}

function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        function handlerWidthResize() {
            setWidth(window.innerWidth)
        }
        function handlerHeightResize() {
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handlerWidthResize);
        window.addEventListener('resize', handlerHeightResize);
        return () => {
            window.removeEventListener('resize', handlerWidthResize);
            window.removeEventListener('resize', handlerHeightResize);
        }
    })
    return { 'width': width, 'height': height };
}

function useRenderCount() {
    const renderRef = useRef(1);
    useEffect(() => {
        renderRef.current++;
    })
    return renderRef;
}

export default Fetch;