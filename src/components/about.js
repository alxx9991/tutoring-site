import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const AboutWrapper = styled.div`
  padding-top: 4rem;
  .about-content {
    p {
      margin-bottom: 2rem;
    }
    .hsc-marks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .hsc-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 3px;
        padding: 2rem 1rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
    }
  }
`

const About = () => (
  <AboutWrapper className="grid">
    <div className="about-content grid-content">
      <h1>About Me</h1>
      <p className="bold-text text-secondary-accent">
        MATHS IS MY HOBBY, TEACHING IS MY PASSION
      </p>
      className="large-text" className="large-text"
      <p>
        Theres more to your coach than just marks! I graduated from North Sydney
        Boys in 2018, and now I study Mathematics and Computer Science at the
        University of Sydney!
      </p>
      <p>
        My personal pursuit is applying mathematical reasoning and concepts to
        developing modern solutions to the problems in our world. Part of this
        pursuit includes teaching others and sharing my knowledge!
      </p>
      <p>I also have other interests, including working on cars and fitness!</p>
      <div className="hsc-marks">
        <div className="hsc-stat">
          <div>ATAR</div>
          <h2 className="text-main-accent">99.5</h2>
        </div>
        <div className="hsc-stat">
          <div>Maths Ext 2 Mark</div>
          <h2 className="text-main-accent">96</h2>
        </div>
      </div>
    </div>
  </AboutWrapper>
)

export default About
