import React, { useState } from "react";
import "../styles/styles.css"

const Day4 = () => {

    return (
    <div>
        <h2>1. Inline Styles</h2>
        <p>You can add inline styles directly to elements using the style attribute. This approach uses a JavaScript object to define CSS properties.</p>
        <div className="code"> {
            `const divStyle = {
                color: 'blue',
                backgroundColor: 'lightgray'
              };
              
              function MyComponent() {
                return <div style={divStyle}>Hello, world!</div>;
              }`
              }
        </div>
        <p></p>
        <div  className="code">
            {`function MyComponent() {
            return <div style={{ color: 'blue', backgroundColor: 'lightgray' }}>Hello, world!</div>;
            }`}
        </div>

        <h2>2. CSS Stylesheets</h2>
        <p>You can use traditional CSS files to style your components. Just create a CSS file and import it into your component file.</p>
        <div className="code"> {
            `:root {
                    --background-color: #3D405B;
                    --cambridge-blue-color: #81B29A;
                    --sunset-color: #F2CC8F;
                    --burnt-sienna-color: #E07A5F;
                    --eggshell-color: #F4F1DE;
                }
                body {
                    font-family: Arial, sans-serif;
                    margin: 5px;
                    padding: 5px;
                    background-color: var(--background-color);
                    color: var(--eggshell-color);
                }`
            }
        </div>

        <h2>3. CSS modules</h2>
        <p>CSS Modules allow you to scope your CSS to specific components, avoiding naming conflicts. Create a CSS file with the .module.css extension and import it as a module.</p>
        <div className="code"> {
            ` ../style.css
            .myDiv {
                        color: blue;
                        background-color: lightgray;
                     }`
            }
        </div>

        <div className="code"> {
            `import styles from './MyComponent.module.css';

            function MyComponent() {
            return <div className={styles.myDiv}>Hello, world!</div>;
            }`
            }
        </div>

        <h2>4. Styled Component</h2>
        <p>Styled-components is a popular library for writing CSS-in-JS. It allows you to create styled components with encapsulated styles.</p>
        <div className="code"> {
            `  
            import styled from 'styled-components';
            const StyledDiv = styled.div\`
                    color: blue;
                    background-color: lightgray;
                    \`;

            function MyComponent() {
            return <StyledDiv>Hello, world!</StyledDiv>;
            }
            `
            }
        </div>

        <h2>5.CSS-in-JS Libraries</h2>
        <p>Besides styled-components, other libraries like emotion and JSS offer similar capabilities for writing CSS within your JavaScript files.</p>
        <div className="code"> {
            `/** @jsxImportSource @emotion/react */
                import { css } from '@emotion/react';

                const divStyle = css\`
                color: blue;
                background-color: lightgray;
                \`;

                function MyComponent() {
                return <div css={divStyle}>Hello, world!</div>;
                }`
            }
        </div>
    </div>
        )};
  export default Day4;
  