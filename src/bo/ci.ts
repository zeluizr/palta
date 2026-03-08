import { onlyDigits, safeStr } from '../utils.js'

export const mask = '#######'

export function strip(value: string): string {
  return onlyDigits(safeStr(value))
}

export function validate(value: string): boolean {
  const d = strip(safeStr(value))
  return d.length >= 5 && d.length <= 8
}

export function format(value: string): string {
  const s = safeStr(value).trim()
  const d = strip(s)

  if (d.length < 5 || d.length > 8) return s

  // Extrai sufixo de departamento (1 ou 2 letras maiúsculas no final)
  const suffixMatch = s.match(/\s+([A-Z]{1,2})$/)
  const validDepts = ['LP', 'OR', 'CB', 'PT', 'CH', 'TJ', 'SC', 'BE', 'PD']

  if (suffixMatch && validDepts.includes(suffixMatch[1])) {
    return `${d} ${suffixMatch[1]}`
  }

  return d
}
