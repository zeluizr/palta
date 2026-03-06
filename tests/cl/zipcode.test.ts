import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/cl/zipcode.js'

describe('cl/zipcode', () => {
  describe('format', () => {
    it('formata CEP de 7 dígitos', () => {
      expect(zipcode.format('8320000')).toBe('832-0000')
    })
    it('formata parcialmente', () => {
      expect(zipcode.format('832')).toBe('832')
    })
  })

  describe('strip', () => {
    it('remove traço', () => {
      expect(zipcode.strip('832-0000')).toBe('8320000')
    })
  })

  describe('validate', () => {
    it('valida CEP de 7 dígitos', () => {
      expect(zipcode.validate('8320000')).toBe(true)
      expect(zipcode.validate('832-0000')).toBe(true)
    })
    it('rejeita CEP inválido', () => {
      expect(zipcode.validate('832000')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('###-####')
    })
  })
})
