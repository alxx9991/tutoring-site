import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import ReviewSVG from "../../../../images/review.svg"

const ReviewStyle = styled(Row)`
  text-align: center;
  svg {
    max-width: 400px;
    width: 85%;
    height: auto;
  }
  @media ${props => props.theme.breakpoints.m} {
    svg {
      margin-top: 5rem;
      max-width: none;
      min-width: 335px;
      width: 100%;
      height: auto;
    }
  }
`

const Review = () => {
  return (
    <ReviewStyle sd={1} ed={7} sm={6} em={10} sl={9} el={13}>
      <ReviewSVG></ReviewSVG>
    </ReviewStyle>
  )
}

export default Review
