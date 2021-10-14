import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import MarksSVG from "../../../../images/hsc-marks.svg"
import { StaticImage } from "gatsby-plugin-image"

const MarksStyle = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.breakpoints.m} {
    grid-row: 2 / span 1;
    align-items: flex-start;
  }
`
const MarksOnlyWrapper = styled.div`
  svg {
    width: 275px;
    height: 140px;
  }
  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }
`

const MarksAndPhotoWrapper = styled.div`
  display: none;
  @media ${props => props.theme.breakpoints.m} {
    display: block;
    .about-photo {
      max-width: 345px;
    }
  }
  @media ${props => props.theme.breakpoints.l} {
    .about-photo {
      min-width: 400px;
      max-width: 430px;
    }
  }
`

const MarksAbsoluteWrapper = styled.div`
  position: absolute;
  z-index: 1;
  svg {
    width: 280px;
    height: 140px;
  }
  margin-top: 21rem;
  margin-left: -2rem;

  @media ${props => props.theme.breakpoints.l} {
    margin-top: 25rem;
    margin-left: 12rem;
    svg {
      width: 330px;
      height: 165px;
    }
  }
`

const Marks = () => (
  <MarksStyle sd={1} ed={7} sm={2} em={6} sl={3} el={7}>
    <MarksOnlyWrapper>
      <MarksSVG />
    </MarksOnlyWrapper>
    <MarksAndPhotoWrapper>
      <MarksAbsoluteWrapper>
        <MarksSVG />
      </MarksAbsoluteWrapper>
      <StaticImage
        src="../../../../images/about-photo.png"
        alt="photo of alex"
        className="about-photo"
      />
    </MarksAndPhotoWrapper>
  </MarksStyle>
)

export default Marks
