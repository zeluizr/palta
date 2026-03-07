import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+58'
export const mask = { landline: '+58 ### #######', mobile: '+58 4## ### ####' }

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('58') && d.length > 10) d = d.slice(2)
  if (d.startsWith('0') && d.length === 11) d = d.slice(1)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  const d = stripPhone(safeStr(value))
  if (d.length !== 10) return false
  return d[0] === '2' || d[0] === '4'
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(safeStr(value))
  if (d.length !== 10) return value
  const intl = options?.international !== false
  if (d[0] === '2') {
    // Landline
    return intl
      ? `+58 ${d.slice(0, 3)} ${d.slice(3)}`
      : `0${d.slice(0, 3)} ${d.slice(3)}`
  }
  if (d[0] === '4') {
    // Mobile
    return intl
      ? `+58 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
      : `0${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  }
  return value
}
