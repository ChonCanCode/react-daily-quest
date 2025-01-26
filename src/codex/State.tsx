import { Link } from "react-router-dom";

const State = () => {
    return (
      <>
      <Link to="/">Home Page</Link> 
       <h1>What is State?</h1>
       <p>In React, state is an object that represents the dynamic data of a component. It determines how a component behaves and renders at any given time. Unlike props, which are passed to a component by its parent and are immutable within the component, state is managed within the component itself and can change over time.</p>

       <h2>Key Characteristics of State:</h2>
       <ul>
        <li><strong>Local to the Component:</strong> State is scoped to the component it is defined in and cannot be accessed directly by other components.</li>
        <li><strong>Dynamic:</strong> State can change based on user interaction, API responses, or other events.</li>
        <li><strong>Triggers Re-Renders:</strong> Re-Renders: When state changes, React automatically re-renders the component to reflect the updated state in the UI.</li>

        <p>Here’s a simple example of how state is used in a functional component:</p>
        <p>1. useState(0) initializes the count state variable with a default value of 0. It also provides the setCount function to update count.</p>
        <p>2. When the "Increment" button is clicked, the setCount function updates the state to count + 1.</p>
        <p>3. The component re-renders, and the updated count value is displayed.</p>
        <code>{`import React, { useState } from 'react';

                function Counter() {
                  // Declare a state variable called 'count' and a function to update it
                  const [count, setCount] = useState(0);

                  return (
                    <div>
                      <p>Current Count: {count}</p>
                      <button onClick={() => setCount(count + 1)}>Increment</button>
                      <button onClick={() => setCount(count - 1)}>Decrement</button>
                    </div>
                  );
                }

                export default Counter;`}
        </code>
       </ul>
          
        <h2>Managing State in Class Components (Legacy):</h2>
        <p>In class components, state is managed with the state property and updated using this.setState.</p>
        <ul>
          <code>{`
                      import React, { Component } from 'react';

            class Counter extends Component {
              constructor() {
                super();
                this.state = {
                  count: 0
                };
              }

              increment = () => {
                this.setState({ count: this.state.count + 1 });
              };

              render() {
                return (
                  <div>
                    <p>Current Count: {this.state.count}</p>
                    <button onClick={this.increment}>Increment</button>
                  </div>
                );
              }
            }

            export default Counter;
            `}</code>
        </ul>
        <h2>Key Differences Between State and Props:</h2>
      <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid white"}}>
        <thead>
          <tr>
            <th style={{ padding: "8px", textAlign: "left", border: "1px solid white" }}>Feature</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px solid white" }}>State</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px solid white" }}>Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", border: "1px solid white" }}>Mutability</td>
            <td style={{ padding: "8px", border: "1px solid white" }}>Mutable by the component</td>
            <td style={{ padding: "8px", border: "1px solid white" }}>Immutable (read-only)</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid white" }}>Scope</td>
            <td style={{ padding: "8px", border: "1px solid white" }}>Local to the component</td>
            <td style={{ padding: "8px", border: "1px solid white" }}>Passed from parent to child</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid white" }}>Usage</td>
            <td style={{ padding: "8px", border: "1px solid white" }}>Manages dynamic data</td>
            <td style={{ padding: "8px", border: "1px solid white" }}>Configures components</td>
          </tr>
        </tbody>
      </table>
      </>
    );
  };
  
  export default State;
  