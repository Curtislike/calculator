import {
  checkBrackets,
  splitStr,
  checkIfPrevNumberContainsDot,
  getLastNumberFromString,
  cutLastNumberFromString,
} from './transformString'

export class AppendCharacterCommand {
  constructor(characterToAppend, type) {
    this.characterToAppend = characterToAppend
    this.type = type
  }

  execute(state) {
    const current = state.value
    if (this.type === 'digit') {
      if (
        current === '0' &&
        this.characterToAppend === '.'
      ) {
        return {
          value: current + this.characterToAppend,
        }
      }
      if (current === '0') {
        return {
          value: this.characterToAppend,
        }
      }
      if (
        this.characterToAppend === '.' &&
        checkIfPrevNumberContainsDot(current)
      ) {
        return { value: current }
      }
      if (
        this.characterToAppend === '.' &&
        isNaN(current[current.length - 1])
      ) {
        return {
          value: current + '0' + this.characterToAppend,
        }
      } else {
        return {
          value: current + this.characterToAppend,
        }
      }
    }
    if (this.type === 'operator') {
      if (
        current[current.length - 1] === '+' ||
        current[current.length - 1] === '-' ||
        current[current.length - 1] === '*' ||
        current[current.length - 1] === '/' ||
        current[current.length - 1] === '%' ||
        current[current.length - 1] === '.'
      ) {
        const currentWithoutLastOperator = current.slice(
          0,
          -1,
        )
        return {
          value:
            currentWithoutLastOperator +
            this.characterToAppend,
        }
      }
      if (current === '') {
        return {
          value: '0' + this.characterToAppend,
        }
      }
      if (
        current[current.length - 1] === '(' &&
        this.characterToAppend !== '-'
      ) {
        return {
          value: current + '0' + this.characterToAppend,
        }
      }
      return {
        value: current + this.characterToAppend,
      }
    }
    if (this.type === 'sign') {
      const lastNum = getLastNumberFromString(current)
      const currentWithoutLastNumber = cutLastNumberFromString(
        current,
      )
      if (current === '0') {
        return { value: current }
      }
      if (current[current.length - 1] === '-') {
        let currentWithotLastSymbol = current.slice(0, -1)
        return { value: currentWithotLastSymbol + '+' }
      }
      if (isNaN(current[current.length - 1])) {
        return { value: current }
      }
      if (
        currentWithoutLastNumber[
          currentWithoutLastNumber.length - 1
        ] === '-'
      ) {
        let currentWithoutLastOperator = currentWithoutLastNumber.slice(
          0,
          -1,
        )
        return {
          value: currentWithoutLastOperator + '+' + lastNum,
        }
      }
      if (
        lastNum &&
        currentWithoutLastNumber[
          currentWithoutLastNumber.length - 1
        ] !== '-'
      ) {
        console.log(currentWithoutLastNumber)
        console.log(lastNum)
        return {
          value: currentWithoutLastNumber + -lastNum,
        }
      }
      if (!isNaN(current)) {
        return {
          value: -current,
        }
      } else {
        return {
          value: current,
        }
      }
    }
    if (this.type === 'bracket') {
      if (current === '0') {
        return {
          value: this.characterToAppend,
        }
      }
      if (
        this.characterToAppend === ')' &&
        (!current.includes('(') ||
          current[current.length - 1] === '+' ||
          current[current.length - 1] === '-' ||
          current[current.length - 1] === '*' ||
          current[current.length - 1] === '/' ||
          current[current.length - 1] === '%' ||
          current[current.length - 1] === '.')
      ) {
        return {
          value: current,
        }
      }
      if (
        this.characterToAppend === '(' &&
        !isNaN(current[current.length - 1])
      ) {
        return {
          value: current,
        }
      }
      return {
        value: current + this.characterToAppend,
      }
    }
  }
}

export class CalculateCommand {
  constructor(operation) {
    this.operation = operation
  }

  execute(state) {
    const current = state.value
    if (current.length < 2) {
      return { value: current }
    }
    try {
      if (current.search(/[^0-9*/+-.%()]/im) !== -1) {
        return
      }
      let result = eval(current)
      if (result === Infinity || result === -Infinity) {
        alert('division by zero is impossible')
        return {
          value: current,
        }
      } else {
        if (Number.isInteger(result)) {
          return {
            value: result.toString(),
            history: [current],
          }
        } else {
          return {
            value: result.toFixed(3).toString(),
            history: [current],
          }
        }
      }
    } catch {
      alert('Something went wrong. Check your expression')
      return {
        value: current,
      }
    }
  }
}

export class ClearEntryCommand {
  execute(state) {
    const current = state.value
    return {
      value: '0',
    }
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
      value: '0',
      history: [],
    }
  }
}

export class BackspaceCommand {
  execute(state) {
    const current = state.value
    if (current.length < 2) {
      return {
        value: '0',
      }
    }

    return {
      value: current.slice(0, -1),
    }
  }
}
