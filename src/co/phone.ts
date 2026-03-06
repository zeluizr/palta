import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+57'
export const mask = '+57 ### ### ####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('57') && d.length > 10) d = d.slice(2)
  return d
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international !== false

  if (d.length === 10 && d[0] === '3') {
    return intl
      ? `+57 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
      : `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  }
  if (d.length === 8) {
    return intl
      ? `+57 ${d.slice(0, 1)} ${d.slice(1, 4)} ${d.slice(4)}`
      : `${d.slice(0, 1)} ${d.slice(1, 4)} ${d.slice(4)}`
  }
  return value
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  if (d.length === 10 && d[0] === '3') return true
  if (d.length === 8) return true
  return false
}
