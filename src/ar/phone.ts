import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+54'
export const mask = '+54 9 ## ####-####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('54') && d.length > 10) d = d.slice(2)
  return d
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international !== false

  if (d.length === 11 && d[0] === '9') {
    const area = d.slice(1, 3)
    const num = `${d.slice(3, 7)}-${d.slice(7)}`
    return intl ? `+54 9 ${area} ${num}` : `9 ${area} ${num}`
  }
  if (d.length === 10) {
    const area = d.slice(0, 2)
    const num = `${d.slice(2, 6)}-${d.slice(6)}`
    return intl ? `+54 ${area} ${num}` : `${area} ${num}`
  }
  return value
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  if (d.length === 11 && d[0] === '9') return true
  if (d.length === 10) return true
  return false
}
