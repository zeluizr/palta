import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+58'
export const mask = { landline: '+58 XXX XXXXXXX', mobile: '+58 4XX XXX XXXX' }

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

export function format(value: string): string {
  const d = stripPhone(safeStr(value))
  if (d.length !== 10) return value
  if (d[0] === '2') {
    // Landline: +58 XXX XXXXXXX
    return `+58 ${d.slice(0, 3)} ${d.slice(3)}`
  }
  if (d[0] === '4') {
    // Mobile: +58 4XX XXX XXXX
    return `+58 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  }
  return value
}
