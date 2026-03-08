import { describe, it, expect } from 'vitest'
import * as currency from '../../src/jm/currency.js'

describe('jm/currency', () => {
  describe('format', () => {
    it('formata valor com símbolo J$ sem espaço', () => {
      expect(currency.format(1234.56)).toBe('J$1,234.56')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('J$0.00')
    })
    it('formata valor grande', () => {
      expect(currency.format(1000000)).toBe('J$1,000,000.00')
    })
    it('formata valor negativo', () => {
      expect(currency.format(-1234.56)).toBe('J$-1,234.56')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })
    it('formata sem decimais', () => {
      expect(currency.format(1234, { decimals: 0 })).toBe('J$1,234')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('J$1,234.56')).toBe(1234.56)
    })
    it('faz parse de zero', () => {
      expect(currency.parse('J$0.00')).toBe(0)
    })
    it('retorna 0 para valor inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('constants', () => {
    it('symbol é J$', () => {
      expect(currency.symbol).toBe('J$')
    })
    it('code é JMD', () => {
      expect(currency.code).toBe('JMD')
    })
    it('decimals é 2', () => {
      expect(currency.decimals).toBe(2)
    })
  })
})
