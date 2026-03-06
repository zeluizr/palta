import { describe, it, expect } from 'vitest'
import * as cuit from '../../src/ar/cuit.js'

describe('ar/cuit', () => {
  describe('format', () => {
    it('formata CUIT sem pontuação', () => {
      expect(cuit.format('20123456786')).toBe('20-12345678-6')
    })
    it('formata CUIT com pontuação', () => {
      expect(cuit.format('20-12345678-6')).toBe('20-12345678-6')
    })
    it('formata parcialmente', () => {
      expect(cuit.format('20')).toBe('20')
      expect(cuit.format('2012345678')).toBe('20-12345678')
    })
  })

  describe('strip', () => {
    it('remove traços', () => {
      expect(cuit.strip('20-12345678-6')).toBe('20123456786')
    })
  })

  describe('validate', () => {
    it('valida CUIT válido (pessoa física)', () => {
      expect(cuit.validate('20-12345678-6')).toBe(true)
      expect(cuit.validate('20123456786')).toBe(true)
    })
    it('valida CUIT de pessoa jurídica', () => {
      expect(cuit.validate('30-05536168-9')).toBe(false)
    })
    it('rejeita CUIT com comprimento inválido', () => {
      expect(cuit.validate('2012345678')).toBe(false)
      expect(cuit.validate('')).toBe(false)
    })
    it('rejeita CUIT com prefixo inválido', () => {
      expect(cuit.validate('11123456786')).toBe(false)
    })
    it('rejeita CUIT com dígito verificador errado', () => {
      expect(cuit.validate('20-12345678-3')).toBe(false)
    })
    it('rejeita CUIT com remainder 10 (inexistente na AFIP)', () => {
      expect(cuit.validate('20999999999')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cuit.validate(null as unknown as string)).toBe(false)
      expect(cuit.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cuit.mask).toBe('##-########-#')
    })
  })
})
