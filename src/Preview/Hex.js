import React from 'react'
import styled from 'styled-components'

const StyledHex = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ x, y }) => `
    left: ${x * 80 - (y % 2 === 0 ? 40 : 0)}px;
    top: ${(y - 1) * 60}px;
  `}
`

const Hex = ({ x, y, value }) => {
  return (
    <StyledHex x={x} y={y}>
      <div>
        {x}, {y}, {value}
      </div>
    </StyledHex>
  )
}

export default Hex
