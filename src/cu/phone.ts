import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+53'
export const mask = '+53 # ### ####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('53') && d.length > 8) d = d.slice(2)
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
    return intl ? `+53 ${d[0]} ${d.slice(1, 4)} ${d.slice(4)}` : `${d[0]} ${d.slice(1, 4)} ${d.slice(4)}`
  }
  if (d.length === 7) {
    return intl ? `+53 ${d.slice(0, 2)} ${d.slice(2)}` : `${d.slice(0, 2)} ${d.slice(2)}`
  }
  return value
}
