import { Link } from "react-router-dom";

const Day0 = () => {
  return (
    <>
      <Link to="/">Home Page</Link>
      <h1>React Concepts</h1>
      <ul>
        <li>
          <Link to="/Component">What is Component?</Link>
        </li>
        <li>
          <Link to="/State">What is State?</Link>
        </li>
        <li>
          <Link to="/Hook">What is Hook?</Link>
        </li>
        <li>
          <Link to="/Dependencies">What is Dependencies?</Link>
        </li>
        <li>
          <Link to="/TypeScript">What is TypeScript?</Link>
        </li>
        <li>
          <Link to="/Vite">What is Vite?</Link>
        </li>
        <li>
          <Link to="/Props">What is Props?</Link>
        </li>
        <li>
          <Link to="/Git">What is Git?</Link>
        </li>
      </ul>
    </>
  );
};

export default Day0;
