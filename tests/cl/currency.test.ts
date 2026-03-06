import { describe, it, expect } from 'vitest'
import * as currency from '../../src/cl/currency.js'

describe('cl/currency', () => {
  describe('format', () => {
    it('formata valor sem decimais', () => {
      expect(currency.format(15990)).toBe('$15.990')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('$0')
    })
    it('formata negativo', () => {
      expect(currency.format(-15990)).toBe('$-15.990')
    })
    it('formata milhões', () => {
      expect(currency.format(1234567)).toBe('$1.234.567')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(15990, { symbol: false })).toBe('15.990')
    })
    it('formata com decimais quando solicitado', () => {
      expect(currency.format(15990.5, { decimals: 2 })).toBe('$15.990,50')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('$15.990')).toBe(15990)
    })
    it('faz parse de zero', () => {
      expect(currency.parse('$0')).toBe(0)
    })
    it('retorna 0 para input inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('symbol e code', () => {
    it('symbol é $', () => {
      expect(currency.symbol).toBe('$')
    })
    it('code é CLP', () => {
      expect(currency.code).toBe('CLP')
    })
  })
})
