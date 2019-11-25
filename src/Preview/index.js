import React from 'react'
import styled from 'styled-components'

import Hex from './Hex'

const StyledPreview = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${require('./assets/background.png')});
  background-size: 100%;
  image-rendering: optimizeSpeed;
  image-rendering: pixelated;
  position: relative;
`

const grid = [
  ['w', 'w', 'w', 'g', 'g', 'w'],
  ['w', 'w', 'w', 'g', 'w'],
  ['g', 'w', 'g', 'g', 'g', 'w'],
  ['w', 'g', 'w', 'g', 'w'],
  ['w', 'g', 'w', 'w', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g'],
  ['g', 'w', 'g', 'w', 'w', 'g'],
  ['g', 'g', 'g', 'w', 'g'],
]

const Preview = () => {
  const flatGrid = []
  grid.forEach((row, y) =>
    row.forEach((value, x) => {
      flatGrid.push({ x, y, value })
    }),
  )
  return (
    <StyledPreview>
      {flatGrid.map(hex => (
        <Hex key={`${hex.x},${hex.y}`} {...hex} />
      ))}
    </StyledPreview>
  )
}

export default Preview
