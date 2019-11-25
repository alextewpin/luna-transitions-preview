import React from 'react'
import styled from 'styled-components'

const StyledPreview = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${require('./assets/background.png')});
  background-size: 100%;
  image-rendering: optimizeSpeed;
  image-rendering: pixelated;
`

const Preview = () => {
  return <StyledPreview />
}

export default Preview
