import { describe, it, expect } from 'vitest'
import * as currency from '../../src/jm/currency.js'

describe('jm.currency', () => {
  describe('constants', () => {
    it('should export correct constants', () => {
      expect(currency.symbol).toBe('J$')
      expect(currency.code).toBe('JMD')
      expect(currency.decimals).toBe(2)
    })
  })

  describe('format', () => {
    it('should format with J$ symbol without space', () => {
      expect(currency.format(1234.56)).toBe('J$1,234.56')
      expect(currency.format(1000000)).toBe('J$1,000,000.00')
      expect(currency.format(0)).toBe('J$0.00')
    })

    it('should handle negative values', () => {
      expect(currency.format(-1234.56)).toBe('J$-1,234.56')
      expect(currency.format(-1000000)).toBe('J$-1,000,000.00')
    })

    it('should respect decimals option', () => {
      expect(currency.format(1234.56, { decimals: 0 })).toBe('J$1,235')
      expect(currency.format(1234.56, { decimals: 3 })).toBe('J$1,234.560')
    })

    it('should respect symbol option', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
      expect(currency.format(1234.56, { symbol: true })).toBe('J$1,234.56')
    })

    it('should handle both options', () => {
      expect(currency.format(1234.56, { decimals: 0, symbol: false })).toBe('1,235')
      expect(currency.format(1234.56, { decimals: 3, symbol: true })).toBe('J$1,234.560')
    })
  })

  describe('parse', () => {
    it('should parse formatted currency', () => {
      expect(currency.parse('J$1,234.56')).toBe(1234.56)
      expect(currency.parse('J$1,000,000.00')).toBe(1000000)
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })

    it('should handle values without formatting', () => {
      expect(currency.parse('1234.56')).toBe(1234.56)
      expect(currency.parse('0')).toBe(0)
    })

    it('should handle negative values', () => {
      expect(currency.parse('J$-1,234.56')).toBe(-1234.56)
      expect(currency.parse('-1234.56')).toBe(-1234.56)
    })

    it('should return 0 for invalid input', () => {
      expect(currency.parse('abc')).toBe(0)
      expect(currency.parse('')).toBe(0)
    })

    it('should handle null and undefined', () => {
      expect(currency.parse(null as any)).toBe(0)
      expect(currency.parse(undefined as any)).toBe(0)
    })
  })
})
