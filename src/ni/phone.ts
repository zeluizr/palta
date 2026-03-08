import { onlyDigits, safeStr } from '../utils.js'

export const mask = '+505 #### ####'
export const code = '+505'

export function strip(value: string): string {
  return onlyDigits(safeStr(value).replace(/^\+?505/, ''))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length === 8
}

export function format(value: string): string {
  const d = strip(value).slice(0, 8)
  if (d.length < 4) return d
  return `+505 ${d.slice(0, 4)} ${d.slice(4)}`
}
