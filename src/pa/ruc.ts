import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#-###-######'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 10 || d.length === 8 || d.length === 9
}

export function format(value: string): string {
  const d = strip(value)
  if (d.length === 10) {
    return `${d[0]}-${d.slice(1, 4)}-${d.slice(4)}`
  }
  if (d.length === 8) {
    return `${d[0]}-${d.slice(1, 4)}-${d.slice(4, 8)}`
  }
  return d
}
