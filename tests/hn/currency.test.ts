import { describe, it, expect } from 'vitest'
import * as currency from '../../src/hn/currency.js'

describe('hn/currency', () => {
  describe('constants', () => {
    it('exporta símbolo, código e decimais', () => {
      expect(currency.symbol).toBe('L')
      expect(currency.code).toBe('HNL')
      expect(currency.decimals).toBe(2)
    })
  })

  describe('format', () => {
    it('formata valores positivos', () => {
      expect(currency.format(1234.56)).toBe('L 1,234.56')
      expect(currency.format(1000)).toBe('L 1,000.00')
      expect(currency.format(0)).toBe('L 0.00')
    })
    it('formata valores negativos', () => {
      expect(currency.format(-1234.56)).toBe('L -1,234.56')
    })
    it('respeita decimals option', () => {
      expect(currency.format(1234.12, { decimals: 0 })).toBe('L 1,234')
      expect(currency.format(1234.567, { decimals: 3 })).toBe('L 1,234.567')
    })
    it('respeita symbol option', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })
  })

  describe('parse', () => {
    it('faz parse de string formatada', () => {
      expect(currency.parse('L 1,234.56')).toBe(1234.56)
      expect(currency.parse('L1,234.56')).toBe(1234.56)
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })
    it('lida com valores inválidos', () => {
      expect(currency.parse('')).toBe(0)
      expect(currency.parse('abc')).toBe(0)
    })
    it('lida com null/undefined', () => {
      expect(currency.parse(null as unknown as string)).toBe(0)
      expect(currency.parse(undefined as unknown as string)).toBe(0)
    })
  })
})
