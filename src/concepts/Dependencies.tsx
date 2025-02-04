import { Link } from "react-router-dom";

const Dependencies = () => {
  return (
    <>
      <Link to="/">Home Page</Link>
      <h1>What is Dependencies?</h1>
      <p>
        In React, Dependencies often refers to dependencies in various contexts:
      </p>

      <ol>
        <li>Dependencies in useEffect Hook</li>
        <p>
          In the useEffect hook, dependencies determine when the effect should
          run. The dependency array is the second argument of useEffect:
        </p>
        <li>
          <li>
            If the array is empty ([]), the effect runs only once when the
            component mounts.
          </li>
          <li>
            If it includes variables, the effect runs when those variables
            change.
          </li>
          <li>If omitted, the effect runs after every render.</li>
          <code>{`import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs when \`count\` changes.");
  }, [count]); // \`count\` is a dependency

  return (
    <button onClick={() => setCount(count + 1)}>Increment</button>
  );
}`}</code>
        </li>

        <li>Dependencies in useCallback and useMemo</li>
        <p>
          Both useCallback and useMemo depend on variables to optimize
          performance.
        </p>
        <code>{`const memoizedFunction = useCallback(() => {
  console.log("Only recomputes when \`count\` changes.");
}, [count]);

const memoizedValue = useMemo(() => count * 2, [count]);
`}</code>
        <li>External Dependencies (npm Packages)</li>
        <p>React projects often rely on external libraries like:</p>
        <code>{`
        "dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
`}</code>
      </ol>
    </>
  );
};

export default Dependencies;
