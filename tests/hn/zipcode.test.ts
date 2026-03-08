import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/hn/zipcode.js'

describe('hn/zipcode', () => {
  describe('validate', () => {
    it('valida zipcode válido com 5 dígitos', () => {
      expect(zipcode.validate('11101')).toBe(true)
      expect(zipcode.validate('12345')).toBe(true)
    })
    it('rejeita zipcode com comprimento inválido', () => {
      expect(zipcode.validate('1234')).toBe(false)
      expect(zipcode.validate('123456')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata zipcode com 5 dígitos', () => {
      expect(zipcode.format('11101')).toBe('11101')
      expect(zipcode.format('12345')).toBe('12345')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('11-101')).toBe('11101')
      expect(zipcode.strip('12345')).toBe('12345')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
