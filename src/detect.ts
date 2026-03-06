import { onlyDigitsAndK } from './utils.js'
import { validate as validateCpf, format as formatCpf } from './br/cpf.js'
import { validate as validateCnpj, format as formatCnpj } from './br/cnpj.js'
import { validate as validateRut, format as formatRut } from './cl/rut.js'
import { validate as validateCuit, format as formatCuit } from './ar/cuit.js'
import { validate as validateArDni, format as formatArDni } from './ar/dni.js'
import { validate as validateNit, format as formatNit } from './co/nit.js'
import { validate as validateCc, format as formatCc } from './co/cc.js'
import { validate as validateRuc, format as formatRuc } from './pe/ruc.js'
import { validate as validatePeDni, format as formatPeDni } from './pe/dni.js'
import type { DetectResult } from './types.js'

export function detect(value: string): DetectResult | null {
  const raw = onlyDigitsAndK(value)
  if (!raw) return null

  if (raw.includes('K')) {
    const valid = validateRut(raw)
    return {
      country: 'CL',
      type: 'rut',
      valid,
      formatted: formatRut(raw),
    }
  }

  const len = raw.length

  if (len === 8) {
    if (validatePeDni(raw)) return { country: 'PE', type: 'dni', valid: true, formatted: formatPeDni(raw) }
    if (validateArDni(raw)) return { country: 'AR', type: 'dni', valid: true, formatted: formatArDni(raw) }
    return { country: 'PE', type: 'dni', valid: false, formatted: formatPeDni(raw) }
  }

  if (len === 9) {
    const withCheck = raw
    if (validateNit(withCheck)) return { country: 'CO', type: 'nit', valid: true, formatted: formatNit(withCheck) }
  }

  if (len === 10) {
    if (validateCc(raw)) return { country: 'CO', type: 'cc', valid: true, formatted: formatCc(raw) }
    if (validateNit(raw)) return { country: 'CO', type: 'nit', valid: true, formatted: formatNit(raw) }
    return { country: 'CO', type: 'cc', valid: false, formatted: formatCc(raw) }
  }

  if (len === 11) {
    if (validateCpf(raw)) return { country: 'BR', type: 'cpf', valid: true, formatted: formatCpf(raw) }
    if (validateCuit(raw)) return { country: 'AR', type: 'cuit', valid: true, formatted: formatCuit(raw) }
    if (validateRuc(raw)) return { country: 'PE', type: 'ruc', valid: true, formatted: formatRuc(raw) }
    return { country: 'BR', type: 'cpf', valid: false, formatted: formatCpf(raw) }
  }

  if (len === 14) {
    if (validateCnpj(raw)) return { country: 'BR', type: 'cnpj', valid: true, formatted: formatCnpj(raw) }
    return { country: 'BR', type: 'cnpj', valid: false, formatted: formatCnpj(raw) }
  }

  return null
}
