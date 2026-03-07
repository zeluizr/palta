import { safeStr } from '../utils.js'

export const mask = 'X-XX.XXX.XXX'

export function strip(value: string): string {
  const s = safeStr(value).toUpperCase()
  // Extract prefix letter (V or E) and then digits
  const match = s.match(/^([VE])[^0-9]*([0-9]+)$/)
  if (match) return match[1] + match[2].replace(/\D/g, '')
  // Try without prefix prefix — if it starts with V or E followed by digits after removing separators
  const stripped = s.replace(/[.\-\s]/g, '')
  return stripped
}

export function validate(value: string): boolean {
  const s = strip(safeStr(value))
  if (s.length < 7) return false
  const prefix = s[0]
  if (prefix !== 'V' && prefix !== 'E') return false
  const digits = s.slice(1)
  if (!/^\d{6,8}$/.test(digits)) return false
  return true
}

export function format(value: string): string {
  const s = strip(safeStr(value))
  if (s.length < 2) return value
  const prefix = s[0]
  if (prefix !== 'V' && prefix !== 'E') return value
  const digits = s.slice(1)
  if (digits.length < 6 || digits.length > 8) return value

  const len = digits.length
  // Group digits from right in groups of 3
  // split = len - 6, so the leftmost group has len-6 digits (1 or 2)
  const split = len - 6
  const part1 = digits.slice(0, split)
  const part2 = digits.slice(split, split + 3)
  const part3 = digits.slice(split + 3, split + 6)
  const rest = digits.slice(split + 6)

  const formatted = part1.length > 0
    ? `${part1}.${part2}.${part3}`
    : `${part2}.${part3}`

  return `${prefix}-${formatted}`
}
