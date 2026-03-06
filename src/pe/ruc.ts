import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###########'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  return strip(value).slice(0, 11)
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 11) return false

  const prefix = d.slice(0, 2)
  if (!['10', '15', '16', '17', '20'].includes(prefix)) return false

  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]
  let sum = 0
  for (let i = 0; i < 10; i++) sum += parseInt(d[i]) * weights[i]
  const rem = 11 - (sum % 11)
  const check = rem >= 10 ? rem - 10 : rem
  return check === parseInt(d[10])
}
