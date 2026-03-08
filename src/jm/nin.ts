import { onlyDigits, safeStr } from '../utils.js'

export const mask = '##########'

function stripNin(value: string): string {
  return onlyDigits(safeStr(value))
}

export function strip(value: string): string {
  return stripNin(value)
}

export function validate(value: string): boolean {
  const d = stripNin(value)
  return d.length === 10
}

export function format(value: string): string {
  const d = stripNin(value)
  if (d.length === 10) {
    return d
  }
  return value
}
