import styled from "styled-components"
import { motion } from "framer-motion"

const FullWidthSection = styled(motion.section)`
  height: var(--section-height);
  grid-column: 1 / span 6;
  display: grid;
  grid-template-columns: 2rem repeat(4, 1fr) 2rem;
  grid-template-rows: max-content;
  gap: ${props => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
  margin: ${props => (props.marginDefault ? props.marginDefault : 0)};

  @media ${props => props.theme.breakpoints.s} {
    gap: ${props => (props.gapSmall ? props.gapSmall : "2rem 2rem")};
    margin: ${props => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 1 / span 10;
    grid-template-columns: 3rem repeat(8, 1fr) 3rem;
    gap: ${props => (props.gapMedium ? props.gapMedium : "2rem 2rem")};
    margin: ${props => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${props => props.theme.breakpoints.l} {
    grid-column: 1 / span 14;
    grid-template-columns: 1fr repeat(12, 1fr) 1fr;
    gap: ${props => (props.gapLarge ? props.gapLarge : "2rem 2rem")};
    margin: ${props => (props.marginLarge ? props.marginLarge : 0)};
  }
`

export default FullWidthSection
