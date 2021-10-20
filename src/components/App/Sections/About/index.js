import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import Content from "./Content"
import Marks from "./Marks"

const AboutStyle = styled(FullWidthSection)``

const About = () => (
  <AboutStyle id="about">
    <Title></Title>
    <Content></Content>
    <Marks></Marks>
  </AboutStyle>
)

export default About
