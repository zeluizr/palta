import { describe, it, expect } from 'vitest'
import * as currency from '../../src/co/currency.js'

describe('co/currency', () => {
  describe('format', () => {
    it('formata valor sem decimais', () => {
      expect(currency.format(89900)).toBe('$ 89.900')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('$ 0')
    })
    it('formata negativo', () => {
      expect(currency.format(-89900)).toBe('$ -89.900')
    })
    it('formata milhões', () => {
      expect(currency.format(1234567)).toBe('$ 1.234.567')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(89900, { symbol: false })).toBe('89.900')
    })
    it('formata com decimais quando solicitado', () => {
      expect(currency.format(89900.5, { decimals: 2 })).toBe('$ 89.900,50')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('$ 89.900')).toBe(89900)
    })
    it('retorna 0 para input inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('symbol e code', () => {
    it('symbol é $', () => {
      expect(currency.symbol).toBe('$')
    })
    it('code é COP', () => {
      expect(currency.code).toBe('COP')
    })
  })
})
