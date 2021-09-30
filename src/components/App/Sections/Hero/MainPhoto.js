import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"
import { StaticImage } from "gatsby-plugin-image"

const MainPhotoStyle = styled(Row)`
  svg {
    width: 100%;
    max-height: 500px;
  }

  @media ${props => props.theme.breakpoints.m} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

const MainPhoto = () => (
  <MainPhotoStyle sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
    <StaticImage src="../../../../images/photo.png" alt="photo of alex" />
  </MainPhotoStyle>
)

export default MainPhoto
