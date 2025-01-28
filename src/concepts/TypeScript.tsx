import { Link } from "react-router-dom";

const TypeScript = () => {
  return (
    <>
      <Link to="/">Home Page</Link> 
      <h1>What is TypeScript?</h1>
      <p>
        TypeScript is a <strong>superset of JavaScript</strong> that adds static typing to the language. 
        It builds on JavaScript by introducing types, interfaces, and other powerful features that make 
        your code more predictable, maintainable, and less prone to runtime errors.
      </p>

      <p>Key features of TypeScript:</p>
      <ol>
        <li>Static Typing: You declare types for your variables, function arguments, and return values.</li>
        <li>Error Checking: TypeScript catches type-related bugs during development, before your code runs.</li>
        <li>Improved Code Editor Support: It provides better autocompletion, documentation, and refactoring tools in IDEs like VSCode.</li>
        <li>Compatibility: TypeScript compiles to plain JavaScript, meaning it works anywhere JavaScript does (browsers, Node.js, etc.).</li>
      </ol>
      
      <h2>Why Use TypeScript with React?</h2>
      <p>When building applications with React, TypeScript offers several advantages:</p>

      <ol>
        <li>Type Safety</li>
        <ul>
            <li>With JavaScript, you can run into runtime errors when you pass the wrong type of data (e.g., passing a string instead of a number). TypeScript catches these mistakes during development.</li>
            <code>
           {`function add(a: number, b: number): number {
return a + b;
}
add(5, "10"); // Error in TypeScript (wrong type), but JS would fail only at runtime.`}
            </code>
        </ul>
        <li>Better Component Development</li>
        <ul>
            <li>TypeScript allows you to define the shape of props and state in your React components.</li>
            <li>This makes it easier to catch errors and understand what kind of data a component expects.</li>
            <code>{`type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

<Button label="Click me" onClick={() => console.log("Clicked")} />; // Works fine
<Button label={5} onClick={() => console.log("Clicked")} />; // Error: label must be a string
`}</code>
        </ul>
        <li>Improved Developer Experience(IDEs)</li>
        <ul>
            <li>IDEs like VSCode provide much better autocompletion and inline documentation when using TypeScript. For example:</li>
            <ul>
                <li>If you define types for your <Link to="/Props">props</Link>, you’ll see helpful hints when using your components.</li>
                <li>Functions, objects, and libraries are easier to work with because the type system "knows" what methods or properties are available.</li>
            </ul>
        </ul>
        <li>Easier Refactoring</li>
        <ul>
            <li>When your app grows, you’ll often refactor your code. TypeScript makes this process safer and easier because it ensures all affected code respects the new type definitions.</li>
            <li>In plain JavaScript, changing a function or object’s structure might lead to hard-to-find bugs.</li>
        </ul>
        <li>Works Seamlessly with Modern React Features</li>
        <ul>
            <li>TypeScript pairs well with React hooks like <Link to="/Hook">useState</Link> and <Link to="/Hook">useReducer</Link> by allowing you to define types for state and actions.</li>
            <code>{`const [count, setCount] = useState<number>(0);

setCount("five"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
`}</code>
        </ul>
        <li>Community and Industry Trends</li>
        <ul>
            <li>Many organisations use TypeScript for their React projects because it makes codebases more robust, scalable, and maintainable.</li>
            <li>Learning TypeScript increases your employability, as it's a skill in high demand.</li>
        </ul>
      </ol>

      <h2>When to Use TypeScript vs JavaScript</h2>
      <ul>
        <li>Use TypeScript if you want:</li>
        <ul>
            <li>Stronger type safety and fewer runtime errors.</li>
            <li>Better tooling and developer experience.</li>
            <li>To work on larger projects or collaborate with others.</li>
            </ul>
        </ul>

        <ul>
        <li>Use JavaScript if:</li>
        <ul>
            <li>You’re working on a small, quick prototype.</li>
            <li>You’re just getting started with React and feel more comfortable with plain JavaScript.</li>
            </ul>
        </ul>

    
    </>
  );
};

export default TypeScript;
