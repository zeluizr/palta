import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+1'

export const mask = '+1 (###) ###-####'

const validPrefixes = ['809', '829', '849']

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('1') && d.length === 11) d = d.slice(1)
  return d
}

export function strip(value: string): string {
  return stripPhone(value)
}

export function format(value: string): string {
  const d = stripPhone(value)
  if (d.length !== 10) return value
  const area = d.slice(0, 3)
  const num = `${d.slice(3, 6)}-${d.slice(6)}`
  return `+1 (${area}) ${num}`
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  if (d.length !== 10) return false
  const prefix = d.slice(0, 3)
  return validPrefixes.includes(prefix)
}
