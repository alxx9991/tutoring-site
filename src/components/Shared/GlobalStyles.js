import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url(//fonts.googleapis.com/css?family=Karla);

  html {
    font-size: 14px;

    /* Colors */
    --main-accent: #061798;
    --secondary-accent: #CF622A;
    --neutral-accent: #BEAE8F;
    --neutral-light-accent: #F0E6D1;

    --section-height: 100vh;
  }

  body {
    background: white;
    font-family: "Karla", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
  }

  p {
    margin: 0rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0rem;
    font-family: "Karla", sans-serif;
    font-weight: 700;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.157rem;
  }
  
  @media ${props => props.theme.breakpoints.l} {
    h1 {
      font-size: 4.209rem;
    }
  }

  h2 {
    font-size: 3.157rem;
  }

  h3 {
    font-size: 2.369rem;
  }

  h4 {
    font-size: 1.777rem;
  }

  h5 {
    font-size: 1.333rem;
  }

  h6 {
    font-size: 1rem;
  }

  .bold-text {
    font-size: 1.333rem;
    font-weight: 700;
  }

  .large-text {
    font-size: 1.333rem;
  }

  /* Text Colors */
  .text-main-accent {
    color: var(--main-accent);
  }

  .text-secondary-accent {
    color: var(--secondary-accent);
  }

  .text-neutral-accent {
    color: var(--neutral-accent);
  }

  .text-neutral-light-accent {
    color: var(--neutral-light-accent);
  }

  /* Grid layout */
  .grid {
    display: grid;
    grid-template-columns: 0 repeat(6, 1fr) 0;
    grid-template-rows: max-content;
    grid-column-gap: 2rem;
    grid-column: 1 / 9;
  }

  .grid-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    grid-area: auto / 2 / auto / 8;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    html {
      font-size: 15px;
    }
  }

  @media ${props => props.theme.breakpoints.l} {
    html {
      font-size: 16px;
    }
  }
`
export default GlobalStyles
