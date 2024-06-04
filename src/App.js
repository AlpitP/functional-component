import React from "react";
import "./App.css";
import Form from "./components/crud-demo/FormComponent";

// import ParentComponent from './components/useImperativeHandle/UseImperativeHandle';
// import ParentComponent from './components/callback/Demo';

// class ErrorBoundary extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       err: false,
//     };
//   }
//   static getDerivedStateFromError(error) {
//     return { err: true }
//   }
//   componentDidCatch(error) {
//     console.log("Error occur")
//     console.log(error)
//     this.setState({
//       err: true,
//     });
//   }
//   render() {
//     return (
//       <div>
//         {(this.state.err) ? <h1>Error</h1> : this.props.children}
//       </div>
//     );
//   }
// }
// function ParentComponent() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('John')

//   const hobby = useMemo(() => ['Reading', 'Traveling'], [])
//   const decrement = useCallback(() => {
//     setCount(count - 1)
//   }, [count]);
//   const increment = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//     decrement();
//   }, [decrement]);
//   function changeName() {
//     setName(name === 'John' ? 'Doe' : 'John')
//   }
//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <div>{count}</div>
//       <button onClick={decrement}>-</button>
//       <button onClick={changeName}>Change Name</button>
//       <ChildComponent name={name} hobby={hobby} />
//     </>
//   )
// }
// const ChildComponent = memo(function ChildComponent({ name, hobby }) {
//   console.log("ChildComponent Render")
//   return (
//     <>
//       <div>{name}</div>
//     </>

//   )
// }, arePropsEqual);
// function arePropsEqual(prevProps, newProps) {
//   console.log(prevProps, newProps)
//   return (prevProps.name === newProps.name)
// }

function App() {
  // const [toggle, toggleValue] = useToggle(true);
  // const [theme, setTheme] = useTheme('light');
  // const viewPort = useViewPort();
  // console.log(document.title)
  // useDocumentTitle('Hello World');
  // const renderCount = useRenderCount();
  // console.log(renderCount)
  // const doubleClick = useDoubleClick();
  // console.log(doubleClick)
  return (
    <div>
      {/* <Counter /> */}
      {/* <FetchData /> */}
      {/* <Form /> */}
      {/* <UseEffectComponent title="Hello World" /> */}
      {/* <UseRefComponent /> */}
      {/* <ControlComponent /> */}
      {/* <UnConditionalComponent /> */}
      {/* <ToDoList /> */}
      {/* <ClassToDoList /> */}
      {/* <Section level={1}>
        <Heading>Heading</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={4}>
              <Heading>Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> */}
      {/* <Section>
        <Heading level={1}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={3}>Heading</Heading>
        <Heading level={4}>Heading</Heading>
        <Heading level={5}>Heading</Heading>
        <Heading level={6}>Heading</Heading>
      </Section> */}
      {/* <ThemeToggle /> */}
      {/* <A /> */}
      {/* Create Counter using useContext */}
      {/* <User />
      <Counter /> */}
      {/* <ToggleReducer /> */}
      {/* <ParentComponent /> */}
      {/* <UseMemoComponent /> */}
      {/* <ParentComponent /> */}
      {/* <UseMemoComponent /> */}
      {/* <ParentRef /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponent /> */}
      {/* <Form /> */}
      {/* <button onClick={toggleValue}>Toggle</button> */}
      {/* {toggle ? <ParentComponent /> : null} */}
      {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button> */}
      {/* <Fetch /> */}
      {/* <ClickIncrease userName="John" /> */}
      <hr />
      {/* <HoverIncrease /><hr /> */}
      {/* <TextComponent /> */}
      {/* {doubleClick && <UpdatedTextComponent />} */}
      {/* <h1 style={{ textAlign: 'center' }}>User Detail</h1> */}
      {/* <FetchData /> */}
      {/* <ToDoList /> */}
      <Form />
    </div>
  );
}

// function useRenderCount() {
//   const renderRef = useRef(1);
//   useEffect(() => {
//     renderRef.current++;
//   })
//   return renderRef;
// }
// const UpdatedTextComponent = updateTextComponent(TextComponent);
// function ParentComponent() {
//   const modelRef = useRef();
//   function handleClick(value) {
//     modelRef.current.openModel(value);
//   }
//   return (
//     <>
//       <button onClick={() => handleClick(true)}>Open Model</button>
//       <Child ref={modelRef} />
//     </>
//   )
// }
// const Child = forwardRef(function Child(props, ref) {
//   const [isOpen, setIsOpen] = useState(false);
//   useImperativeHandle(ref, () => {
//     return {
//       openModel: (value) => setIsOpen(value)
//     }
//   })
//   if (!isOpen) return null;

//   return (
//     <div style={{ border: "1px solid black", width: 100, padding: 20, margin: 20 }}>
//       <h1>Model</h1>
//       <button onClick={() => setIsOpen(false)}>Close</button>
//     </div>
//   )
// })
// function ParentComponent() {
//   const [count, setCount] = useState(0)
//   const data = useCustomHook();
//   console.log(data);
//   console.log("a")
//   // useLayoutEffect(() => {
//   //   if (count === 0) {
//   //     setCount(Math.floor(Math.random() * 10 + 1))
//   //   }
//   // }, [count])
//   return (
//     <div>
//       <p>Parent Component</p>
//       <p>{count}</p>
//       <button onClick={() => setCount(0)}>Change number</button>
//     </div>
//   )
// }
// function useCustomHook() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');

//   return [name, setName, address, setAddress];
// }
// function ParentComponent() {
//   const myRef = useRef();

//   function handleClick() {
//     myRef.current.inputFocus();
//     console.log(myRef.current.username)
//   }
//   return (
//     <>
//       <p>Parent Component</p>
//       <Child ref={myRef} />
//       <button onClick={handleClick}>Click</button>
//     </>
//   )
// }
// const Child = forwardRef((props, ref) => {
//   const [name, setName] = useState('')
//   const inputRef = useRef();
//   useImperativeHandle(ref, () => {
//     return {
//       inputFocus: () => inputRef.current.focus(),
//       username: name
//     }
//   })
//   return (
//     <div>
//       <p>Child Component</p>
//       <form>
//         <input type="text" ref={inputRef} onChange={(e) => setName(e.target.value)} {...props} />
//       </form>
//     </div>
//   )
// })
// function ParentComponent() {
//   const [name, setName] = useForm('');
//   const [address, setAddress] = useForm('');
//   const [value, toggleValue] = useToggle(false);
//   const eventHandler = useCallback(() => {
//     console.log(' event call')
//   }, []);

//   useEventListener('click', eventHandler);

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(name + " " + address)
//   }

//   // useEffect(() => {
//   //   window.addEventListener('click', eventHandler)
//   // }, [])
//   return (
//     <>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input type="text" placeholder='Enter Name' onChange={(e) => setName(e)} /><br />
//         <input type="text" placeholder='Enter Address' onChange={(e) => setAddress(e)} /><br />
//         <button>Submit</button>
//       </form>
//       <button onClick={toggleValue}>Toggle</button>
//       <div style={{ border: '1px solid black', width: '20%' }} className={value ? 'show' : 'hide'}>
//         <p>Toggle Menu</p>
//       </div>
//     </>
//   )
// }

// function useForm(defaultValue) {
//   const [value, setValue] = useState(defaultValue)
//   function addValue(e) {
//     setValue(e.target.value)
//   }
//   return [value, addValue];
// }
// function useEventListener(event, eventHandler) {
//   useEffect(() => {
//     window.addEventListener(event, eventHandler)
//     return () => {
//       window.removeEventListener(event, eventHandler);
//     }
//   }, [event, eventHandler])
// }
// function useDoubleClick() {
//   const [value, setValue] = useState(false);
//   useEffect(() => {
//     function handlerFunction() {
//       setValue(!value);
//     }
//     window.addEventListener('dblclick', handlerFunction)
//     return () => {
//       window.removeEventListener('dblclick', handlerFunction);
//     }
//   })
//   return value;
// }

export default App;
