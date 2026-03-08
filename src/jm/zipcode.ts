import { onlyDigits, safeStr } from '../utils.js'

export const mask = '########'

function stripZipcode(value: string): string {
  return onlyDigits(safeStr(value))
}

export function strip(value: string): string {
  return stripZipcode(value)
}

export function validate(value: string): boolean {
  const d = stripZipcode(value)
  return d.length >= 4 && d.length <= 8
}

export function format(value: string): string {
  const d = stripZipcode(value)
  if (d.length >= 4 && d.length <= 8) {
    return d
  }
  return value
}
