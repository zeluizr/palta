import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###-####'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 7)
  if (d.length <= 3) return d
  return `${d.slice(0, 3)}-${d.slice(3)}`
}

export function validate(value: string): boolean {
  const d = strip(value)
  return d.length === 7
}
