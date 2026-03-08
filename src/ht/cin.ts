import { safeStr } from '../utils.js'

export const mask = 'XXXXXXXXXXXX'

export function strip(value: string): string {
  return safeStr(value).replace(/[^A-Z0-9]/gi, '').toUpperCase()
}

export function validate(value: string): boolean {
  return strip(safeStr(value)).length === 12
}

export function format(value: string): string {
  return strip(value).slice(0, 12)
}
