import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import Content from "./Content"
import Marks from "./Marks"

const AboutStyle = styled(FullWidthSection)``

const About = () => (
  <AboutStyle>
    <Title></Title>
    <Content></Content>
    <Marks></Marks>
  </AboutStyle>
)

export default About
