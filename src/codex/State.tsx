const State = () => {
    return (
      <>
       <h1>What is State?</h1>
       <p>In React, state is an object that represents the dynamic data of a component. It determines how a component behaves and renders at any given time. Unlike props, which are passed to a component by its parent and are immutable within the component, state is managed within the component itself and can change over time.</p>

       <p>Key Characteristics of State:</p>
       <ul>
        <li><strong>Local to the Component:</strong> State is scoped to the component it is defined in and cannot be accessed directly by other components.</li>
        <li><strong>Dynamic:</strong> State can change based on user interaction, API responses, or other events.</li>
        <li><strong>Triggers Re-Renders:</strong> Re-Renders: When state changes, React automatically re-renders the component to reflect the updated state in the UI.</li>

        <p>Here’s a simple example of how state is used in a functional component:</p>
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
  
        <p>In the example above, the Greeting component is reused with different props to display personalised messages.</p>

      </>
    );
  };
  
  export default State;
  