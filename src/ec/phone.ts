import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+593'
export const mask = { mobile: '+593 9# ### ####', landline: '+593 # ### ####' }

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('593') && d.length > 9) d = d.slice(3)
  if (d.startsWith('0') && d.length > 8) d = d.slice(1)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  const d = stripPhone(safeStr(value))
  if (d.length === 9 && d[0] === '9') return true
  if (d.length === 8) return true
  return false
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(safeStr(value))
  const international = options?.international !== false
  if (d.length === 9 && d[0] === '9') {
    if (international) {
      return `+593 ${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5)}`
    }
    return `${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5)}`
  }
  if (d.length === 8) {
    if (international) {
      return `+593 ${d[0]} ${d.slice(1, 4)} ${d.slice(4)}`
    }
    return `${d[0]} ${d.slice(1, 4)} ${d.slice(4)}`
  }
  return value
}
