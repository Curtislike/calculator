export function checkBrackets(str) {
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

export function splitStr(str) {
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

export function checkIfPrevNumberContainsDot(str) {
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

export function getLastNumberFromString(str) {
  let value
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str[i]) && !isNaN(str[i - 1])) {
      continue
    }
    if (
      !isNaN(str[i]) &&
      isNaN(str[i - 1]) &&
      str[i - 1] !== '.'
    ) {
      value = str.slice(i, str.length)
      return value
    }
  }
}

export function cutLastNumberFromString(str) {
  let value
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str[i]) && !isNaN(str[i - 1])) {
      continue
    }
    if (
      !isNaN(str[i]) &&
      isNaN(str[i - 1]) &&
      str[i - 1] !== '.'
    ) {
      value = str.slice(0, i)
      return value
    }
  }
}
