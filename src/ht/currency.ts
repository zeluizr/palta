export const symbol = 'G'
export const code = 'HTG'
export const decimals = 2

export function format(value: number): string {
  const parts = Math.abs(value).toFixed(decimals).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const formatted = `${symbol} ${parts.join('.')}`
  return value < 0 ? `-${formatted}` : formatted
}

export function parse(value: string): number {
  const cleaned = value.replace(/[^0-9.-]/g, '')
  return parseFloat(cleaned) || 0
}
