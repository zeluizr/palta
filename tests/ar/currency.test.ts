import { describe, it, expect } from 'vitest'
import * as currency from '../../src/ar/currency.js'

describe('ar/currency', () => {
  describe('format', () => {
    it('formata valor simples', () => {
      expect(currency.format(1234.56)).toBe('$ 1.234,56')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('$ 0,00')
    })
    it('formata negativo', () => {
      expect(currency.format(-1234.56)).toBe('$ -1.234,56')
    })
    it('formata milhões', () => {
      expect(currency.format(1234567.89)).toBe('$ 1.234.567,89')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1.234,56')
    })
    it('formata sem decimais', () => {
      expect(currency.format(1234, { decimals: 0 })).toBe('$ 1.234')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('$ 1.234,56')).toBe(1234.56)
    })
    it('retorna 0 para input inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('symbol e code', () => {
    it('symbol é $', () => {
      expect(currency.symbol).toBe('$')
    })
    it('code é ARS', () => {
      expect(currency.code).toBe('ARS')
    })
  })
})
