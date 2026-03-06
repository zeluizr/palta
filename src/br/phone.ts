import { onlyDigits, safeStr } from '../utils.js'

export const countryCode = '+55'

export const mask = {
  mobile: '(##) #####-####',
  landline: '(##) ####-####',
}

function stripPhone(value: string): string {
  let d = onlyDigits(safeStr(value))
  if (d.startsWith('55') && d.length > 11) d = d.slice(2)
  return d
}

export function format(value: string, options?: { international?: boolean }): string {
  const d = stripPhone(value)
  const intl = options?.international === true

  if (d.length === 11) {
    const area = d.slice(0, 2)
    const num = `${d.slice(2, 7)}-${d.slice(7)}`
    return intl ? `+55 (${area}) ${num}` : `(${area}) ${num}`
  }
  if (d.length === 10) {
    const area = d.slice(0, 2)
    const num = `${d.slice(2, 6)}-${d.slice(6)}`
    return intl ? `+55 (${area}) ${num}` : `(${area}) ${num}`
  }
  return value
}

export function validate(value: string): boolean {
  const d = stripPhone(value)
  if (d.length === 11) return d[2] === '9'
  if (d.length === 10) return true
  return false
}
