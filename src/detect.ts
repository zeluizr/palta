import { onlyDigits, safeStr } from './utils.js'
import { validate as validateCpf, format as formatCpf } from './br/cpf.js'
import { validate as validateCnpj, format as formatCnpj } from './br/cnpj.js'
import { validate as validateRut, format as formatRut } from './cl/rut.js'
import { validate as validateCuit, format as formatCuit } from './ar/cuit.js'
import { validate as validateArDni, format as formatArDni } from './ar/dni.js'
import { validate as validateNit, format as formatNit } from './co/nit.js'
import { validate as validateCc, format as formatCc } from './co/cc.js'
import { validate as validateRuc, format as formatRuc } from './pe/ruc.js'
import { validate as validatePeDni, format as formatPeDni } from './pe/dni.js'
import { validate as validateUyCi, format as formatUyCi } from './uy/ci.js'
import { validate as validateMxRfc, format as formatMxRfc } from './mx/rfc.js'
import { validate as validateMxCurp, format as formatMxCurp } from './mx/curp.js'
import { validate as validateVeRif, format as formatVeRif } from './ve/rif.js'
import { validate as validateEcRuc, format as formatEcRuc } from './ec/ruc.js'
import type { DetectResult } from './types.js'

export function detect(value: string): DetectResult | null {
  const str = safeStr(value)
  if (!str) return null

  const digits = onlyDigits(str)
  const alnum = str.replace(/[^0-9a-zA-Z]/g, '').toUpperCase()

  // 1. Alphanumeric / Specific formats (TRY THESE FIRST)
  
  // MX CURP (18 chars) - Must have letters in specific places
  if (alnum.length === 18 && /^[A-Z]{4}\d{6}[A-Z]{6}\d{2}$/.test(alnum)) {
    if (validateMxCurp(str)) return { country: 'MX', type: 'curp', valid: true, formatted: formatMxCurp(str) }
  }

  // MX RFC (12 or 13 chars)
  if ((alnum.length === 12 || alnum.length === 13) && /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/.test(alnum)) {
    if (validateMxRfc(str)) return { country: 'MX', type: 'rfc', valid: true, formatted: formatMxRfc(str) }
  }

  // VE RIF (10 chars, starts with letter)
  if (alnum.length === 10 && /^[JVEGP]\d{9}$/.test(alnum)) {
    if (validateVeRif(str)) return { country: 'VE', type: 'rif', valid: true, formatted: formatVeRif(str) }
  }

  // CL RUT (can have K, but if it has other letters it's likely not a RUT)
  if (alnum.includes('K') || (alnum.length >= 7 && alnum.length <= 9 && /^\d+K?$/.test(alnum))) {
    if (validateRut(str)) {
      return { country: 'CL', type: 'rut', valid: true, formatted: formatRut(str) }
    }
  }

  // 2. Purely or mostly numeric documents (Check by digit length)
  // We only proceed here if the original string doesn't have too many non-digit characters
  // compared to its digit count, unless it's already formatted correctly.
  
  const len = digits.length
  
  // If it has too many letters and didn't match the alphanumeric checks above, 
  // it's probably not one of these.
  if (alnum.length > digits.length + 1 && !alnum.includes('K')) {
     return null
  }

  if (len === 8) {
    if (validateUyCi(str)) return { country: 'UY', type: 'ci', valid: true, formatted: formatUyCi(str) }
    if (validatePeDni(str)) return { country: 'PE', type: 'dni', valid: true, formatted: formatPeDni(str) }
    if (validateArDni(str)) return { country: 'AR', type: 'dni', valid: true, formatted: formatArDni(str) }
    if (validateRut(str)) return { country: 'CL', type: 'rut', valid: true, formatted: formatRut(str) }
    return { country: 'PE', type: 'dni', valid: false, formatted: formatPeDni(str) }
  }

  if (len === 9) {
    if (validateRut(str)) return { country: 'CL', type: 'rut', valid: true, formatted: formatRut(str) }
    return { country: 'CL', type: 'rut', valid: false, formatted: formatRut(str) }
  }

  if (len === 10) {
    if (validateNit(str)) return { country: 'CO', type: 'nit', valid: true, formatted: formatNit(str) }
    if (validateCc(str)) return { country: 'CO', type: 'cc', valid: true, formatted: formatCc(str) }
    return { country: 'CO', type: 'cc', valid: false, formatted: formatCc(str) }
  }

  if (len === 11) {
    if (validateCpf(str)) return { country: 'BR', type: 'cpf', valid: true, formatted: formatCpf(str) }
    if (validateCuit(str)) return { country: 'AR', type: 'cuit', valid: true, formatted: formatCuit(str) }
    if (validateRuc(str)) return { country: 'PE', type: 'ruc', valid: true, formatted: formatRuc(str) }
    return { country: 'BR', type: 'cpf', valid: false, formatted: formatCpf(str) }
  }

  if (len === 13) {
    if (validateEcRuc(str)) return { country: 'EC', type: 'ruc', valid: true, formatted: formatEcRuc(str) }
  }

  if (len === 14) {
    if (validateCnpj(str)) return { country: 'BR', type: 'cnpj', valid: true, formatted: formatCnpj(str) }
    return { country: 'BR', type: 'cnpj', valid: false, formatted: formatCnpj(str) }
  }

  return null
}
