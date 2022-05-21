export class AppendCharacterCommand {
  constructor(characterToAppend, type) {
    this.characterToAppend = characterToAppend
    this.type = type
  }

  execute(state) {
    const { previous, operator, current } = state.value
    if (this.type === 'digit') {
      if (
        current === '0' &&
        this.characterToAppend === '.'
      ) {
        return {
          ...state,
          value: {
            ...state.value,
            current: current + this.characterToAppend,
          },
        }
      }
      if (
        current === null &&
        this.characterToAppend === '.'
      ) {
        return {
          ...state,
          value: {
            ...state.value,
            current: '0' + this.characterToAppend,
          },
        }
      }
      if (current === '0') {
        return {
          ...state,
          value: {
            ...state.value,
            current: this.characterToAppend,
          },
        }
      }
      if (current === null) {
        return {
          ...state,
          value: {
            ...state.value,
            current: this.characterToAppend,
          },
        }
      }
      if (
        this.characterToAppend === '.' &&
        current !== null &&
        current.includes('.')
      ) {
        return { ...state }
      } else {
        return {
          ...state,
          value: {
            ...state.value,
            current: current + this.characterToAppend,
          },
        }
      }
    }
    if (this.type === 'operator') {
      if (previous === null && current === null) {
        return { ...state }
      }
      if (current === null) {
        return {
          ...state,
          value: {
            ...state.value,
            operator: this.characterToAppend,
          },
        }
      }
      if (previous === null) {
        return {
          ...state,
          value: {
            previous: current,
            operator: this.characterToAppend,
            current: null,
          },
        }
      }
      return {
        ...state,
        value: {
          ...state.value,
        },
      }
    }
    if (this.type === 'sign') {
      if (
        (current === 0 && previous === null) ||
        current === null
      ) {
        return { ...state }
      }
      return {
        ...state,
        value: {
          ...state.value,
          current: -current,
        },
      }
    }
  }
}

export class ClearEntryCommand {
  execute(state) {
    const { previous, operator, current } = state.value
    return {
      ...state,
      value: {
        previous: null,
        operator: null,
        current: '0',
      },
    }
  }
}

export class CalculateCommand {
  constructor(operation) {
    this.operation = operation
  }

  execute(state) {
    const { previous, operator, current } = state.value
    if (
      operator === null ||
      previous === null ||
      current === null
    ) {
      return { ...state }
    }
    switch (operator) {
      case '+':
        return {
          ...state,
          value: {
            previous: null,
            operator: null,
            current: AddCommand.execute(previous, current),
          },
          history: [
            ...state.history,
            [previous, operator, current],
          ],
        }
      case '-':
        return {
          ...state,
          value: {
            previous: null,
            operator: null,
            current: SubtractCommand.execute(
              previous,
              current,
            ),
          },
          history: [
            ...state.history,
            [previous, operator, current],
          ],
        }
      case '*':
        return {
          ...state,
          value: {
            previous: null,
            operator: null,
            current: MultiplyCommand.execute(
              previous,
              current,
            ),
          },
          history: [
            ...state.history,
            [previous, operator, current],
          ],
        }
      case '/':
        return {
          ...state,
          value: {
            previous: null,
            operator: null,
            current: DivideCommand.execute(
              previous,
              current,
            ),
          },
          history: [
            ...state.history,
            [previous, operator, current],
          ],
        }
      case '%':
        return {
          ...state,
          value: {
            previous: null,
            operator: null,
            current: RemainderCommand.execute(
              previous,
              current,
            ),
          },
          history: [
            ...state.history,
            [previous, operator, current],
          ],
        }
    }
  }
}

export class AddCommand {
  static execute(currentValue, valueToAdd) {
    return (+currentValue + +valueToAdd).toString()
  }
}

export class SubtractCommand {
  static execute(currentValue, valueToSubtract) {
    return (currentValue - valueToSubtract).toString()
  }
}

export class MultiplyCommand {
  static execute(currentValue, valueToMultiply) {
    if (Number.isInteger(currentValue * valueToMultiply)) {
      return (currentValue * valueToMultiply).toString()
    } else {
      return (currentValue * valueToMultiply)
        .toFixed(3)
        .toString()
    }
  }
}

export class DivideCommand {
  static execute(currentValue, valueToDivide) {
    if (valueToDivide === '0') {
      alert('Division by zero is impossible')
      return '0'
    }
    if (currentValue % valueToDivide) {
      return (currentValue / valueToDivide)
        .toFixed(3)
        .toString()
    } else {
      return (currentValue / valueToDivide).toString()
    }
  }
}

export class RemainderCommand {
  static execute(currentValue, valueToDivide) {
    return (currentValue % valueToDivide).toString()
  }
}

export class ClearHistoryCommand {
  execute(state) {
    return {
      ...state,
      history: [],
    }
  }
}

export class ClearAllCommand {
  execute(state) {
    return {
      ...state,
      value: {
        previous: null,
        operator: null,
        current: '0',
      },
      history: [],
    }
  }
}

export class BackspaceCommand {
  execute(state) {
    const { previous, operator, current } = state.value
    if (
      (current === null || current === '0') &&
      previous === null &&
      operator === null
    )
      return {
        ...state,
      }
    if (
      previous === null &&
      operator === null &&
      current.length > 1
    ) {
      return {
        ...state,
        value: {
          ...state.value,
          current: current.substr(0, current.length - 1),
        },
      }
    }
    if (
      previous === null &&
      operator === null &&
      current.length < 2 &&
      current !== '0'
    ) {
      return {
        ...state,
        value: {
          ...state.value,
          current: '0',
        },
      }
    }
    if (current === null && operator !== null) {
      return {
        ...state,
        value: {
          ...state.value,
          operator: null,
          previous: null,
          current: previous,
        },
      }
    }
    if (current.length > 1) {
      return {
        ...state,
        value: {
          ...state.value,
          current: current.substr(0, current.length - 1),
        },
      }
    }
    if (current.length < 2) {
      return {
        ...state,
        value: {
          ...state.value,
          current: null,
        },
      }
    }
  }
}

export class ShowHistory {
  execute(history) {
    return history
  }
}
