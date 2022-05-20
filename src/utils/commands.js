import { includesOperation } from '@/utils/includesOperation'

export class AppendCharacter {
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
          ...state.value,
          current: current + this.characterToAppend,
        }
      }
      if (
        current === null &&
        this.characterToAppend === '.'
      ) {
        return {
          ...state.value,
          current: '0' + this.characterToAppend,
        }
      }
      if (current === '0') {
        return {
          ...state.value,
          current: this.characterToAppend,
        }
      }
      if (current === null) {
        return {
          ...state.value,
          current: this.characterToAppend,
        }
      }
      if (
        this.characterToAppend === '.' &&
        current !== null &&
        current.includes('.')
      ) {
        return { ...state.value }
      } else {
        return {
          ...state.value,
          current: current + this.characterToAppend,
        }
      }
    }
    if (this.type === 'operator') {
      if (previous === null && current === null) {
        return state.value
      }
      if (current === null) {
        return {
          ...state.value,
          operator: this.characterToAppend,
        }
      }
      if (previous === null) {
        return {
          ...state.value,
          previous: current,
          operator: this.characterToAppend,
          current: null,
        }
      }
      return {
        ...state.value,
      }
    }
    if (this.type === 'sign') {
      if (
        (current === 0 && previous === null) ||
        current === null
      ) {
        return state.value
      }
      return {
        ...state.value,
        current: -current,
      }
    }
  }
}

export class ClearEntryCommand {
  execute(state) {
    const { previous, operator, current } = state.value
    return {
      previous: null,
      operator: null,
      current: '0',
    }
  }
}

export class Calculate {
  constructor(operation) {
    this.operation = operation
  }

  execute(state) {
    const { previous, operator, current } = state.value
    switch (operator) {
      case '+':
        return {
          previous: null,
          operator: null,
          current: AddCommand.execute(previous, current),
        }
      case '-':
        return {
          previous: null,
          operator: null,
          current: SubtractCommand.execute(
            previous,
            current,
          ),
        }
      case '*':
        return {
          previous: null,
          operator: null,
          current: MultiplyCommand.execute(
            previous,
            current,
          ),
        }
      case '/':
        return {
          previous: null,
          operator: null,
          current: DivideCommand.execute(previous, current),
        }
      case '%':
        return {
          previous: null,
          operator: null,
          current: RemainderCommand.execute(
            previous,
            current,
          ),
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
  execute(currentHistory) {
    return []
  }
}

export class ClearAllCommand {
  constructor() {
    this.clearedEntry = new ClearEntryCommand()
    this.clearedHistory = new ClearHistoryCommand()
  }

  execute() {
    this.clearedEntry.execute()
    this.clearedHistory.execute()
  }
}

export class ShowHistory {
  execute(history) {
    return history
  }
}
