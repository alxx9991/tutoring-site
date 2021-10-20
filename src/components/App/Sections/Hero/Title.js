import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"
import Button from "../../../Shared/styles/Button"

const TitleStyle = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;

  @media ${props => props.theme.breakpoints.m} {
    text-align: left;
    align-items: flex-start;
  }

  p {
    margin-top: 0.5rem;
  }
`
const HeroButtonMain = styled(Row)`
  display: none;
  text-align: center;
  margin-top: 4rem;

  @media ${props => props.theme.breakpoints.m} {
    display: block;
    text-align: left;
  }
`

const Title = () => (
  <TitleStyle sd={2} ed={6} sm={2} em={6} sl={3} el={8}>
    <h1>
      Hello, I am <span className="text-main-accent">Alex</span>
    </h1>
    <p className="large-text text-secondary-accent">
      Sydney’s Number One HSC Mathematics Coach
    </p>
    <HeroButtonMain>
      <Button className="bold-text" sm={2} em={6} sl={3} el={8}>
        Find out more!
      </Button>
    </HeroButtonMain>
  </TitleStyle>
)

export default Title
