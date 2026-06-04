import type { VolumeUnit } from '../types.js'

const factors: Record<VolumeUnit, number> = {
  ml: 1,
  l: 1000,
  'fl oz': 29.5735296,
}

const autoScale: Partial<Record<VolumeUnit, [number, VolumeUnit]>> = {
  ml: [1000, 'l'],
}

export function convert(value: number, from: VolumeUnit, to: VolumeUnit): number {
  if (!isFinite(value)) return NaN
  return value * factors[from] / factors[to]
}

export function format(
  value: number,
  unit: VolumeUnit,
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
