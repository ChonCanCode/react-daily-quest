const Component = () => {
    return (
      <>
       <h1>What is Component?</h1>
       <p>In React, a component is one of the fundamental building blocks of the framework. It is a reusable, independent piece of the user interface UI that can be thought of as a self-contained module. Components allow developers to split the UI into smaller, manageable parts, making code easier to understand, maintain, and reuse.</p>

       <p>There are two main types of components in React:</p>

       <h2>1. Functional Components:</h2>
       <ul>
        <li>These are JavaScript functions that return React elements (UI).</li>
        <li>They are simpler and primarily used for rendering static or presentational content.</li>
        <li>With the introduction of React Hooks, functional components can also manage state and side effects.</li>
        <code>{`function Greeting(props) {
            return <h1>Hello, {props.name}!</h1>;
            }`}
        </code>
       </ul>
       <h2>2. Class Components:</h2>
       <ul>
        <li>These are ES6 classes that extend the React.Component base class.</li>
        <li>They can hold their own state and have lifecycle methods for handling different phases of a component's lifecycle.</li>
        <code>{
            `class Greeting extends React.Component {
                render() {
                  return <h1>Hello, {this.props.name}!</h1>;
                }
              }`}</code>
       </ul>
       <h2>Key Features</h2>
       <ul>
        <li>Reusability: Components can be reused across the app with different data (props).</li>
        <li>Props: Components can receive input data (props) to render dynamic content.</li>
        <li>State: Components (especially stateful ones) can manage internal data that affects how they behave or render.</li>
        <li>Composition: Components can be composed together to build complex UIs.</li>
        
        <code>{
            `function App() {
     return (
         <div>
          <Greeting name="Alice" />
          <Greeting name="Bob" />
            </div>
     );}`}</code>
       </ul>

        <p>In the example above, the Greeting component is reused with different props to display personalised messages.</p>

      </>
    );
  };
  
  export default Component;
  