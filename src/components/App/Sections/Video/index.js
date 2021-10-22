import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import Content from "./Content"
import Row from "../../../Layout/Row"
import Button from "../../../Shared/styles/Button"
import Videos from "./Videos"

const VideoStyle = styled(FullWidthSection)`
  text-align: center;
`

const VideoButtonMobile = styled(Row)`
  text-align: center;
  margin-bottom: 2rem;

  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }
`
const Video = () => (
  <VideoStyle id="videos">
    <Title></Title>
    <Content></Content>
    <Videos></Videos>
    <VideoButtonMobile sd={2} ed={6}>
      <Button className="bold-text" href="#contact">
        Ask for free trial!
      </Button>
    </VideoButtonMobile>
  </VideoStyle>
)

export default Video
