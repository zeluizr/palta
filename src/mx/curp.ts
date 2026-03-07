import { safeStr } from '../utils.js'

const CURP_REGEX = /^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TL|TS|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]\d$/
const CURP_CHARS = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

export const mask = 'LLLLYYMMDDHLLEENN#'

export function strip(value: string): string {
  return safeStr(value).replace(/\s/g, '').toUpperCase()
}

function checkDigit(curp: string): number {
  let sum = 0
  for (let i = 0; i < 17; i++) {
    const idx = CURP_CHARS.indexOf(curp[i])
    sum += idx * (18 - i)
  }
  const rem = sum % 10
  return rem === 0 ? 0 : 10 - rem
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d.length !== 18) return false
  if (!CURP_REGEX.test(d)) return false
  const expected = checkDigit(d)
  return parseInt(d[17]) === expected
}

export function format(value: string): string {
  return strip(safeStr(value))
}
