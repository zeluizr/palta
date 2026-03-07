import { safeStr } from '../utils.js'

export const code = 'USD'
export const symbol = '$'
export const decimals = 2

export function format(amount: number): string {
  const formatted = Math.abs(amount).toFixed(2)
  const [integer, decimal] = formatted.split('.')
  const intFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const sign = amount < 0 ? '-' : ''
  return `${sign}${symbol}${intFormatted}.${decimal}`
}

export function strip(value: string): string {
  return safeStr(value).replace(/[$,]/g, '')
}
