import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#############'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 13
}

export function format(value: string): string {
  return strip(value)
}
