import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###-#####-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 9)
  if (d.length <= 3) return d
  if (d.length <= 8) return `${d.slice(0, 3)}-${d.slice(3)}`
  return `${d.slice(0, 3)}-${d.slice(3, 8)}-${d.slice(8)}`
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 9
}
