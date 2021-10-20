import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import ReviewSVG from "../../../../images/review.svg"
import Button from "../../../Shared/styles/Button"

const ReviewStyle = styled(Row)`
  text-align: center;
  svg {
    max-width: 400px;
    width: 85%;
    height: auto;
  }
  @media ${props => props.theme.breakpoints.m} {
    svg {
      margin-top: 2rem;
      max-width: none;
      min-width: 335px;
      width: 100%;
      height: auto;
    }
  }
`
const ReviewButtonMain = styled(Row)`
  display: none;
  text-align: center;
  margin-top: 4rem;
  &:hover {
    transform: scale(1.02);
  }
  @media ${props => props.theme.breakpoints.m} {
    display: block;
    text-align: left;
  }
`

const Review = () => {
  return (
    <ReviewStyle sd={1} ed={7} sm={6} em={10} sl={9} el={13}>
      <ReviewSVG></ReviewSVG>
      <ReviewButtonMain>
        <Button className="bold-text" sm={2} em={6} sl={3} el={8}>
          Contact Alex!
        </Button>
      </ReviewButtonMain>
    </ReviewStyle>
  )
}

export default Review
