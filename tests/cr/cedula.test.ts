import { describe, it, expect } from 'vitest'
import * as cedula from '../../src/cr/cedula.js'

describe('cr/cedula', () => {
  describe('validate', () => {
    it('valida cédula válida', () => {
      expect(cedula.validate('100000008')).toBe(true)
    })
    it('rejeita cédula com dígito verificador errado', () => {
      expect(cedula.validate('100000007')).toBe(false)
      expect(cedula.validate('100000009')).toBe(false)
    })
    it('rejeita cédula com comprimento inválido', () => {
      expect(cedula.validate('10000000')).toBe(false)
      expect(cedula.validate('1000000088')).toBe(false)
      expect(cedula.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cedula.validate(null as unknown as string)).toBe(false)
      expect(cedula.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata cédula com 9 dígitos', () => {
      expect(cedula.format('100000008')).toBe('1-0000-0008')
    })
    it('formata parcialmente', () => {
      expect(cedula.format('1')).toBe('1')
      expect(cedula.format('12')).toBe('1-2')
      expect(cedula.format('12345')).toBe('1-2345')
      expect(cedula.format('123456789')).toBe('1-2345-6789')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(cedula.strip('1-0000-0008')).toBe('100000008')
    })
    it('lida com null/undefined', () => {
      expect(cedula.strip(null as unknown as string)).toBe('')
      expect(cedula.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cedula.mask).toBe('#-####-####')
    })
  })
})
