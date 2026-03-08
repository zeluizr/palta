import { describe, it, expect } from 'vitest'
import * as ruc from '../../src/py/ruc.js'

describe('py/ruc', () => {
  describe('validate', () => {
    it('valida RUC válido de 7 dígitos', () => {
      expect(ruc.validate('1234560')).toBe(true)
    })
    it('valida RUC válido de 8 dígitos', () => {
      expect(ruc.validate('80012345-1')).toBe(true)
    })
    it('rejeita RUC com dígito verificador errado', () => {
      expect(ruc.validate('800123454')).toBe(false)
      expect(ruc.validate('800123455')).toBe(false)
    })
    it('rejeita RUC com comprimento inválido', () => {
      expect(ruc.validate('12345')).toBe(false)
      expect(ruc.validate('12345678901')).toBe(false)
      expect(ruc.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ruc.validate(null as unknown as string)).toBe(false)
      expect(ruc.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata RUC com hífen', () => {
      expect(ruc.format('800123451')).toBe('80012345-1')
    })
    it('formata RUC de 7 dígitos', () => {
      expect(ruc.format('1234560')).toBe('123456-0')
    })
    it('não formata se comprimento inválido', () => {
      expect(ruc.format('12345')).toBe('12345')
    })
  })

  describe('strip', () => {
    it('remove hífen', () => {
      expect(ruc.strip('80012345-1')).toBe('800123451')
    })
    it('lida com null/undefined', () => {
      expect(ruc.strip(null as unknown as string)).toBe('')
      expect(ruc.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ruc.mask).toBe('########-#')
    })
  })
})
