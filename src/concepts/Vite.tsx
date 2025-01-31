import { Link } from "react-router-dom";

const Vite = () => {
    return (
        <>
        <Link to="/">Home Page</Link>
        <h1>What is Vite and why using it?</h1>

        <p>Vite is a modern frontend build tool that provides a faster and more efficient development experience for JavaScript frameworks like React, Vue, and others. It is designed to replace Webpack and similar bundlers with a lighter, faster alternative.</p>

        
        <h2>Why Use Vite for a React Project?</h2>
        <p>When creating a React project, we often use Create React App (CRA) or Vite. Vite is preferred for several reasons:</p>
        <ol>
            <li><strong>Super Fast Development Server 🚀</strong></li>
            <ul>
                <li>Vite starts up instantly, thanks to ES Module (ESM) support.</li>
                <li>Unlike Webpack, which bundles everything before running, Vite serves files on demand.</li>
            </ul>

            <li><strong>Lightweight & Minimal Configuration ⚡</strong></li>
            <ul>
                <li>No need for complex Webpack configs.</li>
                <li>Works out of the box with TypeScript, JSX, CSS modules, and more.</li>
            </ul>

            <li><strong>Optimised Build for Production 📦</strong></li>
            <ul>
                <li>Uses Rollup for efficient bundling.</li>
                <li>Produces smaller and faster production builds than Webpack.</li>
            </ul>

            <li><strong>Supports Modern JavaScript Features ✨</strong></li>
            <ul>
                <li>Works seamlessly with ES Modules (ESM).</li>
                <li>Automatically optimises dependencies like React and React DOM.</li>
            </ul>
        </ol>

        <h2>How to Create a React Project with Vite?</h2>
        <code>{`# Create a new Vite project
npm create vite@latest my-react-app --template react

# Move into the project folder
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev`}</code>


        </>
    );
};

export default Vite;