import React from "react";

const Day2 = () => {
  return (
    
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Main Header */}
      <h1 style={{ color: "#61dafb", fontSize: "2.5rem" }}>🌟 Day 2: Setting Up React with VS Code 🌟</h1>
      
      {/* Introduction */}
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Welcome to <strong>Day 2</strong> of your React journey! 🚀 Today, we’ll walk through how to create a React project on Windows using <strong>Visual Studio Code</strong> (VS Code) with the help of <strong>Vite</strong> and <strong>TypeScript</strong>.
      </p>

      {/* Why Vite and TypeScript */}
      <div style={{ backgroundColor: "#f7f7f7", padding: "15px", borderRadius: "8px" }}>
        <h2 style={{ color: "#333" }}>⚡ Why Use Vite?</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>💨 <strong>Faster Development:</strong> Vite is much faster than traditional tools like Create React App because it uses a modern build tool and provides instant feedback.</li>
          <li>🚀 <strong>Hot Module Replacement (HMR):</strong> See changes in your app instantly without refreshing the browser.</li>
          <li>📦 <strong>Lightweight:</strong> Vite uses ES Modules, so it only loads the code you need.</li>
        </ul>

        <h2 style={{ color: "#333", marginTop: "20px" }}>📘 Why TypeScript?</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>✅ <strong>Type Safety:</strong> Catch errors early during development.</li>
          <li>📚 <strong>Better Documentation:</strong> Type annotations make your code easier to read and maintain.</li>
          <li>🔒 <strong>Scalability:</strong> Great for large projects with multiple developers.</li>
        </ul>
      </div>

      {/* Prerequisites */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "#0277bd" }}>🛠 Prerequisites:</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>💻 A Windows machine.</li>
          <li>📦 <a href="https://nodejs.org/" style={{ textDecoration: "none", color: "#00796b" }}>Node.js</a> installed (v14 or later).</li>
          <li>🛠 <a href="https://code.visualstudio.com/" style={{ textDecoration: "none", color: "#00796b" }}>Visual Studio Code</a> installed.</li>
        </ul>
      </div>

      {/* Step-by-Step Instructions */}
      <div style={{ marginTop: "30px", backgroundColor: "#e3f2fd", padding: "15px", borderRadius: "8px" }}>
        <h2 style={{ color: "#0277bd" }}>🚀 Step-by-Step Instructions:</h2>
        <ol style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Install Vite:</strong> Open your terminal and run the following command:
            <pre style={{ backgroundColor: "#eceff1", padding: "10px", borderRadius: "6px", marginTop: "10px" }}>
              <code>npm create vite@latest</code>
            </pre>
          </li>
          <li>
            <strong>Set Up the Project:</strong> Follow the prompts to configure your project:
            <ul>
              <li>Enter a project name (e.g., <code>my-react-app</code>).</li>
              <li>Select <code>React</code> and then <code>TypeScript</code> as the template.</li>
            </ul>
          </li>
          <li>
            <strong>Navigate to Your Project:</strong> Run the following commands:
            <pre style={{ backgroundColor: "#eceff1", padding: "10px", borderRadius: "6px", marginTop: "10px" }}>
              <code>cd my-react-app</code>
              <br />
              <code>npm install</code>
            </pre>
          </li>
          <li>
            <strong>Run the Development Server:</strong> Start your app with:
            <pre style={{ backgroundColor: "#eceff1", padding: "10px", borderRadius: "6px", marginTop: "10px" }}>
              <code>npm run dev</code>
            </pre>
            Open your browser and navigate to the provided localhost link to see your React app in action! 🎉
          </li>
        </ol>
      </div>

      {/* Code Example */}
      <div style={{ marginTop: "20px", backgroundColor: "#f0f4c3", padding: "15px", borderRadius: "8px" }}>
        <h2 style={{ color: "#5d4037" }}>💻 Example Project File Structure:</h2>
        <pre style={{ backgroundColor: "#eceff1", padding: "10px", borderRadius: "6px", overflow: "auto" }}>
          <code>
{`my-react-app/
├── public/
│   ├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
├── package.json
├── vite.config.ts`}
          </code>
        </pre>
      </div>

      {/* Tips */}
      <div style={{ marginTop: "30px", backgroundColor: "#ffe0b2", padding: "15px", borderRadius: "8px" }}>
        <h2 style={{ color: "#ff6f00" }}>✨ Tips:</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Use VS Code extensions like <strong>ESLint</strong> and <strong>Prettier</strong> for clean and consistent code.</li>
          <li>Install the <strong>React Developer Tools</strong> browser extension for debugging React apps.</li>
        </ul>
      </div>

      {/* Closing Section */}
      <div style={{ marginTop: "30px", padding: "10px", textAlign: "center" }}>
        <p style={{ fontSize: "1rem" }}>
          🎉 That’s it for Day 2! You’ve successfully set up your first React project with Vite and TypeScript. Get ready to dive deeper into React development tomorrow. 🚀
        </p>
        <p style={{ fontSize: "1rem", fontWeight: "bold", marginTop: "10px" }}>
          See you on Day 3 for more exciting lessons! 💪
        </p>
      </div>
    </div>
  );
};

export default Day2;