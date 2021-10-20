import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"
import { StaticImage } from "gatsby-plugin-image"

const ContentStyle = styled(Row)`
  text-align: center;
  p {
    margin-bottom: 0.5rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    text-align: left;
  }
  .tick {
    display: inline-block;
    margin-right: 0.9rem;
    margin-top: 0.4rem;
    min-width: 22px;
    min-height: 20px;
  }

  .reason-heading {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .first-reason-heading {
    margin-bottom: 0.5rem;
    margin-top: 0rem;
  }
  @media ${props => props.theme.breakpoints.m} {
    p {
      margin-bottom: 1rem;
    }

    .reason-heading {
      margin-top: 2.5rem;
    }
  }
`

const Content = () => {
  return (
    <ContentStyle sd={2} ed={6} sm={2} em={6} sl={3} el={8}>
      <p className="bold-text text-secondary-accent first-reason-heading">
        <StaticImage
          src="../../../../images/tick.svg"
          alt="tick"
          className="tick"
          height={20}
        ></StaticImage>
        PERSONALISED COURSES
      </p>
      <p>
        Whether students are trying to get ahead of their cohort, or catch up, I
        develop tailor-made courses to suit their level, goals, and school’s
        requirements.
      </p>
      <p>
        Mass tutoring centres cannot possibly design their courses to be
        optimised for every individual student.
      </p>
      <p className="bold-text text-secondary-accent reason-heading">
        <StaticImage
          src="../../../../images/tick.svg"
          alt="tick"
          className="tick"
          height={20}
        ></StaticImage>
        EXCELLENT REVIEWS AND RESULTS
      </p>
      <p>
        I have had 3 years of coaching experience, and throughout, recently
        graduated students have had excellent results, whose reviews are
        available on request.
      </p>
      <p className="bold-text text-secondary-accent reason-heading">
        <StaticImage
          src="../../../../images/tick.svg"
          alt="tick"
          className="tick"
          height={20}
        ></StaticImage>
        REASONABLE RATES
      </p>
      <p>
        Fully transparent and fair fees, available in the services section
        below. I don’t charge a massive premium for a brand name.
      </p>
      <p>Do not pay $100 per hour for tutoring.</p>
    </ContentStyle>
  )
}

export default Content
