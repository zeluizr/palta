import { onlyDigits, safeStr } from '../utils.js'

export const mask = '########-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 9
}

export function format(value: string): string {
  const d = strip(value).slice(0, 9)
  if (d.length <= 8) return d
  return `${d.slice(0, 8)}-${d[8]}`
}
