import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+509'
export const mask = '+509 #### ####'

export function strip(value: string): string {
  const d = onlyDigits(safeStr(value))
  return d.startsWith('509') ? d.slice(3) : d
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 8
}

export function format(value: string): string {
  const d = strip(value).slice(0, 8)
  if (d.length <= 4) return d.length > 0 ? `${countryCode} ${d}` : ''
  return `${countryCode} ${d.slice(0, 4)} ${d.slice(4)}`
}
