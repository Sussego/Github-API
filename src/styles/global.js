import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    padding: 1rem;
  }

  a {
    color: ${(props) => props.theme.colors.link};
  }

  a.hover {
    text-decoration: underline;
  }

  input, p, a, button {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.base};
    font-family: ${(props) => props.theme.fonts};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;
