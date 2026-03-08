import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#-####-####'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 9) return false

  const weights = [2, 1, 2, 1, 2, 1, 2, 1]
  let sum = 0
  for (let i = 0; i < 8; i++) {
    let product = parseInt(d[i]) * weights[i]
    if (product >= 10) {
      product = Math.floor(product / 10) + (product % 10)
    }
    sum += product
  }
  const rem = sum % 10
  const expected = rem === 0 ? 0 : 10 - rem
  return expected === parseInt(d[8])
}

export function format(value: string): string {
  const d = strip(value).slice(0, 9)
  if (d.length <= 1) return d
  if (d.length <= 5) return `${d[0]}-${d.slice(1)}`
  return `${d[0]}-${d.slice(1, 5)}-${d.slice(5)}`
}
