import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###-###-###'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 9
}

export function format(value: string): string {
  const d = strip(value)
  if (d.length === 9) {
    return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`
  }
  return safeStr(value)
}
