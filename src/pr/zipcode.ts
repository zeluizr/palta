import { onlyDigits, padLeft, safeStr } from '../utils.js'

export const mask = '#####'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(value)
  if (d.length !== 5) return false
  const prefix = d.slice(0, 3)
  return prefix >= '006' && prefix <= '009'
}

export function format(value: string): string {
  return padLeft(strip(value), 5, '0').slice(0, 5)
}
