import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/pe/zipcode.js'

describe('pe/zipcode', () => {
  describe('format', () => {
    it('formata CEP de 5 dígitos', () => {
      expect(zipcode.format('15001')).toBe('15001')
    })
    it('trunca para 5 dígitos', () => {
      expect(zipcode.format('150010')).toBe('15001')
    })
  })

  describe('strip', () => {
    it('retorna só dígitos', () => {
      expect(zipcode.strip('15001')).toBe('15001')
    })
  })

  describe('validate', () => {
    it('valida CEP de 5 dígitos', () => {
      expect(zipcode.validate('15001')).toBe(true)
    })
    it('rejeita CEP inválido', () => {
      expect(zipcode.validate('1500')).toBe(false)
      expect(zipcode.validate('150011')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
