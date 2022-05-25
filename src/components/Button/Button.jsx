import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Calculator from '@/containers/Calculator/Calculator'
import { StyledButton } from './components'

const Button = ({
  type,
  label,
  command,
  executeCommand,
  id,
}) => (
  <StyledButton
    className={id}
    onClick={() =>
      executeCommand(new command(label, type))
    }>
    {label}
  </StyledButton>
)

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  command: PropTypes.any,
  executeCommand: PropTypes.any,
}

export default Button
