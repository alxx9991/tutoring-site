import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row"

const ContentStyle = styled(Row)`
  text-align: center;
  p {
    margin-bottom: 1.5rem;
  }
  @media ${props => props.theme.breakpoints.m} {
    text-align: left;
  }
`

const Content = () => {
  return (
    <ContentStyle sd={2} ed={6} sm={6} em={10} sl={9} el={13}>
      <p className="bold-text text-secondary-accent">I LIK MEF</p>
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
    </ContentStyle>
  )
}

export default Content
