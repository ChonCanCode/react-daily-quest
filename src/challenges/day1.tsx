import React, { useState } from "react";
import "../styles/styles.css"

const Day1 = () => {
  
  return (
    <div>
      <h1>Day 1: What is React and what makes it different?</h1>
        <p>React is a popular JavaScript library for building user interfaces, primarily developed and maintained by  Facebook. It focuses on creating reusable UI components, which makes development more efficient and organized.</p>

        <p></p>What sets React apart:

        <p>Component-Based Architecture: React encourages the creation of encapsulated components that manage their own state, allowing you to build complex user interfaces by combining simple components.</p>
        <p>Virtual DOM: React uses a virtual DOM to improve performance. Instead of directly manipulating the browser's DOM, React updates a virtual representation of it. When changes occur, it efficiently updates only the parts of the DOM that need to be changed.</p>
        <p>JSX Syntax: React uses JSX, a syntax extension that allows you to write HTML-like code within JavaScript. This makes it easier to visualize the structure of the UI and integrates well with the component-based architecture.</p>
        <p>Unidirectional Data Flow: Data flows in one direction (from parent to child components) in React, making it easier to debug and understand how data changes affect the UI.</p>
        <p>React is popular for its flexibility, efficiency, and ease of use. It's used by many companies and developers to create dynamic and responsive web applications. If you're interested, I can share more about how it's used in real-world applications or help you get started with some basic examples.</p>
    </div>
  );
};
  export default Day1;
  