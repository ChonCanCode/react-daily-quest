import { Link } from "react-router-dom";

const Props = () => {
  return (
    <>
      <Link to="/">Home Page</Link>
      <h1>What is Props?</h1>
      <p>
        In React, "props" (short for "properties") are used to pass data from a
        parent component to a child component. Props allow components to be
        reusable, dynamic, and configurable.
      </p>

      <h2>How Props Work</h2>
      <ul>
        <li>Props are passed to a child component as an object.</li>
        <li>
          They are read-only (immutable) and cannot be modified by the child
          component.
        </li>
        <li>
          They enable component reusability by customizing behavior and
          appearance.
        </li>
      </ul>
      <h2>Example: Using Props</h2>
      <code>
        {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
`}
      </code>

      <h2>Destructuring Props</h2>
      <code>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
`}</code>

      <h2>Props with Default Values</h2>
      <code>{`function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
`}</code>

      
      <h2>Props in Functional vs Class Components</h2>
      <p>Functional Component:</p>
      <code>{`const Message = ({ text }) => <p>{text}</p>;
`}</code>
    <p>Class Component:</p>
    <code>{`class Message extends React.Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}
`}</code>

    </>
  );
};

export default Props;
