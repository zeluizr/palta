import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###.###.###-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 10) return false

  const weights = [71, 67, 59, 53, 47, 43, 41, 37, 29, 23, 19, 17, 13, 7, 3]
  const body = d.slice(0, 9)
  const check = parseInt(d[9])

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(body[i]) * weights[weights.length - 9 + i]
  }
  const rem = sum % 11
  const expected = rem === 0 ? 0 : rem === 1 ? 1 : 11 - rem
  return expected === check
}
