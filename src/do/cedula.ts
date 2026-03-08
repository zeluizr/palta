import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###-#######-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 11)
  if (d.length <= 3) return d
  if (d.length <= 10) return `${d.slice(0, 3)}-${d.slice(3)}`
  return `${d.slice(0, 3)}-${d.slice(3, 10)}-${d.slice(10)}`
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 11) return false

  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
  let sum = 0
  for (let i = 0; i < 10; i++) {
    const product = parseInt(d[i]) * weights[i]
    sum += product >= 10 ? Math.floor(product / 10) + (product % 10) : product
  }
  const rem = sum % 10
  const expected = rem === 0 ? 0 : 10 - rem
  return expected === parseInt(d[10])
}
