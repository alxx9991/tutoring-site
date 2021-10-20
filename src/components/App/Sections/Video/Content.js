import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import Button from "../../../Shared/styles/Button"

const ContentStyle = styled(Row)`
  text-align: center;
  p {
    margin-bottom: 1.5rem;
  }
  @media ${props => props.theme.breakpoints.m} {
    text-align: left;
  }
`
const VideoButtonMain = styled(Row)`
  display: none;
  text-align: center;
  margin-top: 4rem;

  @media ${props => props.theme.breakpoints.m} {
    display: block;
    text-align: left;
  }
`

const Content = () => {
  return (
    <ContentStyle sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
      <p className="bold-text text-secondary-accent">TRY BEFORE YOU BUY</p>
      <p>
        Not convinced yet? Watch these videos of me running a mock lesson so
        that you know you will enjoy the lessons. Even if you don't go ahead
        with it, I hope you learn something from the videos.
      </p>
      <p>
        I can also do free trial lesson, so you can experience an actual lesson
        too. There is really no reason not to give it a go!
      </p>
      <VideoButtonMain>
        <Button className="bold-text" sm={2} em={6} sl={3} el={8}>
          Ask for a free trial!
        </Button>
      </VideoButtonMain>
    </ContentStyle>
  )
}

export default Content
