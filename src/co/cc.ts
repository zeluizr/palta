import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#.###.###.###'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function format(value: string): string {
  const d = strip(value).slice(0, 10)
  if (d.length <= 1) return d
  const reversed = d.split('').reverse().join('')
  const groups: string[] = []
  for (let i = 0; i < reversed.length; i += 3) {
    groups.push(reversed.slice(i, i + 3).split('').reverse().join(''))
  }
  return groups.reverse().join('.')
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length >= 6 && d.length <= 10
}
