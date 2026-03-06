import { describe, it, expect } from 'vitest'
import * as nit from '../../src/co/nit.js'

describe('co/nit', () => {
  describe('format', () => {
    it('formata NIT com 10 dígitos', () => {
      expect(nit.format('8000000001')).toBe('800.000.000-1')
    })
    it('formata parcialmente', () => {
      expect(nit.format('800')).toBe('800')
      expect(nit.format('800000')).toBe('800.000')
      expect(nit.format('800000000')).toBe('800.000.000')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(nit.strip('800.000.000-1')).toBe('8000000001')
    })
  })

  describe('validate', () => {
    it('valida NIT válido', () => {
      expect(nit.validate('8000000002')).toBe(true)
      expect(nit.validate('9004444447')).toBe(true)
      expect(nit.validate('800.000.000-2')).toBe(true)
    })
    it('rejeita NIT com dígito verificador errado', () => {
      expect(nit.validate('8000000001')).toBe(false)
      expect(nit.validate('9004444444')).toBe(false)
    })
    it('rejeita NIT com comprimento inválido', () => {
      expect(nit.validate('123')).toBe(false)
      expect(nit.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(nit.validate(null as unknown as string)).toBe(false)
      expect(nit.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(nit.mask).toBe('###.###.###-#')
    })
  })
})
