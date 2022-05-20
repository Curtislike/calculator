import React from 'react'
import styled from 'styled-components'

import Display from './Display/Display'
import Keypad from './Keypad/Keypad'
import History from './History/History' // alias routes

const StyledCalculator = styled.div`
  margin: 0 25px;
  display: flex;
  flex-direction: row;
`

// - ***Calculator*** - корневой элемент для менеджмента данных
//  калькулятора (логика для хранения истории, операций, текущего состояния и т.д.).

// - Сложение +
// - Вычитание +
// - Умножение +
// - Деление +
// - Переключение знака +
// - Построитель выражения -
// - История операций -
// - Показывать полную историю -
// - Очистка истории -
// - Очистка вычисленного значения и выражения -
// - Очистка всего (истории, вычисленного значения и выражения) -
// - Точность расчета - 3 символа +

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        previous: null,
        operator: null,
        current: null,
      },
      history: [],
    }
    this.executeCommand = this.executeCommand.bind(this)
    this.getHistory = this.getHistory.bind(this)
  }

  executeCommand(command) {
    const newValue = command.execute(this.state.value)

    this.setState({
      value: newValue,
      history: [...this.state.history, newValue],
    })
  }

  getHistory(command) {
    command.execute(this.state.history)
  }

  render() {
    return (
      <StyledCalculator>
        <div>
          <Display value={this.state.value}></Display>
          <Keypad
            executeCommand={this.executeCommand}></Keypad>
        </div>
        <History></History>
      </StyledCalculator>
    )
  }
}

export default Calculator
