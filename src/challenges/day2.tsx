import React from "react";
import { Link } from "react-router-dom";

const Day2 = () => {
  return (
    <>
      <Link to="/">Home Page</Link>

      <h1>Day 2: How to Review a React Project?</h1>

      <ol>
        <li>
          <strong>README.md</strong>
          <p>This file provides an overview of the project, setup instructions, and key details.</p>
        </li>

        <li>
          <strong>Understand the Project Structure</strong>
          <p>Familiarize yourself with the project's folder and file organization. Common directories include:</p>
          <ul>
            <li>
              <span className="highlight-box">src</span>: Contains the application's source code.
            </li>
            <li>
              <span className="highlight-box">public</span>: Holds static assets like images and the{" "}
              <span className="highlight-box">index.html</span> file.
            </li>
          </ul>
        </li>

        <li>
          <strong>Check the Entry Point</strong>
          <p>
            The entry point is the first file executed when the app starts. In React, this is usually{" "}
            <span className="highlight-box">index.js</span>.
          </p>
        </li>

        <li>
          <strong>Examine index.html</strong>
          <p>
            This is the root HTML file that loads the React application in the browser:{" "}
            <span className="highlight-box">index.html</span>.
          </p>
        </li>

        <li>
          <strong>Identify the Main Component</strong>
          <p>
            The main component, often <span className="highlight-box">App.js</span>, serves as the root component
            of the application.
          </p>
        </li>

        <li>
          <strong>Review the Components</strong>
          <p>React applications are built using components—reusable building blocks that define the user interface.</p>
        </li>

        <li>
          <strong>Understand State Management</strong>
          <p>
            State management controls how data is stored and updated. In React, this is commonly handled with the{" "}
            <span className="highlight-box">useState</span> hook.
          </p>
        </li>

        <li>
          <strong>Explore Routing</strong>
          <p>
            Routing enables navigation between pages. In React, this is typically managed with the{" "}
            <span className="highlight-box">react-router-dom</span> library.
          </p>
        </li>
      </ol>
    </>
  );
};

export default Day2;
