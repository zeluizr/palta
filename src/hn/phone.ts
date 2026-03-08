import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+504'
export const mask = '+504 ####-####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('504') && d.length > 8) d = d.slice(3)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  return stripPhone(value).length === 8
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  if (d.length === 8) {
    const intl = options?.international !== false
    if (intl) return `+504 ${d.slice(0, 4)}-${d.slice(4)}`
    return `${d.slice(0, 4)}-${d.slice(4)}`
  }
  return value
}
