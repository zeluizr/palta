import { describe, it, expect } from 'vitest'
import * as currency from '../../src/sv/currency.js'

describe('sv.currency', () => {
  describe('constants', () => {
    it('should export correct symbol', () => {
      expect(currency.symbol).toBe('$')
    })

    it('should export correct code', () => {
      expect(currency.code).toBe('USD')
    })

    it('should export correct decimals', () => {
      expect(currency.decimals).toBe(2)
    })
  })

  describe('format', () => {
    it('should format with symbol by default', () => {
      expect(currency.format(1234.56)).toBe('$ 1,234.56')
    })

    it('should format without symbol when requested', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })

    it('should format negative values', () => {
      expect(currency.format(-1234.56)).toBe('$ -1,234.56')
    })

    it('should respect custom decimals', () => {
      expect(currency.format(1234.567, { decimals: 3 })).toBe('$ 1,234.567')
      expect(currency.format(1234.5, { decimals: 0 })).toBe('$ 1,235')
    })

    it('should handle zero', () => {
      expect(currency.format(0)).toBe('$ 0.00')
    })

    it('should add thousand separators', () => {
      expect(currency.format(1234567.89)).toBe('$ 1,234,567.89')
    })
  })

  describe('parse', () => {
    it('should parse formatted currency', () => {
      expect(currency.parse('$ 1,234.56')).toBe(1234.56)
    })

    it('should parse without symbol', () => {
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })

    it('should parse negative values', () => {
      expect(currency.parse('$ -1,234.56')).toBe(-1234.56)
    })

    it('should handle invalid input', () => {
      expect(currency.parse('invalid')).toBe(0)
      expect(currency.parse('')).toBe(0)
    })

    it('should handle null/undefined', () => {
      expect(currency.parse(null as any)).toBe(0)
      expect(currency.parse(undefined as any)).toBe(0)
    })
  })
})
