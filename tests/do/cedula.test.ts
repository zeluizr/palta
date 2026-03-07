import { describe, it, expect } from 'vitest'
import * as cedula from '../../src/do/cedula.js'

describe('do/cedula', () => {
  describe('format', () => {
    it('formata cédula sem pontuação', () => {
      expect(cedula.format('00113918205')).toBe('001-1391820-5')
    })
    it('formata cédula com pontuação', () => {
      expect(cedula.format('001-1391820-5')).toBe('001-1391820-5')
    })
    it('formata parcialmente', () => {
      expect(cedula.format('001')).toBe('001')
      expect(cedula.format('0011391820')).toBe('001-1391820')
    })
  })

  describe('strip', () => {
    it('remove hífens', () => {
      expect(cedula.strip('001-1391820-5')).toBe('00113918205')
    })
    it('lida com null/undefined', () => {
      expect(cedula.strip(null as unknown as string)).toBe('')
      expect(cedula.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida cédula válida', () => {
      expect(cedula.validate('001-1391820-5')).toBe(true)
      expect(cedula.validate('00113918205')).toBe(true)
    })
    it('rejeita cédula com comprimento inválido', () => {
      expect(cedula.validate('0011391820')).toBe(false)
      expect(cedula.validate('')).toBe(false)
    })
    it('rejeita cédula com dígito verificador errado', () => {
      expect(cedula.validate('001-1391820-3')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cedula.validate(null as unknown as string)).toBe(false)
      expect(cedula.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cedula.mask).toBe('###-#######-#')
    })
  })
})
