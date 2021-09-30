import styled from "styled-components"
import { Link } from "gatsby"

// A styled component for the button with primary background color and pill shape
const Button = styled(Link)`
  background: var(--main-accent);
  border-radius: 3px;
  color: var(--neutral-light-accent);
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0.8rem 0;

  width: 18rem;

  @media ${props => props.theme.breakpoints.s} {
    width: 22rem;
  }
`

export default Button
