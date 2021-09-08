import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../../../images/logo.svg"

const HeaderWrapper = styled.div`
  grid-column: 2 / 8;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .logo {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo className="logo" />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
