import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const WhyWrapper = styled.div`
  padding-top: 4rem;
  .why-content {
    h1 {
      margin-bottom: 1rem;
    }

    .reason-heading {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .tick {
        margin-right: 1rem;
      }
    }

    .reason-paragraph {
      margin-bottom: 2rem;
    }
  }
`

const Why = () => (
  <WhyWrapper className="grid">
    <div className="why-content grid-content">
      <h1>Why choose Alex</h1>
      <div className="reason-heading">
        <StaticImage
          src="../images/tick.svg"
          alt="tick"
          width="30"
          className="tick"
        />
        <p className="bold-text text-secondary-accent">PERSONALISED COURSES</p>
      </div>
      <p className="reason-paragraph">
        Whether students are trying to get ahead of their cohort, or catch up, I
        develop tailor-made courses to suit their level, goals, and school’s
        requirements.
      </p>
      <p className="reason-paragraph">
        Mass tutoring centres cannot possibly design their courses to be
        optimised for every individual student.
      </p>
      <div className="reason-heading">
        <StaticImage
          src="../images/tick.svg"
          alt="tick"
          width="30"
          className="tick"
        />
        <p className="bold-text text-secondary-accent">EXCELLENT RESULTS</p>
      </div>
      <p className="reason-paragraph">
        I have had 3 years of coaching experience, and throughout, recently
        graduated students have had excellent results, whose reviews are
        available on request.
      </p>
      <div className="reason-heading">
        <StaticImage
          src="../images/tick.svg"
          alt="tick"
          width="30"
          className="tick"
        />
        <p className="bold-text text-secondary-accent">NO BULLSHIT RATES</p>
      </div>
      <p className="reason-paragraph">
        Fully transparent and fair fees, available in the services section
        below. I don’t charge a massive premium for a brand name.
      </p>
      <p className="reason-paragraph">
        If you are paying someone $100 per hour you are being scammed.
      </p>
      <StaticImage src="../images/review.png" />
    </div>
  </WhyWrapper>
)

export default Why
