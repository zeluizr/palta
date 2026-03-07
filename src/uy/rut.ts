import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###########-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 12) return false

  const weights = [2, 9, 8, 7, 6, 3, 4, 2, 9, 8, 7]
  let sum = 0
  for (let i = 0; i < 11; i++) {
    sum += parseInt(d[i]) * weights[i]
  }
  const rem = sum % 10
  const expected = rem === 0 ? 0 : 10 - rem
  return expected === parseInt(d[11])
}

export function format(value: string): string {
  const d = strip(value).slice(0, 12)
  if (d.length <= 11) return d
  return `${d.slice(0, 11)}-${d[11]}`
}
