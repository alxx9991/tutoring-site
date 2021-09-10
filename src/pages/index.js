import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import { Hero } from "../components/App/Sections"
// import StyleSink from "./style-sink"

const IndexPage = () => (
  <Layout>
    <Hero />
    {/* <About />
    <Why /> */}
  </Layout>
)

export default IndexPage
