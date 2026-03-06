import { onlyDigits, safeStr } from '../utils.js'

export const mask = '##-########-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 10) return `${d.slice(0, 2)}-${d.slice(2)}`
  return `${d.slice(0, 2)}-${d.slice(2, 10)}-${d.slice(10)}`
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 11) return false

  const validPrefixes = ['20', '23', '24', '27', '30', '33', '34']
  if (!validPrefixes.includes(d.slice(0, 2))) return false

  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]
  let sum = 0
  for (let i = 0; i < 10; i++) sum += parseInt(d[i]) * weights[i]
  const rem = 11 - (sum % 11)
  const check = rem === 11 ? 0 : rem === 10 ? 9 : rem
  return check === parseInt(d[10])
}
