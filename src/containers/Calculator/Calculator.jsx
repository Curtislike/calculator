import React from 'react'

import Display from '@/containers/Calculator/Display/Display'
import Keypad from '@/containers/Calculator/Keypad/Keypad'
import History from '@/containers/Calculator/History/History'
import {
  StyledCalculator,
  WrapperDisplayKeypad,
} from './components'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        previous: null,
        operator: null,
        current: '0',
      },
      history: [],
    }
    this.executeCommand = this.executeCommand.bind(this)
  }

  executeCommand(command) {
    const newState = command.execute(this.state)
    console.log(newState)

    this.setState({
      ...newState,
    })
  }

  render() {
    return (
      <StyledCalculator>
        <WrapperDisplayKeypad>
          <Display value={this.state.value}></Display>
          <Keypad
            executeCommand={this.executeCommand}></Keypad>
        </WrapperDisplayKeypad>
        <History history={this.state.history}></History>
      </StyledCalculator>
    )
  }
}

export default Calculator
