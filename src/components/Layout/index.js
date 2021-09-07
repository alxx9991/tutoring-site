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
import GlobalStyles from "../shared/GlobalStyles"
import Theme from "../shared/Theme.js"
import Grid from "../shared/Grid.js"
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
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <ContentStyles>{children}</ContentStyles>
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
