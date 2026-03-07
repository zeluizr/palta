import { onlyDigits, safeStr } from '../utils.js'

export const mask = 'XXXXXXXXXX'

const VALID_PROVINCES = new Set([
  '01','02','03','04','05','06','07','08','09','10',
  '11','12','13','14','15','16','17','18','19','20',
  '21','22','23','24','30',
])

function checkDigit(digits: number[]): number {
  const weights = [2, 1, 2, 1, 2, 1, 2, 1, 2]
  let sum = 0
  for (let i = 0; i < 9; i++) {
    let p = digits[i] * weights[i]
    if (p >= 10) p -= 9
    sum += p
  }
  const rem = sum % 10
  return rem === 0 ? 0 : 10 - rem
}

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 10) return false
  const province = d.slice(0, 2)
  if (!VALID_PROVINCES.has(province)) return false
  const thirdDigit = parseInt(d[2])
  if (thirdDigit > 5) return false
  const digits = d.split('').map(Number)
  const expected = checkDigit(digits)
  return digits[9] === expected
}

export function format(value: string): string {
  return strip(safeStr(value))
}
