import { css } from '@emotion/react';

export const GlobalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2a363b;
    font-weight: 500;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }
  a.active {
    color: red;
  }
`;
