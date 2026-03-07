import { onlyDigits, safeStr } from '../utils.js'

export const mask = '########-#'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length < 7 || d.length > 9) return false

  const body = d.slice(0, -1)
  const checkDigit = parseInt(d[d.length - 1])

  // Pesos: 2,3,4,5,6,7,8,... aplicados da direita para a esquerda
  const weights = [2, 3, 4, 5, 6, 7, 8, 9]
  let sum = 0
  for (let i = body.length - 1, j = 0; i >= 0; i--, j++) {
    sum += parseInt(body[i]) * weights[j % weights.length]
  }

  const rem = sum % 11
  const expected = rem === 0 ? 0 : rem === 1 ? 1 : 11 - rem
  return expected === checkDigit
}

export function format(value: string): string {
  const d = strip(value)
  if (d.length < 7 || d.length > 9) return d
  return `${d.slice(0, -1)}-${d[d.length - 1]}`
}
