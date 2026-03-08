import { describe, it, expect } from 'vitest'
import * as currency from '../../src/do/currency.js'

describe('do/currency', () => {
  describe('format', () => {
    it('formata valor simples', () => {
      expect(currency.format(1234.56)).toBe('RD$ 1,234.56')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('RD$ 0.00')
    })
    it('formata negativo', () => {
      expect(currency.format(-1234.56)).toBe('RD$ -1,234.56')
    })
    it('formata milhões', () => {
      expect(currency.format(1234567.89)).toBe('RD$ 1,234,567.89')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })
    it('formata sem decimais', () => {
      expect(currency.format(1234, { decimals: 0 })).toBe('RD$ 1,234')
    })
    it('formata valor inteiro', () => {
      expect(currency.format(15990)).toBe('RD$ 15,990.00')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('RD$ 1,234.56')).toBe(1234.56)
    })
    it('faz parse de zero', () => {
      expect(currency.parse('RD$ 0.00')).toBe(0)
    })
    it('faz parse sem símbolo', () => {
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })
    it('retorna 0 para input inválido', () => {
      expect(currency.parse('abc')).toBe(0)
      expect(currency.parse('')).toBe(0)
    })
  })

  describe('symbol e code', () => {
    it('symbol é RD$', () => {
      expect(currency.symbol).toBe('RD$')
    })
    it('code é DOP', () => {
      expect(currency.code).toBe('DOP')
    })
  })
})
