import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"

const TitleStyle = styled(Row)`
  margin-top: 2rem;
  text-align: center;

  @media ${props => props.theme.breakpoints.m} {
    margin-top: 4rem;
  }
`

const Title = () => (
  <TitleStyle sd={2} ed={6} sm={2} em={10} sl={4} el={12}>
    <h2>Contact Me</h2>
  </TitleStyle>
)

export default Title
