import React from 'react'
import PropTypes from 'prop-types'

import Button from '@/components/Button/Button'
import { btnTypes } from '@/constants/btnTypes'
import { AddCommand } from '@/utils/commands'
import { StyledKeypad } from './components'

class Keypad extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledKeypad>
        {btnTypes.map(({ type, label, command, id }) => (
          <Button
            key={label}
            type={type}
            label={label}
            command={command}
            id={id}
            executeCommand={this.props.executeCommand}
          />
        ))}
      </StyledKeypad>
    )
  }
}

Keypad.propTypes = {
  executeCommand: PropTypes.any,
}

export default Keypad
