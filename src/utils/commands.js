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
          value: {
            ...state.value,
            current: '0' + this.characterToAppend,
          },
        }
      }
      if (current === '0') {
        return {
          value: {
            ...state.value,
            current: this.characterToAppend,
          },
        }
      }
      if (current === null) {
        return {
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
        return { value: { ...state.value } }
      } else {
        return {
          value: {
            ...state.value,
            current: current + this.characterToAppend,
          },
        }
      }
    }
    if (this.type === 'operator') {
      if (previous === null && current === null) {
        return { value: { ...state.value } }
      }
      if (current === null) {
        return {
          value: {
            ...state.value,
            operator: this.characterToAppend,
          },
        }
      }
      if (previous === null) {
        return {
          value: {
            previous: current,
            operator: this.characterToAppend,
            current: null,
          },
        }
      }
      return {
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
        return { value: { ...state.value } }
      }
      return {
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
      return { value: { ...state.value } }
    }
    switch (operator) {
      case '+':
        return {
          value: {
            previous: null,
            operator: null,
            current: AddCommand.execute(previous, current),
          },
          history: [previous, operator, current],
        }
      case '-':
        return {
          value: {
            previous: null,
            operator: null,
            current: SubtractCommand.execute(
              previous,
              current,
            ),
          },
          history: [previous, operator, current],
        }
      case '*':
        return {
          value: {
            previous: null,
            operator: null,
            current: MultiplyCommand.execute(
              previous,
              current,
            ),
          },
          history: [previous, operator, current],
        }
      case '/':
        return {
          value: {
            previous: null,
            operator: null,
            current: DivideCommand.execute(
              previous,
              current,
            ),
          },
          history: [previous, operator, current],
        }
      case '%':
        return {
          value: {
            previous: null,
            operator: null,
            current: RemainderCommand.execute(
              previous,
              current,
            ),
          },
          history: [previous, operator, current],
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
      history: [],
    }
  }
}

export class ClearAllCommand {
  execute(state) {
    return {
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
        value: {
          ...state.value,
        },
      }
    if (
      previous === null &&
      operator === null &&
      current.length > 1
    ) {
      return {
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
        value: {
          ...state.value,
          current: '0',
        },
      }
    }
    if (current === null && operator !== null) {
      return {
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
        value: {
          ...state.value,
          current: current.substr(0, current.length - 1),
        },
      }
    }
    if (current.length < 2) {
      return {
        value: {
          ...state.value,
          current: null,
        },
      }
    }
  }
}

export class ShowHistory {
  execute(state) {
    return history
  }
}
