import { describe, it, expect } from 'vitest'
import * as currency from '../../src/ve/currency.js'

describe('ve/currency', () => {
  describe('format', () => {
    it('formata valor com casas decimais', () => {
      expect(currency.format(1234.56)).toBe('Bs. 1.234,56')
    })
    it('formata zero', () => {
      expect(currency.format(0)).toBe('Bs. 0,00')
    })
    it('formata valor grande', () => {
      expect(currency.format(1000000)).toBe('Bs. 1.000.000,00')
    })
    it('formata valor negativo', () => {
      expect(currency.format(-1234.56)).toBe('Bs. -1.234,56')
    })
    it('formata sem símbolo', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1.234,56')
    })
    it('formata sem casas decimais', () => {
      expect(currency.format(1234.56, { decimals: 0 })).toBe('Bs. 1.235')
    })
  })

  describe('parse', () => {
    it('faz parse de valor formatado', () => {
      expect(currency.parse('Bs. 1.234,56')).toBe(1234.56)
    })
    it('faz parse de zero', () => {
      expect(currency.parse('Bs. 0,00')).toBe(0)
    })
    it('retorna 0 para valor inválido', () => {
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('symbol', () => {
    it('retorna o símbolo correto', () => {
      expect(currency.symbol).toBe('Bs.')
    })
  })

  describe('code', () => {
    it('retorna o código correto', () => {
      expect(currency.code).toBe('VES')
    })
  })

  describe('decimals', () => {
    it('retorna 2 casas decimais', () => {
      expect(currency.decimals).toBe(2)
    })
  })
})
