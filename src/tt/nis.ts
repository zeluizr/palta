import { safeStr } from '../utils.js'

export const mask = 'AA######A'

export function strip(value: string): string {
  return safeStr(value).replace(/[^A-Z0-9]/gi, '').toUpperCase()
}

export function validate(value: string): boolean {
  const s = strip(safeStr(value))
  return /^[A-Z]{2}\d{6}[A-Z]$/.test(s)
}

export function format(value: string): string {
  return strip(value).slice(0, 9)
}
