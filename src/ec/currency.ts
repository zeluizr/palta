import { safeStr } from '../utils.js'

export const code = 'USD'
export const symbol = '$'
export const decimals = 2

export function format(
  amount: number,
  options?: { decimals?: number; symbol?: boolean }
): string {
  const useDecimals = options?.decimals ?? decimals
  const includeSymbol = options?.symbol !== false
  const formatted = Math.abs(amount).toFixed(useDecimals)
  const [integer, decimal] = formatted.split('.')
  const intFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const sign = amount < 0 ? '-' : ''
  let value = intFormatted
  if (useDecimals > 0 && typeof decimal === 'string') {
    value += `.${decimal}`
  }
  if (includeSymbol) {
    value = `${symbol}${value}`
  }
  return `${sign}${value}`
}

function strip(value: string): string {
  return safeStr(value).replace(/[$,]/g, '')
}

export function parse(value: string): number {
  const stripped = strip(value)
  const n = parseFloat(stripped)
  return isNaN(n) ? 0 : n
}
