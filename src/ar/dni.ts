import { onlyDigits, safeStr } from '../utils.js'

export const mask = '##.###.###'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 8)
  if (d.length <= 2) return d
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`
  if (d.length <= 7) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}`
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length >= 7 && d.length <= 8
}
