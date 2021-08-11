import {createGlobalStyle} from "styled-components";

const globalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    
    html, body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    }
    `

export default globalStyle