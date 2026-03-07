import { onlyDigits, safeStr } from '../utils.js'
import { validate as validateCi } from './ci.js'

export const mask = '#############'

const WEIGHTS_PRIVATE = [4, 3, 2, 7, 6, 5, 4, 3, 2]
const WEIGHTS_PUBLIC = [3, 2, 7, 6, 5, 4, 3, 2]

function mod11Check(digits: number[], weights: number[], checkPos: number): boolean {
  let sum = 0
  for (let i = 0; i < weights.length; i++) {
    sum += digits[i] * weights[i]
  }
  const rem = sum % 11
  const expected = rem === 0 ? 0 : 11 - rem
  return digits[checkPos] === expected
}

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 13) return false
  const digits = d.split('').map(Number)
  const thirdDigit = digits[2]

  if (thirdDigit >= 0 && thirdDigit <= 5) {
    // Persona natural: first 10 digits must be valid CI, suffix must be '001'
    if (d.slice(10) !== '001') return false
    return validateCi(d.slice(0, 10))
  }

  if (thirdDigit === 9) {
    // Sociedad privada: mod-11 on digits 0-8, check at position 9, suffix '001'
    if (d.slice(10) !== '001') return false
    return mod11Check(digits, WEIGHTS_PRIVATE, 9)
  }

  if (thirdDigit === 6) {
    // Entidad pública: mod-11 on digits 0-7, check at position 8, suffix '0001'
    if (d.slice(9) !== '0001') return false
    return mod11Check(digits, WEIGHTS_PUBLIC, 8)
  }

  return false
}

export function format(value: string): string {
  const d = strip(safeStr(value))
  return d.slice(0, 13)
}
