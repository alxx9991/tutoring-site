import * as React from "react"
import styled from "styled-components"

import FullWidthSection from "../../Layout/FullWidthSection.js"
import Row from "../../Layout/Row.js"

const FooterStyle = styled(FullWidthSection)`
  margin-top: 2rem;
  height: auto;

  .line {
    height: 0px;
    border-top: solid var(--main-accent) 0.5px;
    display: none;

    @media ${props => props.theme.breakpoints.m} {
      display: block;
      grid-column: 2 / span 8;
    }
    @media ${props => props.theme.breakpoints.l} {
      grid-column: 2 / span 12;
    }
  }
`
const NavContainer = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--main-accent);
    margin-bottom: 2rem;
    &:hover {
      transform: scale(1.1);
      color: var(--secondary-accent);
    }
  }

  @media ${props => props.theme.breakpoints.m} {
    flex-direction: row;
  }
`

const Footer = () => (
  <FooterStyle>
    <div className="line"></div>
    <NavContainer sd={2} ed={6} sm={2} em={10} sl={3} el={13}>
      <a className="large-text" href="#about">
        About
      </a>
      <a className="large-text" href="#why">
        Why
      </a>
      <a className="large-text" href="#videos">
        Videos
      </a>
      <a className="large-text" href="#services">
        Services
      </a>
      <a className="large-text" href="#contact">
        Contact
      </a>
    </NavContainer>
  </FooterStyle>
)

export default Footer
