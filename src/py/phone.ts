import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+595'
export const mask = '+595 ### ### ###'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('00595') && d.length > 8) d = d.slice(5)
  else if (d.startsWith('595') && d.length > 8) d = d.slice(3)
  if (d.startsWith('0') && (d.length === 8 || d.length === 9)) d = d.slice(1)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  return d.length === 10
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international !== false

  if (d.length === 10) {
    // Paraguay: ### ### ####
    if (intl) {
      return `+595 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
    }
    return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  }

  return value
}
