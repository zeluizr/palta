import type { WeightUnit } from '../types.js'

const factors: Record<WeightUnit, number> = {
  mg: 1,
  g: 1000,
  kg: 1_000_000,
  oz: 28349.523125,
  lb: 453592.37,
}

const autoScale: Partial<Record<WeightUnit, [number, WeightUnit]>> = {
  g: [1000, 'kg'],
}

export function convert(value: number, from: WeightUnit, to: WeightUnit): number {
  if (!isFinite(value)) return NaN
  return value * factors[from] / factors[to]
}

export function format(
  value: number,
  unit: WeightUnit,
  options?: { decimals?: number },
): string {
  if (typeof value !== 'number' || !isFinite(value)) return ''
  const d = options?.decimals ?? 2
  const scale = autoScale[unit]
  if (scale && value >= scale[0]) {
    const scaled = convert(value, unit, scale[1])
    return `${scaled.toFixed(d).replace('.', ',')} ${scale[1]}`
  }
  if (options?.decimals === undefined && Number.isInteger(value)) {
    return `${value} ${unit}`
  }
  return `${value.toFixed(d).replace('.', ',')} ${unit}`
}
