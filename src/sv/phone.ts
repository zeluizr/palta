import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+503'
export const mask = '+503 ####-####'

export function strip(value: string): string {
  return onlyDigits(safeStr(value).replace(/^\+?503/, ''))
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 8
}

export function format(value: string): string {
  const d = strip(value).slice(0, 8)
  if (d.length <= 4) return d ? `+503 ${d}` : ''
  return `+503 ${d.slice(0, 4)}-${d.slice(4)}`
}
