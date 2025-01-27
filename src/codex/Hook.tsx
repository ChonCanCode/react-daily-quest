import { Link } from "react-router-dom";


const Hook = () => {
    return (
      <>
        <Link to="/">Home Page</Link> 
        <h1>What is Hook?</h1>
        <p>In React, a hook is a special function that allows you to "hook into" React's state and lifecycle features from functional components. Hooks were introduced in React 16.8 to make it easier to use these features without the need for class components.</p>
        
        <h2>Key Features of Hooks</h2>
        <ul>
            <li><strong>Work with Functional Components:</strong>Hooks enable functional components to have features like state management and lifecycle methods, which were previously exclusive to class components.</li>
            <li><strong>Reusable Logic:</strong>Hooks make it easy to share and reuse logic between components without modifying their structure (e.g., through custom hooks).</li>
            <li><strong>No Breaking Changes:</strong>Hooks work alongside existing React code and class components. They're fully backward-compatible.</li>
        </ul>

        <h2>Commonly Used Hooks</h2>
        <ul>
            <li><strong>useState</strong></li>
            <code>{`
            import React, { useState } from "react";

            function Counter() {
            const [count, setCount] = useState(0); // Declare a state variable

            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
            }`}</code>
            <li><strong>useEffect</strong></li>
            <code>{`import React, { useEffect } from "react";

                function Example() {
                useEffect(() => {
                    console.log("Component mounted!");
                    return () => console.log("Cleanup on unmount");
                }, []); // Dependency array ensures it runs only once

                return <div>Hello, useEffect!</div>;
                }
                `}</code>
            <li><strong>useContext</strong></li>
            <code>{`import React, { useContext } from "react";

            const ThemeContext = React.createContext("light");

            function DisplayTheme() {
            const theme = useContext(ThemeContext); // Access context value
            return <p>Current theme: {theme}</p>;
            }`}</code>
            <li><strong>useReducer</strong></li>
            <code>{`import React, { useReducer } from "react";

            const initialState = { count: 0 };

            function reducer(state, action) {
            switch (action.type) {
                case "increment":
                return { count: state.count + 1 };
                case "decrement":
                return { count: state.count - 1 };
                default:
                return state;
            }
            }

            function Counter() {
            const [state, dispatch] = useReducer(reducer, initialState);

            return (
                <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                </div>
            );
            }
            `}</code>
            <li><strong>useRef</strong></li>
            <code>{`import React, { useRef } from "react";

            function InputFocus() {
            const inputRef = useRef(null);

            const handleFocus = () => {
                inputRef.current.focus(); // Access the DOM element
            };

            return (
                <div>
                <input ref={inputRef} type="text" />
                <button onClick={handleFocus}>Focus Input</button>
                </div>
            );
            }
            `}</code>
        </ul>

        <h2>Rules of Hooks</h2>
        <p>To ensure hooks work properly, follow these rules:</p>
        <li>1. Only Call Hooks at the Top Level: Don’t use hooks inside loops, conditions, or nested functions. Always call them at the top level of a React function.</li>
        <li>2. Only Call Hooks in React Functions: Hooks must be called inside functional components or custom hooks, not in regular JavaScript functions.</li>
      </>
    );
  };
  
  export default Hook;
  