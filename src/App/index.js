import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Dropzone from '../Dropzone'
import Preview from '../Preview'
import Transitions from '../Transitions'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background-color: black;
  }
`

const Layout = styled.div`
  display: flex;
  padding: 40px;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

const App = () => {
  const [transitionsUrl, setTransitionsUrl] = useState(
    require('./assets/transitions.png'),
  )
  return (
    <>
      <GlobalStyle />
      <Dropzone onChange={setTransitionsUrl}>
        <Layout>
          <Preview />
          <Transitions transitionsUrl={transitionsUrl} />
        </Layout>
      </Dropzone>
    </>
  )
}

export default App
