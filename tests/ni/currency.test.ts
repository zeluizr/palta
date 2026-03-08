import { describe, it, expect } from 'vitest'
import * as currency from '../../src/ni/currency.js'

describe('ni/currency', () => {
  describe('format', () => {
    it('formata valor com decimais', () => {
      expect(currency.format(1234.56)).toBe('C$ 1,234.56')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('C$ 0.00')
    })
    it('formata negativo', () => {
      expect(currency.format(-1234.56)).toBe('C$ -1,234.56')
    })
    it('formata milhões', () => {
      expect(currency.format(1234567.89)).toBe('C$ 1,234,567.89')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })
    it('formata com decimais customizados', () => {
      expect(currency.format(1234.567, { decimals: 0 })).toBe('C$ 1,235')
      expect(currency.format(1234.567, { decimals: 3 })).toBe('C$ 1,234.567')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('C$ 1,234.56')).toBe(1234.56)
    })
    it('faz parse sem símbolo', () => {
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })
    it('retorna 0 para input inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
    it('lida com null/undefined', () => {
      expect(currency.parse(null as any)).toBe(0)
      expect(currency.parse(undefined as any)).toBe(0)
    })
  })

  describe('constants', () => {
    it('symbol é C$', () => {
      expect(currency.symbol).toBe('C$')
    })
    it('code é NIO', () => {
      expect(currency.code).toBe('NIO')
    })
    it('decimals é 2', () => {
      expect(currency.decimals).toBe(2)
    })
  })
})
