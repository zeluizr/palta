import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+51'
export const mask = '+51 ### ### ###'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('51') && d.length > 9) d = d.slice(2)
  return d
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international !== false

  if (d.length === 9 && d[0] === '9') {
    return intl
      ? `+51 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
      : `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  }
  if (d.length === 7) {
    return intl
      ? `+51 1 ${d.slice(0, 3)} ${d.slice(3)}`
      : `1 ${d.slice(0, 3)} ${d.slice(3)}`
  }
  return value
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  if (d.length === 9 && d[0] === '9') return true
  if (d.length === 7) return true
  return false
}
