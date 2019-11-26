import React from 'react'
import styled from 'styled-components'

import Hex from './Hex'

const grid = [
  [
    {
      biome: 'water',
      vertices: [],
      edges: [],
    },
    {
      biome: 'water',
      vertices: [],
      edges: [],
    },
    {
      biome: 'water',
      vertices: [0, 0, 1],
      edges: [false, true],
    },
    {
      biome: 'ground',
      vertices: [0, 0, 0, 1, 2],
      edges: [false, false, false, true, true],
    },
    {
      biome: 'ground',
      vertices: [0, 0, 2, 1],
      edges: [false, true, true],
    },
    {
      biome: 'water',
      vertices: [0, 0, 0, 0, 1],
      edges: [false, false, false, false, true],
    },
  ],
  [
    {
      biome: 'water',
      vertices: [0, 0, 0, 1, 1],
      edges: [false, false, false, true],
    },
    {
      biome: 'water',
      vertices: [0, 0, 1, 1],
      edges: [false, false, true],
    },
    {
      biome: 'water',
      vertices: [1, 2, 2, 2, 1],
      edges: [true, true, true, true],
    },
    {
      biome: 'ground',
      vertices: [0, 1, 1, 0, 1, 1],
      edges: [false, true, false, false, true],
    },
    {
      biome: 'water',
      vertices: [1, 0, 0, 1, 2, 2],
      edges: [false, false, false, true, true, true],
    },
  ],
  [
    {
      biome: 'ground',
      vertices: [2, 2, 2, 2],
      edges: [true, true, true],
    },
    {
      biome: 'water',
      vertices: [0, 1, 2, 1, 1, 1],
      edges: [false, true, true, false, true],
    },
    {
      biome: 'ground',
      vertices: [2, 1, 1, 1, 1, 2],
      edges: [true, false, true, false, true, true],
    },
    {
      biome: 'ground',
      vertices: [1, 0, 0, 1, 1],
      edges: [false, false, false, true, false, true],
    },
    {
      biome: 'ground',
      vertices: [1, 2, 2, 1],
      edges: [true, true, true],
    },
    {
      biome: 'water',
      vertices: [0, 0, 0, 0, 1, 1],
      edges: [false, false, false, false, true],
    },
  ],
  [
    {
      biome: 'water',
      vertices: [1, 1, 2, 1],
      edges: [false, true, true, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [1, 1, 2, 1, 1, 2],
      edges: [false, true, true, false, true, true],
    },
    {
      biome: 'water',
      vertices: [2, 2, 1, 0, 1, 2],
      edges: [true, true, false, false, true, true],
    },
    {
      biome: 'ground',
      vertices: [0, 1, 1, 1, 2, 1],
      edges: [false, true, false, true, true],
    },
    {
      biome: 'water',
      vertices: [1, 0, 1, 2, 2, 2],
      edges: [false, false, true, true, true, true],
    },
  ],
  [
    {
      biome: 'water',
      vertices: [0, 1, 2, 2],
      edges: [false, true, true],
    },
    {
      biome: 'ground',
      vertices: [1, 1, 1, 0, 1, 2],
      edges: [false, true, false, false, true, true],
    },
    {
      biome: 'water',
      vertices: [1, 0, 1, 2, 2, 2],
      edges: [false, false, true, true, true, true],
    },
    {
      biome: 'water',
      vertices: [1, 2, 2, 2, 1],
      edges: [true, true, true, true],
    },
    {
      biome: 'ground',
      vertices: [1, 1, 0, 0, 1, 1],
      edges: [true, false, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [2, 0, 0, 0, 0, 1],
      edges: [false, false, false, false, false, true],
    },
  ],
  [
    {
      biome: 'ground',
      vertices: [1, 0, 1, 1, 0, 1],
      edges: [false, false, true, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [1, 1, 0, 1, 1],
      edges: [true, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [2, 1, 1, 1, 0, 1],
      edges: [true, false, true, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [1, 0, 1, 2, 1, 1],
      edges: [false, false, true, true, false, true],
    },
    {
      biome: 'ground',
      vertices: [0, 0, 0, 1, 1],
      edges: [false, false, false, true],
    },
  ],
  [
    {
      biome: 'ground',
      vertices: [0, 1, 1],
      edges: [false, true],
    },
    {
      biome: 'water',
      vertices: [2, 2, 2, 2, 2, 2],
      edges: [true, true, true, true, true, true],
    },
    {
      biome: 'ground',
      vertices: [0, 1, 1, 0, 1, 1],
      edges: [false, true, false, false, true],
    },
    {
      biome: 'water',
      vertices: [2, 1, 0, 1, 2, 2],
      edges: [true, false, false, true, true, true],
    },
    {
      biome: 'water',
      vertices: [2, 2, 2, 1, 0, 1],
      edges: [true, true, true, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [0, 0, 0, 0, 1, 1],
      edges: [false, false, false, false, true],
    },
  ],
  [
    {
      biome: 'ground',
      vertices: [1, 1],
      edges: [true],
    },
    {
      biome: 'ground',
      vertices: [1, 0, 0, 0, 0, 1],
      edges: [false, false, false, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [1, 2],
      edges: [true, true],
    },
    {
      biome: 'water',
      vertices: [0, 1, 0, 0, 0, 1],
      edges: [false, true, false, false, true],
    },
    {
      biome: 'ground',
      vertices: [1, 0, 0, 0, 0, 2],
      edges: [false, false, false, false, true, true],
    },
  ],
]

const StyledPreview = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${require('./assets/background.png')});
  background-size: 100%;
  position: relative;
  overflow: hidden;
`

const Preview = props => {
  const flatGrid = []
  grid.forEach((row, y) =>
    row.forEach((value, x) => {
      flatGrid.push({ x, y, ...value })
    }),
  )
  return (
    <StyledPreview>
      {flatGrid.map(hex => (
        <Hex key={`${hex.x},${hex.y}`} {...hex} {...props} />
      ))}
    </StyledPreview>
  )
}

export default Preview
