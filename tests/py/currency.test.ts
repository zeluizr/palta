import { describe, it, expect } from 'vitest'
import * as currency from '../../src/py/currency.js'

describe('py/currency', () => {
  describe('format', () => {
    it('formata valor sem decimais', () => {
      expect(currency.format(1234567)).toBe('₲ 1.234.567')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('₲ 0')
    })
    it('formata valor grande', () => {
      expect(currency.format(1000000)).toBe('₲ 1.000.000')
    })
    it('formata valor negativo', () => {
      expect(currency.format(-1234567)).toBe('₲ -1.234.567')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234567, { symbol: false })).toBe('1.234.567')
    })
    it('formata com decimais quando especificado', () => {
      expect(currency.format(1234, { decimals: 2 })).toBe('₲ 1.234,00')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('₲ 1.234.567')).toBe(1234567)
    })
    it('faz parse de zero', () => {
      expect(currency.parse('₲ 0')).toBe(0)
    })
    it('retorna 0 para valor inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('constants', () => {
    it('symbol é ₲', () => {
      expect(currency.symbol).toBe('₲')
    })
    it('code é PYG', () => {
      expect(currency.code).toBe('PYG')
    })
    it('decimals é 0', () => {
      expect(currency.decimals).toBe(0)
    })
  })
})
