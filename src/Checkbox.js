import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`

const StyledCheckbox = styled.input`
  margin-right: 5px;
`

const Checkbox = ({ value, label, onChange }) => (
  <StyledLabel>
    <StyledCheckbox
      type="checkbox"
      checked={value}
      onChange={event =>
        onChange({
          value: event.target.checked,
          event,
        })
      }
    />
    {label}
  </StyledLabel>
)

export default Checkbox
