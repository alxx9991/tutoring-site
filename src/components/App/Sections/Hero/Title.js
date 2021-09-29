import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"

const TitleStyle = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;

  p {
    margin-top: 0.5rem;
  }
`

const Title = () => (
  <TitleStyle sd={2} ed={6}>
    <h1>
      Wo Shi <span className="text-main-accent">Arix</span>
    </h1>
    <p className="large-text text-secondary-accent">
      Sydney’s Number One HSC Mathematics Coach
    </p>
  </TitleStyle>
)

export default Title
