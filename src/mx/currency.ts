import { safeStr } from '../utils.js'

export const symbol = '$'
export const code = 'MXN'
export const decimals = 2

export function format(value: number, options?: { decimals?: number; symbol?: boolean }): string {
  if (typeof value !== 'number' || !isFinite(value)) return ''
  const dec = options?.decimals ?? decimals
  const showSymbol = options?.symbol !== false
  const negative = value < 0
  const abs = Math.abs(value)
  const fixed = abs.toFixed(dec)
  const [intPart, decPart] = fixed.split('.')
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const result = dec > 0 ? `${intFormatted}.${decPart}` : intFormatted
  const signed = negative ? `-${result}` : result
  return showSymbol ? `$${signed}` : signed
}

export function parse(value: string): number {
  const n = parseFloat(strip(value))
  return isNaN(n) ? 0 : n
}

export function strip(value: string): string {
  return safeStr(value)
    .replace(/\$/g, '')
    .replace(/,/g, '')
    .trim()
}
