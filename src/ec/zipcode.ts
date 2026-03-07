import { onlyDigits, padLeft, safeStr } from '../utils.js'

export const mask = 'XXXXXX'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 6
}

export function format(value: string): string {
  return padLeft(strip(safeStr(value)), 6, '0')
}
