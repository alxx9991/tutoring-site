import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Why from "../components/why"

import Seo from "../components/seo"

import StyleSink from "./style-sink"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Why />
  </Layout>
)

export default IndexPage
