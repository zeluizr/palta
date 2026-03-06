import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+56'
export const mask = '+56 # #### ####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('56') && d.length > 9) d = d.slice(2)
  return d
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international !== false

  if (d.length === 9) {
    if (d[0] === '9') {
      return intl
        ? `+56 9 ${d.slice(1, 5)} ${d.slice(5)}`
        : `9 ${d.slice(1, 5)} ${d.slice(5)}`
    }
    return intl
      ? `+56 ${d[0]} ${d.slice(1, 5)} ${d.slice(5)}`
      : `${d[0]} ${d.slice(1, 5)} ${d.slice(5)}`
  }
  return value
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  return d.length === 9
}
