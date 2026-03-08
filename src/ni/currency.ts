import { safeStr } from '../utils.js'

export const symbol = 'C$'
export const code = 'NIO'
export const decimals = 2

export function format(value: number, options?: { decimals?: number; symbol?: boolean }): string {
  const dec = options?.decimals ?? decimals
  const showSymbol = options?.symbol !== false
  const negative = value < 0
  const abs = Math.abs(value)
  const fixed = abs.toFixed(dec)
  const [intPart, decPart] = fixed.split('.')
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const result = dec > 0 ? `${intFormatted}.${decPart}` : intFormatted
  const signed = negative ? `-${result}` : result
  return showSymbol ? `C$ ${signed}` : signed
}

export function parse(value: string): number {
  const s = safeStr(value).replace(/C\$\s?/, '').replace(/,/g, '').trim()
  const n = parseFloat(s)
  return isNaN(n) ? 0 : n
}
