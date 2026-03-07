import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+52'
export const mask = '+52 XX XXXX XXXX'

export function strip(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('52') && d.length > 10) d = d.slice(2)
  return d
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 10
}

export function format(value: string): string {
  const d = strip(safeStr(value))
  if (d.length === 10) {
    return `+52 ${d.slice(0, 2)} ${d.slice(2, 6)} ${d.slice(6)}`
  }
  return value
}
