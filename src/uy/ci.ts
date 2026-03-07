import { onlyDigits, safeStr } from '../utils.js'

export const mask = 'X.XXX.XXX-X'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 8) return false

  const weights = [2, 9, 8, 7, 6, 3, 4]
  let sum = 0
  for (let i = 0; i < 7; i++) {
    sum += parseInt(d[i]) * weights[i]
  }
  const rem = sum % 10
  const expected = rem === 0 ? 0 : 10 - rem
  return expected === parseInt(d[7])
}

export function format(value: string): string {
  const d = strip(value).slice(0, 8)
  if (d.length <= 1) return d
  if (d.length <= 4) return `${d[0]}.${d.slice(1)}`
  if (d.length <= 7) return `${d[0]}.${d.slice(1, 4)}.${d.slice(4)}`
  return `${d[0]}.${d.slice(1, 4)}.${d.slice(4, 7)}-${d[7]}`
}
