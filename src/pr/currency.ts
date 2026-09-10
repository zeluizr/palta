import { safeStr } from '../utils.js'

export const symbol = '$'
export const code = 'USD'
export const decimals = 2

export function format(value: number, options?: { decimals?: number; symbol?: boolean }): string {
  if (typeof value !== 'number' || !isFinite(value)) return ''
  const dec = options?.decimals ?? decimals
  const showSymbol = options?.symbol !== false
  const [intPart, decPart] = value.toFixed(dec).split('.')
  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const result = dec > 0 ? `${withThousands}.${decPart}` : withThousands
  return showSymbol ? `${symbol} ${result}` : result
}

export function parse(value: string): number {
  const cleaned = safeStr(value).replace(/[^\d.-]/g, '')
  return parseFloat(cleaned) || 0
}
