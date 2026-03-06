import { safeStr } from '../utils.js'

export const mask = 'A####AAA'

export function strip(value: string): string {
  return safeStr(value).replace(/\s/g, '').toUpperCase()
}

export function format(value: string): string {
  return strip(value)
}

export function validate(value: string): boolean {
  const s = strip(safeStr(value))
  if (/^\d{4}$/.test(s)) return true
  if (/^[A-Z]\d{4}[A-Z]{3}$/.test(s)) return true
  return false
}
