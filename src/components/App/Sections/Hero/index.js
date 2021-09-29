import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import MainPhoto from "./MainPhoto"

const HeroStyle = styled(FullWidthSection)``

const Hero = () => (
  <HeroStyle>
    <Title></Title>
    <MainPhoto></MainPhoto>
  </HeroStyle>
)

export default Hero
