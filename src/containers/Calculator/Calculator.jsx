import React from 'react'
import styled from 'styled-components'

import Display from '@/containers/Calculator/Display/Display'
import Keypad from '@/containers/Calculator/Keypad/Keypad'
import History from '@/containers/Calculator/History/History'

const StyledCalculator = styled.div`
  margin: 0 25px;
  display: flex;
  flex-direction: row;
`

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
        <div>
          <Display value={this.state.value}></Display>
          <Keypad
            executeCommand={this.executeCommand}></Keypad>
        </div>

        <History history={this.state.history}></History>
      </StyledCalculator>
    )
  }
}

export default Calculator
