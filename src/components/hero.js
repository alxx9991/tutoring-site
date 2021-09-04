import React from "react"
import styled from "styled-components"

const HeroWrapper = styled.div`
  .hero-content {
  }
`

const Hero = () => (
  <HeroWrapper className="grid">
    <div className="hero-content grid-content">
      <h1>Wo shi Arix</h1>
      <p>Sydney's Number One HSC Mathematics Coach</p>
    </div>
  </HeroWrapper>
)

export default Hero
