import { Link } from "react-router-dom";


const Day0 = () => {
    return (
      <>
        <Link to="/">Home Page</Link> 
        <h1>React Concepts</h1>
        <ul>
          <li><Link to="/Component">What is Component?</Link></li>
          <li><Link to="/State">What is State?</Link></li>
          <li><Link to="/Hook">What is Hook?</Link></li>
          <li></li>
          <li></li>
        </ul>
      </>
    );
  };
  
  export default Day0;
  