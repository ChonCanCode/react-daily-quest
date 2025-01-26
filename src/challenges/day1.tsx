import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Day1 = () => {
  const [showExample, setShowExample] = useState(false);

  const toggleExample = () => {
    setShowExample(!showExample);
  };

  return (
    <div>
      <Link to="/">Home Page</Link> 
      <h1>Day 1: What is React and what makes it different?</h1>
      <p>
        React is a popular JavaScript library for building user interfaces, primarily developed and maintained by <strong>Facebook</strong>. It focuses on creating reusable UI components, which makes development more efficient and organized.
      </p>
      <p>What sets React apart:</p>
      <ul>
        <li style={{ margin: "30px" }}>
          <strong>Component-Based Architecture</strong>: React encourages the creation of encapsulated <Link to="/Component">components</Link> that manage their own <Link to="/State">state</Link>, allowing you to build complex user interfaces by combining simple components.
          <button onClick={toggleExample} className="toggle-button">
            {showExample ? "Hide Example" : "Show Example"}
          </button>
          {showExample && (
            <div>
              <div className="code">
                <p style={{ color: "whitesmoke" }}>
                  🔴<strong>Counter Component</strong>: This component manages its own state using the useState hook. It displays a count value and a button to increment the count.
                </p>
                <pre>
                  {`
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
                  `}
                </pre>
              </div>
              <div style={{ margin: "30px" }} className="code">
                <p style={{ color: "whitesmoke" }}>
                  🔴<strong>App Component</strong>: This component combines multiple Counter components to create a more complex user interface. Each Counter component operates independently, demonstrating the encapsulation of state.
                </p>
                <pre>
                  {`
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Component-Based Architecture Example</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
                  `}
                </pre>
              </div>
            </div>
          )}
        </li>
        <li style={{ margin: "30px" }}>
          <strong>Virtual DOM</strong>: React uses a virtual DOM to improve performance. Instead of directly manipulating the browser's DOM, React updates a virtual representation of it. When changes occur, it efficiently updates only the parts of the DOM that need to be changed.
        </li>
        <li style={{ margin: "30px" }}>
          <strong>JSX Syntax</strong>: React uses JSX, a syntax extension that allows you to write HTML-like code within JavaScript. This makes it easier to visualize the structure of the UI and integrates well with the component-based architecture.
        </li>
        <li style={{ margin: "30px" }}>
          <strong>Unidirectional Data Flow</strong>: Data flows in one direction (from parent to child components) in React, making it easier to debug and understand how data changes affect the UI.
        </li>
      </ul>
      <p>
        React is popular for its flexibility, efficiency, and ease of use. It's used by many companies and developers to create dynamic and responsive web applications. If you're interested, I can share more about how it's used in real-world applications or help you get started with some basic examples.
      </p>
    </div>
  );
};

export default Day1;
