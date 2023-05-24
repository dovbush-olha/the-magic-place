import { createGlobalStyle } from 'styled-components';
import harry from 'assets/fonts/HarryPotter.woff2';
import harry_ttf from 'assets/fonts/HarryPotter.ttf';
import { WEIGHT, COLORS } from './services/constants';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Harry Potter";
    src: url(${harry}) format('woff2'),
         url(${harry_ttf}) format('ttf');
  }

  html {
    --14px: 0.875rem;
    --15px: 0.9375rem;
    --16px: 1rem;
    --17px: 1.0625rem;
    --18px: 1.125rem;
    --19px: 1.1875rem;
    --20px: 1.25rem;
    --21px: 1.3125rem;
  }

  html, body {
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  ul,
  ol {
    padding: 0;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
    height: 100%;
  }

  body {
    font-family: 'Cormorant Garamond', serif;
    font-weight: ${WEIGHT.medium};
    -webkit-font-smoothing: antialiased;
    background-color: ${COLORS.Background.DarkBlue};
    color: ${COLORS.Text.Beige};
  }
`;
