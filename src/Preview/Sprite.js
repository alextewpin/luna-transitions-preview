import styled from 'styled-components'

const StyledSprite = styled.div`
  width: 40px;
  height: 40px;
  background-size: 256px;
  ${({ x, y, flipH, flipV, transitionsUrl }) => `
    background-image: url(${transitionsUrl});
    background-position-x: ${x * -40}px;
    background-position-y: ${y * -40}px;
    transform: scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1});
  `}
`

export default StyledSprite
