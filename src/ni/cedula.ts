import { safeStr } from '../utils.js'

export const mask = '###-######-###A'

export function strip(value: string): string {
  return safeStr(value).replace(/-/g, '').replace(/[^A-Z0-9]/gi, '').toUpperCase()
}

export function validate(value: string): boolean {
  const s = strip(safeStr(value))
  if (s.length !== 14) return false
  return /^\d{13}[A-Z]$/.test(s)
}

export function format(value: string): string {
  const s = strip(value)
  if (s.length < 3) return s
  if (s.length < 9) return `${s.slice(0, 3)}-${s.slice(3)}`
  if (s.length < 13) return `${s.slice(0, 3)}-${s.slice(3, 9)}-${s.slice(9)}`
  return `${s.slice(0, 3)}-${s.slice(3, 9)}-${s.slice(9, 14)}`
}
