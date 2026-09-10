import { safeStr } from '../utils.js'

export const symbol = 'G'
export const code = 'HTG'
export const decimals = 2

export function format(value: number, options?: { decimals?: number; symbol?: boolean }): string {
  if (typeof value !== 'number' || !isFinite(value)) return ''
  const dec = options?.decimals ?? decimals
  const showSymbol = options?.symbol !== false
  const parts = Math.abs(value).toFixed(dec).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const result = parts.join('.')
  const formatted = showSymbol ? `${symbol} ${result}` : result
  return value < 0 ? `-${formatted}` : formatted
}

export function parse(value: string): number {
  const cleaned = safeStr(value).replace(/[^0-9.-]/g, '')
  return parseFloat(cleaned) || 0
}
