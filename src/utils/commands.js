function checkBrackets(str) {
  let depth = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      depth++
    } else if (str[i] == ')') {
      depth--
    }
    if (depth < 0) return false
  }
  if (depth > 0) return false
  return true
}

function splitStr(str) {
  let arr = []
  let value = ''
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === '+' ||
      str[i] === '-' ||
      str[i] === '*' ||
      str[i] === '/' ||
      str[i] === '%' ||
      str[i] === '(' ||
      str[i] === ')'
    ) {
      arr.push(str[i])
      continue
    }
    if (!isNaN(str[i])) {
      if (isNaN(str[i - 1]) && isNaN(str[i + 1])) {
        arr.push(str[i])
        continue
      }
      if (!isNaN(str[i + 1])) {
        value = value + str[i]
        continue
      }
      if (!isNaN(str[i - 1]) && isNaN(str[i + 1])) {
        value = value + str[i]
        arr.push(value)
        value = ''
        continue
      }
    }
  }
  return arr
}

function checkIfPrevNumberContainsDot(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '.') {
      return true
    }
    if (!isNaN(str[i])) {
      continue
    }
    if (isNaN(str[i])) {
      return false
    }
  }
  return false
}

function getLastNumberFromString(str) {
  let value
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str[i]) && !isNaN(str[i - 1])) {
      continue
    }
    if (!isNaN(str[i]) && isNaN(str[i - 1])) {
      value = str.slice(i, str.length)
      return value
    }
  }
}

function cutLastNumberFromString(str) {
  let value
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str[i]) && !isNaN(str[i - 1])) {
      continue
    }
    if (!isNaN(str[i]) && isNaN(str[i - 1])) {
      value = str.slice(0, i)
      return value
    }
  }
}

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
      let result = eval(current)
      if (result === Infinity) {
        alert('division by zero is impossible')
        return {
          value: current,
        }
      } else {
        if (Number.isInteger(result)) {
          return {
            value: result,
            history: [current],
          }
        } else {
          return {
            value: result.toFixed(3),
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
