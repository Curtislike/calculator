import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Calculator from '@/containers/Calculator/Calculator'

const StyledButton = styled.button`
  width: 150px;
  height: 150px;
  border: 1px solid #707070;
  border-radius: 32px;
  font-size: 64px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  @media (max-width: 1610px) {
    width: 120px;
    height: 120px;
    font-size: 52px;
  }
  @media (max-width: 1340px) {
    width: 100px;
    height: 100px;
    font-size: 52px;
  }
  @media (max-width: 1042px) {
    width: 80px;
    height: 80px;
    font-size: 38px;
    border-radius: 22px;
  }
  @media (max-width: 650px) {
    width: 60px;
    height: 60px;
    font-size: 26px;
    border-radius: 16px;
  }
`

const Button = ({
  type,
  label,
  command,
  executeCommand,
}) => (
  <StyledButton
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
