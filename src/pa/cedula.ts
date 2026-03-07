import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#-###-####'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 8
}

export function format(value: string): string {
  const d = strip(value).slice(0, 8)
  if (d.length <= 1) return d
  if (d.length <= 4) return `${d[0]}-${d.slice(1)}`
  return `${d[0]}-${d.slice(1, 4)}-${d.slice(4)}`
}
