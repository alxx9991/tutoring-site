import * as React from "react"

import Layout from "../components/Layout"
import { Hero, About, Why, Video } from "../components/App/Sections"
// import StyleSink from "./style-sink"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Why />
    <Video />
  </Layout>
)

export default IndexPage
