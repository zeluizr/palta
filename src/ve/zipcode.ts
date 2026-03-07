import { onlyDigits, padLeft, safeStr } from '../utils.js'

export const mask = 'XXXX'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 4
}

export function format(value: string): string {
  const d = strip(safeStr(value))
  return padLeft(d, 4, '0').slice(0, 4)
}
