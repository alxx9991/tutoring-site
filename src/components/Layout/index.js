/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
// import Header from "../header"
import GlobalStyles from "../Shared/GlobalStyles"
import Theme from "../Shared/Theme.js"
import Grid from "./Grid.js"
import Header from "../App/Header"
import Footer from "../App/Footer"
import FullWidthSection from "./FullWidthSection"

const ContentStyles = styled(FullWidthSection)``

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles></GlobalStyles>
      <Grid>
        <Header></Header>
        <ContentStyles>{children}</ContentStyles>
        <Footer></Footer>
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
