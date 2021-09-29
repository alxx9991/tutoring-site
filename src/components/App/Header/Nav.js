import React from "react"
import Row from "../../Layout/Row.js"
import styled from "styled-components"

const NavStyle = styled(Row)`
  justify-content: space-between;
  align-items: center;
  display: none;

  @media ${props => props.theme.breakpoints.m} {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: var(--main-accent);
  }
`

const Nav = () => (
  <NavStyle sd={5} ed={10} sm={5} em={10} sl={7} el={13}>
    <a className="large-text" href="">
      About
    </a>
    <a className="large-text" href="">
      Videos
    </a>
    <a className="large-text" href="">
      Services
    </a>
    <a className="large-text" href="">
      Contact
    </a>
  </NavStyle>
)
export default Nav
