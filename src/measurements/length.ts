import type { LengthUnit } from '../types.js'

const factors: Record<LengthUnit, number> = {
  mm: 1,
  cm: 10,
  m: 1000,
  km: 1_000_000,
  in: 25.4,
  ft: 304.8,
}

const autoScale: Partial<Record<LengthUnit, [number, LengthUnit]>> = {
  cm: [100, 'm'],
}

export function convert(value: number, from: LengthUnit, to: LengthUnit): number {
  if (!isFinite(value)) return NaN
  return value * factors[from] / factors[to]
}

export function format(
  value: number,
  unit: LengthUnit,
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
