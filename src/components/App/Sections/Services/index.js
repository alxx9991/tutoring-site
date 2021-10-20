import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import Row from "../../../Layout/Row"
import SinglePersonSVG from "../../../../images/single-person.svg"
import TwoPeopleSVG from "../../../../images/two-people.svg"
import SixPeopleSVG from "../../../../images/six-people.svg"

const ServicesContainer = styled(Row)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  @media ${props => props.theme.breakpoints.m} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    grid-gap: 3rem;
  }
`

const ServicesStyle = styled(FullWidthSection)`
  text-align: center;
  @media ${props => props.theme.breakpoints.m} {
    text-align: left;
    .service-title {
      text-align: center;
    }
  }
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--neutral-light-accent);
  margin-bottom: 2rem;
  border-radius: 3px;
  padding: 1.2rem;

  .gap-above {
    margin-top: 1rem;
  }

  .service-body {
    min-height: 130px;
  }

  @media ${props => props.theme.breakpoints.m} {
    justify-content: flex-start;
    margin-bottom: 0rem;
  }

  @media ${props => props.theme.breakpoints.l} {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  min-height: 163px;
  min-width: 230px;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }

  @media ${props => props.theme.breakpoints.l} {
    display: flex;
  }
`

const Services = () => (
  <ServicesStyle id="services">
    <Title></Title>
    <ServicesContainer sd={2} ed={6} sm={2} em={10} sl={3} el={13}>
      <Service>
        <p className="bold-text text-main-accent service-title">
          1-ON-1 COACHING
        </p>
        <ImageWrapper className="gap-above service-title">
          <SinglePersonSVG></SinglePersonSVG>
        </ImageWrapper>
        <p className="gap-above service-body">
          Standard one-on-one coaching, in person or online. All resources are
          provided but I will make some recommendations on textbooks.
        </p>
        <p className="bold-text text-main-accent gap-above">LESSON FEES</p>
        <p>
          <span className="bold-text">$60</span> /hour
        </p>
        <p className="text-secondary-accent gap-above">
          In-person travelling time fee:
        </p>
        <p>
          <span className="bold-text">$30</span> /hour of travelling time
        </p>
      </Service>
      <Service>
        <p className="bold-text text-main-accent service-title">
          BRING A FRIEND
        </p>
        <ImageWrapper className="gap-above service-title">
          <TwoPeopleSVG></TwoPeopleSVG>
        </ImageWrapper>
        <p className="gap-above service-body">
          Tutoring can be boring (even with me). Bring a mate and enjoy their
          company (and discounted rates!)
        </p>
        <p className="bold-text text-main-accent gap-above">LESSON FEES</p>
        <p>
          <span className="bold-text">$45</span> /hour/student
        </p>
        <p className="text-secondary-accent gap-above">
          In-person travelling time fee:
        </p>
        <p>
          <span className="bold-text">$20</span> /hour of travelling
          time/student
        </p>
      </Service>
      <Service>
        <p className="bold-text text-main-accent service-title">
          BRING MORE FRIENDS
        </p>
        <ImageWrapper className="gap-above service-title">
          <SixPeopleSVG></SixPeopleSVG>
        </ImageWrapper>
        <p className="gap-above service-body">
          What's better than one friend? More friends! We can have group lessons
          with three or more students total, up to 6 (sorry if you have more
          than that, but you could split up into two groups)
        </p>
        <p className="bold-text text-main-accent gap-above">LESSON FEES</p>
        <p>
          <span className="bold-text">$35</span> /hour/student
        </p>
        <p className="text-secondary-accent gap-above">
          In-person travelling time fee:
        </p>
        <p>
          <span className="bold-text">$15</span> /hour of travelling
          time/student
        </p>
      </Service>
    </ServicesContainer>
  </ServicesStyle>
)

export default Services
