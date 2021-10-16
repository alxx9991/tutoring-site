import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import Content from "./Content"
import Review from "./Review"
import Button from "../../../Shared/styles/Button"
import Row from "../../../Layout/Row"

const WhyStyle = styled(FullWidthSection)``
const WhyButton = styled(Row)`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }
`

const Why = () => (
  <WhyStyle>
    <Title></Title>
    <Content></Content>
    <Review></Review>
    <WhyButton sd={2} ed={6}>
      <Button className="bold-text">Contact Alex!</Button>
    </WhyButton>
  </WhyStyle>
)

export default Why
