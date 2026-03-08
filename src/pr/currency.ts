export const symbol = '$'
export const code = 'USD'
export const decimals = 2

export function format(value: number): string {
  const [intPart, decPart] = value.toFixed(decimals).split('.')
  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${symbol} ${withThousands}.${decPart}`
}

export function parse(value: string): number {
  const cleaned = value.replace(/[^\d.-]/g, '')
  return parseFloat(cleaned) || 0
}
