import * as React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import Logo from "./Logo"
import Nav from "./Nav"

import FullWidthSection from "../../Layout/FullWidthSection.js"

const HeaderStyle = styled(FullWidthSection)`
  margin-top: 2rem;
  height: auto;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Logo></Logo>
    <Nav></Nav>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
