import { describe, it, expect } from 'vitest'
import * as currency from '../../src/pe/currency.js'

describe('pe/currency', () => {
  describe('format', () => {
    it('formata valor simples', () => {
      expect(currency.format(1234.56)).toBe('S/ 1,234.56')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('S/ 0.00')
    })
    it('formata negativo', () => {
      expect(currency.format(-1234.56)).toBe('S/ -1,234.56')
    })
    it('formata milhões', () => {
      expect(currency.format(1234567.89)).toBe('S/ 1,234,567.89')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })
    it('formata sem decimais', () => {
      expect(currency.format(1234, { decimals: 0 })).toBe('S/ 1,234')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('S/ 1,234.56')).toBe(1234.56)
    })
    it('faz parse de zero', () => {
      expect(currency.parse('S/ 0.00')).toBe(0)
    })
    it('retorna 0 para input inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('symbol e code', () => {
    it('symbol é S/', () => {
      expect(currency.symbol).toBe('S/')
    })
    it('code é PEN', () => {
      expect(currency.code).toBe('PEN')
    })
  })
})
