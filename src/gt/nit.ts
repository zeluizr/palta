import { onlyDigits, safeStr } from '../utils.js'

export const mask = '########-#'

export function strip(value: string): string {
  const s = safeStr(value).trim().toUpperCase()
  if (s === 'CF') return 'CF'
  return onlyDigits(s)
}

export function validate(value: string): boolean {
  const s = safeStr(value).trim().toUpperCase()
  if (s === 'CF') return true
  const d = onlyDigits(s)
  if (d.length < 2) return false
  const body = d.slice(0, -1)
  const check = parseInt(d[d.length - 1])
  let sum = 0
  let weight = 2
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * weight
    weight++
  }
  const rem = sum % 11
  const expected = rem === 0 ? 0 : 11 - rem
  return expected === check
}

export function format(value: string): string {
  const s = safeStr(value).trim().toUpperCase()
  if (s === 'CF') return 'CF'
  const d = onlyDigits(s)
  if (d.length <= 1) return d
  return `${d.slice(0, -1)}-${d[d.length - 1]}`
}
