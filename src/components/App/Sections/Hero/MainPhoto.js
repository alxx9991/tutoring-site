import Photo from "../../../../images/Photo.svg"
import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"

const MainPhotoStyle = styled(Row)`
  svg {
    width: 100%;
    height: 100%;
    max-height: 500px;
  }
`

const MainPhoto = () => (
  <MainPhotoStyle sd={2} ed={6}>
    <Photo></Photo>
  </MainPhotoStyle>
)

export default MainPhoto
