import { onlyDigits, safeStr } from '../utils.js'

export const mask = '####-####-######'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 14
}

export function format(value: string): string {
  const d = strip(value).slice(0, 14)
  if (d.length <= 4) return d
  if (d.length <= 8) return `${d.slice(0, 4)}-${d.slice(4)}`
  return `${d.slice(0, 4)}-${d.slice(4, 8)}-${d.slice(8)}`
}
