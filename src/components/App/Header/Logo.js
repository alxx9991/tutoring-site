import React from "react"
import LogoSVG from "../../../images/logo.svg"
import Row from "../../Layout/Row.js"
import styled from "styled-components"

const LogoStyle = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.m} {
    justify-content: flex-start;
  }
`

const Logo = () => (
  <LogoStyle sd={3} ed={5} sm={2} em={4} sl={3} el={5}>
    <LogoSVG></LogoSVG>
  </LogoStyle>
)
export default Logo
