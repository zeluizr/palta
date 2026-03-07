import { safeStr } from '../utils.js'

export const symbol = 'RD$'
export const code = 'DOP'

export function format(value: number, options?: { decimals?: number; symbol?: boolean }): string {
  const decimals = options?.decimals ?? 2
  const showSymbol = options?.symbol !== false
  const negative = value < 0
  const abs = Math.abs(value)
  const fixed = abs.toFixed(decimals)
  const [intPart, decPart] = fixed.split('.')
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const result = decimals > 0 ? `${intFormatted}.${decPart}` : intFormatted
  const signed = negative ? `-${result}` : result
  return showSymbol ? `RD$ ${signed}` : signed
}

export function parse(value: string): number {
  const s = safeStr(value)
    .replace(/RD\$\s?/, '')
    .replace(/,/g, '')
    .trim()
  const n = parseFloat(s)
  return isNaN(n) ? 0 : n
}
