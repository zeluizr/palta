import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#############'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 13
}

export function format(value: string): string {
  const d = strip(value).slice(0, 13)
  return d
}
