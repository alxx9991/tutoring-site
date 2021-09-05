import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeroWrapper = styled.div`
  .hero-content {
    .main-photo {
      margin-top: 1rem;
      width: 90%;
    }
  }
`

const Hero = () => (
  <HeroWrapper className="grid">
    <div className="hero-content grid-content">
      <h1>
        Wo shi <span className="text-main-accent">Arix</span>
      </h1>
      <p className="large-text text-secondary-accent">
        Sydney's Number One HSC Mathematics Coach
      </p>
      <StaticImage
        className="main-photo"
        src="../images/photo.png"
        alt="photo of alex"
      />
    </div>
  </HeroWrapper>
)

export default Hero
