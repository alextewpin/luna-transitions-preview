import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Dropzone from '../Dropzone'
import Preview from '../Preview'
import Transitions from '../Transitions'
import Checkbox from '../Checkbox'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background-color: black;
    image-rendering: optimizeSpeed;
    image-rendering: pixelated;
  }
`

const StyledLayout = styled.div`
  display: flex;
  padding: 40px;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

const StyledControls = styled.div`
  margin-top: 15px;
  color: grey;
  & > * {
    margin-bottom: 5px;
  }
`

const App = () => {
  const [transitionsUrl, setTransitionsUrl] = useState(
    require('./assets/transitions.png'),
  )
  const [withEdges, setWithEdges] = useState(true)
  const [withVertices, setWithVertices] = useState(true)
  return (
    <>
      <GlobalStyle />
      <Dropzone onChange={setTransitionsUrl}>
        <StyledLayout>
          <Preview
            transitionsUrl={transitionsUrl}
            withEdges={withEdges}
            withVertices={withVertices}
          />
          <div>
            <Transitions transitionsUrl={transitionsUrl} />
            <StyledControls>
              <div>Drop 128x128 image anywhere</div>
              <Checkbox
                value={withEdges}
                label="Edges"
                onChange={({ value }) => setWithEdges(value)}
              />
              <Checkbox
                value={withVertices}
                label="Vertices"
                onChange={({ value }) => setWithVertices(value)}
              />
            </StyledControls>
          </div>
        </StyledLayout>
      </Dropzone>
    </>
  )
}

export default App
