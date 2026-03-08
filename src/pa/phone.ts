import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+507'
export const mask = '+507 #### ####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('507') && d.length > 8) d = d.slice(3)
  if (d.startsWith('00507') && d.length > 8) d = d.slice(5)
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
    if (intl) {
      return `+507 ${d.slice(0, 4)} ${d.slice(4)}`
    }
    return `${d.slice(0, 4)} ${d.slice(4)}`
  }

  if (d.length === 7) {
    if (intl) {
      return `+507 ${d.slice(0, 3)} ${d.slice(3)}`
    }
    return `${d.slice(0, 3)} ${d.slice(3)}`
  }

  return value
}
