import { onlyDigits, safeStr } from '../utils.js'

export const mask = '###########'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 11) return false
  const month = parseInt(d.slice(2, 4))
  const day = parseInt(d.slice(4, 6))
  return month >= 1 && month <= 12 && day >= 1 && day <= 31
}

export function format(value: string): string {
  return strip(value).slice(0, 11)
}
