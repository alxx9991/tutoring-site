import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import MainPhoto from "./MainPhoto"
import Button from "../../../Shared/styles/Button"
import Row from "../../../Layout/Row"

const HeroStyle = styled(FullWidthSection)`
  min-height: 650px;
  max-height: 670px;
`
const HeroButtonMobile = styled(Row)`
  text-align: center;
  margin-top: 1rem;

  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }
`

const Hero = () => (
  <HeroStyle>
    <Title></Title>
    <MainPhoto></MainPhoto>
    <HeroButtonMobile sd={2} ed={6}>
      <Button className="bold-text">Find out more!</Button>
    </HeroButtonMobile>
  </HeroStyle>
)

export default Hero
