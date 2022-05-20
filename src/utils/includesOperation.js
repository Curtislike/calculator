export function includesOperation(str) {
  if (str.includes('+')) {
    return '+'
  }
  if (str.includes('-')) {
    return '-'
  }
  if (str.includes('*')) {
    return '*'
  }
  if (str.includes('/')) {
    return '/'
  }
  if (str.includes('%')) {
    return '%'
  } else {
    return false
  }
}
