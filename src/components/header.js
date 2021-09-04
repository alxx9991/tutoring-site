import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeaderWrapper = styled.div`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .logo {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StaticImage
      src="../images/logo.svg"
      width="120"
      alt="logo"
      className="logo"
    />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
