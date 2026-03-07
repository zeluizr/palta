import { safeStr } from '../utils.js'

export const symbol = '$'
export const code = 'MXN'
export const decimals = 2

export function format(value: number): string {
  const negative = value < 0
  const abs = Math.abs(value)
  const fixed = abs.toFixed(decimals)
  const [intPart, decPart] = fixed.split('.')
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const result = `${intFormatted}.${decPart}`
  const signed = negative ? `-${result}` : result
  return `$${signed}`
}

export function strip(value: string): string {
  return safeStr(value)
    .replace(/\$/g, '')
    .replace(/,/g, '')
    .trim()
}
