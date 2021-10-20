import * as React from "react"

import Layout from "../components/Layout"
import {
  Hero,
  About,
  Why,
  Video,
  Services,
  Contact,
} from "../components/App/Sections"
// import StyleSink from "./style-sink"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Why />
    <Video />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
