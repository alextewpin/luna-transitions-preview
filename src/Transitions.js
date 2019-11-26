import React from 'react'
import styled from 'styled-components'

const StyledTransitions = styled.div`
  width: 256px;
  height: 256px;
  background-size: 100%;
  border: 2px solid grey;
  ${({ transitionsUrl }) => `
    background-image: url(${transitionsUrl});
  `}
`

const Transitions = ({ transitionsUrl }) => {
  return <StyledTransitions transitionsUrl={transitionsUrl} />
}

export default Transitions
