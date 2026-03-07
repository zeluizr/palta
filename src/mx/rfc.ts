import { safeStr } from '../utils.js'

const REGEX_FISICA = /^([A-ZÑ&]{4})(\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([A-Z0-9]{3})$/
const REGEX_MORAL = /^([A-ZÑ&]{3})(\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([A-Z0-9]{3})$/

export const mask = {
  fisica: 'LLLL YYMMDD XXX',
  moral: 'LLL YYMMDD XXX',
}

export function strip(value: string): string {
  return safeStr(value).replace(/[\s-]/g, '').toUpperCase()
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  if (d === 'XAXX010101000') return true
  return REGEX_FISICA.test(d) || REGEX_MORAL.test(d)
}

export function format(value: string): string {
  const d = strip(safeStr(value))
  if (REGEX_FISICA.test(d)) {
    return `${d.slice(0, 4)} ${d.slice(4, 10)} ${d.slice(10)}`
  }
  if (REGEX_MORAL.test(d)) {
    return `${d.slice(0, 3)} ${d.slice(3, 9)} ${d.slice(9)}`
  }
  return d
}
