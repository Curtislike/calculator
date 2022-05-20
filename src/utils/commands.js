import { includesOperation } from '@/utils/includesOperation'

export class AppendCharacter {
  constructor(characterToAppend) {
    this.characterToAppend = characterToAppend
  }

  execute(currentValue) {
    if (currentValue === 0 && this.characterToAppend !== '.') {
      if(this.characterToAppend === '.' && )
      return this.characterToAppend
    } else {
      return currentValue + this.characterToAppend
    }
  }
}

export class Calculate {
  constructor(value) {}

  execute(expression) {
    if (includesOperation(expression)) {
      const operator = includesOperation(expression)
      const arrayExpression = expression.split(operator)
      const [currentValue, changingValue] = arrayExpression
      if (isNaN(currentValue) || isNaN(changingValue)) {
        return expression
      } else {
        switch (operator) {
          case '+':
            return AddCommand.execute(
              currentValue,
              changingValue,
            )
          case '-':
            return SubtractCommand.execute(
              currentValue,
              changingValue,
            )
          case '*':
            return MultiplyCommand.execute(
              currentValue,
              changingValue,
            )
          case '/':
            return DivideCommand.execute(
              currentValue,
              changingValue,
            )
        }
      }
    } else {
      return expression
    }
  }
}

export class AddCommand {
  static execute(currentValue, valueToAdd) {
    console.log(
      currentValue,
      'curr',
      valueToAdd,
      'valuetoadd',
    )
    return +currentValue + +valueToAdd
  }
}

export class SubtractCommand {
  static execute(currentValue, valueToSubtract) {
    return currentValue - valueToSubtract
  }
}

export class MultiplyCommand {
  static execute(currentValue, valueToMultiply) {
    if (Number.isInteger(currentValue * valueToMultiply)) {
      return currentValue * valueToMultiply
    } else {
      return (currentValue * valueToMultiply).toFixed(3)
    }
  }
}

export class DivideCommand {
  static execute(currentValue, valueToDivide) {
    if (currentValue % valueToDivide) {
      return (currentValue / valueToDivide).toFixed(3)
    } else {
      return currentValue / valueToDivide
    }
  }
}

export class ChangeSignCommand {
  execute(currentValue) {
    if (isNaN(currentValue)) {
      return currentValue
    } else {
      return -currentValue
    }
  }
}

export class ClearEntryCommand {
  execute(currentValue) {
    return 0
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
