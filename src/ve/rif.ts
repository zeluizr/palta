import { safeStr } from '../utils.js'

export const mask = 'X-########-#'

const PREFIX_CODES: Record<string, number> = { J: 0, V: 1, E: 2, G: 3, P: 4 }
const WEIGHTS = [4, 3, 2, 7, 6, 5, 4, 3, 2]

export function strip(value: string): string {
  const s = safeStr(value).toUpperCase().replace(/[\s-]/g, '')
  return s
}

export function validate(value: string): boolean {
  const s = strip(safeStr(value))
  if (s.length !== 10) return false
  const prefix = s[0]
  if (!(prefix in PREFIX_CODES)) return false
  const body = s.slice(1, 9)
  const checkChar = s[9]
  if (!/^\d{8}$/.test(body)) return false
  if (!/^\d$/.test(checkChar)) return false

  const digits = [PREFIX_CODES[prefix], ...body.split('').map(Number)]
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * WEIGHTS[i]
  }
  const rem = sum % 11
  const expected = rem === 0 ? 0 : rem === 1 ? 1 : 11 - rem
  return expected === parseInt(checkChar)
}

export function format(value: string): string {
  const s = strip(safeStr(value))
  if (s.length < 1) return value
  const prefix = s[0]
  const rest = s.slice(1)
  if (rest.length < 9) return s
  const body = rest.slice(0, 8)
  const check = rest.slice(8, 9)
  return `${prefix}-${body}-${check}`
}
