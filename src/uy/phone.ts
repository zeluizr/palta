import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+598'
export const mask = '+598 XX XXX XXX'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('598') && d.length > 8) d = d.slice(3)
  if (d.startsWith('0') && d.length === 9) d = d.slice(1)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  return d.length === 8
}

export function format(value: string): string {
  const d = stripPhone(value)
  if (d.length === 8) {
    return `+598 ${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5)}`
  }
  return value
}
