import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+591'
export const mask = '+591 # ### ####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('00591') && d.length > 7) d = d.slice(5)
  else if (d.startsWith('591') && d.length > 7) d = d.slice(3)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  return d.length === 7 || d.length === 8
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international !== false

  if (d.length === 8) {
    // Celular: 8 dígitos
    if (intl) {
      return `+591 ${d.slice(0, 1)} ${d.slice(1, 4)} ${d.slice(4)}`
    }
    return `${d.slice(0, 1)} ${d.slice(1, 4)} ${d.slice(4)}`
  } else if (d.length === 7) {
    // Fixo: 7 dígitos
    if (intl) {
      return `+591 ${d.slice(0, 1)} ${d.slice(1, 4)} ${d.slice(4)}`
    }
    return `${d.slice(0, 1)} ${d.slice(1, 4)} ${d.slice(4)}`
  }

  return value
}
