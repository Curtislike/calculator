import React from 'react'
import { connect } from 'react-redux'

import Display from '@/containers/Calculator/Display/Display'
import Keypad from '@/containers/Calculator/Keypad/Keypad'
import History from '@/containers/Calculator/History/History'
import {
  StyledCalculator,
  WrapperDisplayKeypad,
} from './components'
import ControlPanel from './ControlPanel/ControlPanel'
import { getHistory } from '@/selectors/hitory.selectors'
import {
  addToHistory,
  clearAllHistory,
} from '@/actions/history.actions'
import {
  ClearAllCommand,
  CalculateCommand,
} from '@/utils/commands'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0',
      history: [],
      isHistoryVisible: true,
    }
    this.executeCommand = this.executeCommand.bind(this)
    this.handleHistoryClick = this.handleHistoryClick.bind(
      this,
    )
  }

  executeCommand(command) {
    const newState = command.execute(this.state)
    this.setState({
      ...newState,
    })
    if (
      command instanceof CalculateCommand &&
      newState.history
    ) {
      this.props.addToHistory(newState.history)
    }
    if (command instanceof ClearAllCommand) {
      this.props.clearAllHistory()
    }
  }

  handleHistoryClick() {
    this.setState({
      isHistoryVisible: !this.state.isHistoryVisible,
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
        <ControlPanel
          isHistoryVisible={this.state.isHistoryVisible}
          handleHistoryClick={
            this.handleHistoryClick
          }></ControlPanel>
        <History
          isHistoryVisible={this.state.isHistoryVisible}
          handleHistoryClick={
            this.handleHistoryClick
          }></History>
      </StyledCalculator>
    )
  }
}

const mapStateToProps = props => ({
  history: getHistory(props),
})

export default connect(
  mapStateToProps,
  { addToHistory, clearAllHistory },
)(Calculator)
