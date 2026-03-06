import { onlyDigits, safeStr } from '../utils.js'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 14)
  if (d.length <= 2) return d
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12, 14)}`
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 14) return false
  if (/^(\d)\1{13}$/.test(d)) return false

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  let sum = 0
  for (let i = 0; i < 12; i++) sum += parseInt(d[i]) * weights1[i]
  let rem = sum % 11
  const d1 = rem < 2 ? 0 : 11 - rem
  if (d1 !== parseInt(d[12])) return false

  sum = 0
  for (let i = 0; i < 13; i++) sum += parseInt(d[i]) * weights2[i]
  rem = sum % 11
  const d2 = rem < 2 ? 0 : 11 - rem
  return d2 === parseInt(d[13])
}

export const mask = '##.###.###/####-##'
