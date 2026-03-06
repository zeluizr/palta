import { onlyDigitsAndK, safeStr } from '../utils.js'

export const mask = '##.###.###-X'

export function strip(value: string): string {
  return onlyDigitsAndK(safeStr(value))
}

export function getCheckDigit(body: string): string {
  const digits = onlyDigitsAndK(body).replace(/[kK]/g, '')
  let sum = 0
  const weights = [2, 3, 4, 5, 6, 7]
  let wi = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    sum += parseInt(digits[i]) * weights[wi % 6]
    wi++
  }
  const rem = 11 - (sum % 11)
  if (rem === 11) return '0'
  if (rem === 10) return 'K'
  return String(rem)
}

export function format(value: string): string {
  const raw = strip(value)
  if (raw.length < 2) return raw
  const body = raw.slice(0, -1)
  const check = raw.slice(-1)
  const n = parseInt(body)
  if (isNaN(n)) return value
  const parts = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${parts}-${check.toUpperCase()}`
}

export function validate(value: string): boolean {
  const raw = strip(safeStr(value))
  if (raw.length < 2) return false
  const body = raw.slice(0, -1)
  const check = raw.slice(-1).toUpperCase()
  if (!/^\d+$/.test(body)) return false
  return getCheckDigit(body) === check
}
