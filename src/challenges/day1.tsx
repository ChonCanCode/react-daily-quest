import React, { useState } from "react";

const Day1 = () => {
  // State to manage the greeting message
  const [name, setName] = useState("");
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Main Header */}
      <h1 style={{ color: "#61dafb", fontSize: "2.5rem" }}>🌟 Introduction to React 🌟</h1>
      
      {/* Sub-header */}
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Welcome to <strong>Day 1</strong> of learning React! 🎉
      </p>
      
      {/* Description Section */}
      <div style={{ backgroundColor: "#f7f7f7", padding: "15px", borderRadius: "8px" }}>
        <p style={{ fontSize: "1rem", marginBottom: "8px" }}>
          Today, we’ll explore the building blocks of React: <strong>components</strong>, <strong>JSX</strong>, and <strong>rendering</strong>. 
          React is a JavaScript library for building user interfaces, allowing us to create reusable UI components.
        </p>
        <p style={{ fontSize: "1rem" }}>
          Your goal is to build a simple interactive component that displays a personalised greeting message.
        </p>
      </div>
      
      {/* Tasks Section */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "#333" }}>🎯 Tasks for Today:</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>🔧 Set up a React functional component.</li>
          <li>📦 Use <strong>state</strong> to manage the greeting message.</li>
          <li>💻 Create an input field to capture user input dynamically.</li>
          <li>✨ Display the personalised greeting message.</li>
        </ul>
      </div>
      
      {/* Interactive Example */}
      <div style={{ marginTop: "30px", backgroundColor: "#e3f2fd", padding: "15px", borderRadius: "8px" }}>
        <h2 style={{ color: "#0277bd" }}>🛠 Live Example:</h2>
        <p style={{ fontSize: "1rem" }}>Type your name below to see the dynamic greeting:</p>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
        />
        
        <h3 style={{ marginTop: "20px", color: "#00796b" }}>
          {name ? `Hello, ${name}! 👋` : "Hello, friend! 👋"}
        </h3>
      </div>
      
      {/* Code Example */}
      <div style={{ marginTop: "20px", backgroundColor: "#f0f4c3", padding: "15px", borderRadius: "8px" }}>
        <h2 style={{ color: "#5d4037" }}>💻 Code Example:</h2>
        <pre style={{ backgroundColor: "#eceff1", padding: "10px", borderRadius: "6px", overflow: "auto" }}>
          <code>
            {`import React, { useState } from "react";

const GreetingComponent = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>{name ? \`Hello, \${name}! 👋\` : "Hello, friend! 👋"}</h3>
    </div>
  );
};

export default GreetingComponent;`}
          </code>
        </pre>
      </div>
      
      {/* Closing Section */}
      <div style={{ marginTop: "30px", padding: "10px", textAlign: "center" }}>
        <p style={{ fontSize: "1rem" }}>
          🎉 You’ve just completed Day 1 of React learning! Great job on taking your first steps into the world of modern web development. 🚀
        </p>
        <p style={{ fontSize: "1rem", fontWeight: "bold", marginTop: "10px" }}>
          See you on Day 2 for more exciting challenges! 💪
        </p>
      </div>
    </div>
  );
};
  export default Day1;
  