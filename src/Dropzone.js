import React from 'react'
import styled from 'styled-components'

const StyledDropzone = styled.div`
  height: 100vh;
`

const Dropzone = ({ onChange, ...rest }) => {
  return (
    <StyledDropzone
      onDrop={e => {
        e.stopPropagation()
        e.preventDefault()

        const dt = e.dataTransfer
        const files = [...dt.files]

        if (files.length) {
          const file = files[0]
          const reader = new FileReader()
          reader.onload = function() {
            onChange(reader.result)
          }
          reader.readAsDataURL(file)
        }
      }}
      onDragOver={e => {
        e.preventDefault()
      }}
      {...rest}
    />
  )
}

export default Dropzone
