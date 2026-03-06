import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/br/zipcode.js'

describe('br/zipcode', () => {
  describe('format', () => {
    it('formata CEP sem traço', () => {
      expect(zipcode.format('01310100')).toBe('01310-100')
    })
    it('formata CEP com traço', () => {
      expect(zipcode.format('01310-100')).toBe('01310-100')
    })
    it('formata parcialmente', () => {
      expect(zipcode.format('01310')).toBe('01310')
    })
  })

  describe('strip', () => {
    it('remove traço', () => {
      expect(zipcode.strip('01310-100')).toBe('01310100')
    })
  })

  describe('validate', () => {
    it('valida CEP de 8 dígitos', () => {
      expect(zipcode.validate('01310100')).toBe(true)
      expect(zipcode.validate('01310-100')).toBe(true)
    })
    it('rejeita CEP inválido', () => {
      expect(zipcode.validate('0131010')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
      expect(zipcode.validate('013101001')).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####-###')
    })
  })
})
