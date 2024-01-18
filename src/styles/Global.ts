import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  ul,
  li,
  p,
  span,
  a,
  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  body, input, label, a {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;

    font-weight: 400;
    color: #111111;
  }
`;
