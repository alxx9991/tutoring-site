import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const TitleStyle = styled(Row)`
  text-align: center;
`

const Title = () => {
  return (
    <TitleStyle sd={2} ed={6} sm={2} em={10} sl={4} el={12}>
      <h2>About Me</h2>
    </TitleStyle>
  )
}

export default Title
