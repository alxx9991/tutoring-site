import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"
import { StaticImage } from "gatsby-plugin-image"

const MainPhotoStyle = styled(Row)`
  svg {
    width: 100%;
    height: 100%;
    max-height: 500px;
  }
`

const MainPhoto = () => (
  <MainPhotoStyle sd={2} ed={6}>
    <StaticImage src="../../../../images/photo.png" alt="photo of alex" />
  </MainPhotoStyle>
)

export default MainPhoto
