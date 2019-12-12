import React from 'react'
import styled from 'styled-components'

import Sprite from './Sprite'

const StyledHex = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  mask: url(${require('../assets/mask.png')});
  mask-size: 100%;
  ${({ x, y }) => `
    left: ${x * 80 - (y % 2 === 0 ? 40 : 0)}px;
    top: ${(y - 1) * 60}px;
  `}
`

const StyledSprite = styled(Sprite)`
  position: absolute;
  ${({ offsetX, offsetY }) => `
    left: ${offsetX}px;
    top: ${offsetY}px;
  `}
`

const verticesRef = [
  [20, -20, false, false],
  [60, 0, false, true],
  [60, 40, true, false],
  [20, 60, false, true],
  [-20, 40, true, false],
  [-20, 0, false, true],
]

const edgesRef = [
  [40, 0, false, false, 1],
  [40, 20, false, false, 2],
  [40, 40, false, false, 3],
  [0, 40, true, true, 1],
  [0, 20, true, true, 2],
  [0, 0, true, true, 3],
]

const getSpriteProps = ([offsetX, offsetY, flipH, flipV, x]) => ({
  offsetX,
  offsetY,
  flipH,
  flipV,
  x,
})

const Hex = ({
  x,
  y,
  biome,
  vertices,
  edges,
  transitionsUrl,
  withVertices,
  withEdges,
}) => {
  return (
    <StyledHex x={x} y={y}>
      {withVertices &&
        vertices.map((vertex, i) => (
          <StyledSprite
            key={i}
            transitionsUrl={transitionsUrl}
            {...getSpriteProps(verticesRef[i])}
            x={vertex}
            y={biome === 'water' ? 0 : 2}
          />
        ))}
      {withEdges &&
        edges.map(
          (edge, i) =>
            edge && (
              <StyledSprite
                key={i}
                transitionsUrl={transitionsUrl}
                {...getSpriteProps(edgesRef[i])}
                y={biome === 'water' ? 1 : 3}
              />
            ),
        )}
    </StyledHex>
  )
}

export default Hex
