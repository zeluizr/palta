import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###-###-###'

function stripTrn(value: string): string {
  return onlyDigits(safeStr(value))
}

export function strip(value: string): string {
  return stripTrn(value)
}

export function validate(value: string): boolean {
  const d = stripTrn(value)
  return d.length === 9
}

export function format(value: string): string {
  const d = stripTrn(value)
  if (d.length === 9) {
    return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`
  }
  return value
}
