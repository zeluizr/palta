import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+1'
export const mask = '+1 (###) ###-####'

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('1') && d.length === 11) d = d.slice(1)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  if (d.length !== 10) return false
  const area = d.slice(0, 3)
  return area === '787' || area === '939'
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  if (d.length === 10) {
    const intl = options?.international !== false
    if (intl) return `+1 (${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
  }
  return safeStr(value)
}
