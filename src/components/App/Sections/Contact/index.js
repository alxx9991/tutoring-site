import React from "react"
import styled from "styled-components"
import FullWidthSection from "../../../Layout/FullWidthSection"
import Title from "./Title"
import Row from "../../../Layout/Row"
import BigLogo from "../../../../images/big-logo.svg"
const ContactStyle = styled(FullWidthSection)``

const ContactCardsContainer = styled(Row)`
  display: flex;
  flex-direction: column;
`
const ContactCard = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr, 3);
  background-color: var(--neutral-light-accent);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  text-align: center;

  @media ${props => props.theme.breakpoints.m} {
    text-align: left;
    min-height: 6.5rem;
    margin-bottom: 1.5rem;
  }
`

const LogoContainer = styled(Row)`
  display: none;
  padding: 2rem;
  @media ${props => props.theme.breakpoints.m} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Contact = () => (
  <ContactStyle id="contact">
    <Title></Title>
    <LogoContainer sm={2} em={6} sl={3} el={7}>
      <BigLogo></BigLogo>
    </LogoContainer>
    <ContactCardsContainer sd={2} ed={6} sm={6} em={10} sl={8} el={13}>
      <ContactCard>
        <p className="bold-text text-secondary-accent">LOCATION</p>
        <p className="large-text">North Ryde / Macquarie University</p>
      </ContactCard>
      <ContactCard>
        <p className="bold-text text-secondary-accent">PHONE NUMBER</p>
        <p className="large-text"> 0466 260 806</p>
      </ContactCard>
      <ContactCard>
        <p className="bold-text text-secondary-accent">E-MAIL</p>
        <p className="large-text">alex.lin9991@gmail.com</p>
      </ContactCard>
    </ContactCardsContainer>
  </ContactStyle>
)

export default Contact
