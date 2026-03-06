import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/co/zipcode.js'

describe('co/zipcode', () => {
  describe('format', () => {
    it('formata CEP de 6 dígitos', () => {
      expect(zipcode.format('110111')).toBe('110111')
    })
    it('trunca para 6 dígitos', () => {
      expect(zipcode.format('1101119')).toBe('110111')
    })
  })

  describe('strip', () => {
    it('retorna só dígitos', () => {
      expect(zipcode.strip('110-111')).toBe('110111')
    })
  })

  describe('validate', () => {
    it('valida CEP de 6 dígitos', () => {
      expect(zipcode.validate('110111')).toBe(true)
    })
    it('rejeita CEP inválido', () => {
      expect(zipcode.validate('11011')).toBe(false)
      expect(zipcode.validate('1101111')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('######')
    })
  })
})
