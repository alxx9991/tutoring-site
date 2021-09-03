import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeaderWrapper = styled.div``

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StaticImage src="../images/logo.svg" width="100" alt="logo" />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
