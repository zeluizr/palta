import { describe, expect, it } from 'vitest'
import * as currency from '../../src/ht/currency.js'

describe('ht.currency', () => {
  describe('constants', () => {
    it('should have correct symbol', () => {
      expect(currency.symbol).toBe('G')
    })

    it('should have correct code', () => {
      expect(currency.code).toBe('HTG')
    })

    it('should have correct decimals', () => {
      expect(currency.decimals).toBe(2)
    })
  })

  describe('format', () => {
    it('should format with symbol, space, comma separator, and dot decimal', () => {
      expect(currency.format(1234.56)).toBe('G 1,234.56')
      expect(currency.format(1000)).toBe('G 1,000.00')
      expect(currency.format(999.99)).toBe('G 999.99')
    })

    it('should handle negative values', () => {
      expect(currency.format(-1234.56)).toBe('-G 1,234.56')
    })

    it('should handle zero', () => {
      expect(currency.format(0)).toBe('G 0.00')
    })

    it('should handle large numbers', () => {
      expect(currency.format(1234567.89)).toBe('G 1,234,567.89')
    })
  })

  describe('parse', () => {
    it('should parse formatted currency', () => {
      expect(currency.parse('G 1,234.56')).toBe(1234.56)
      expect(currency.parse('G 1,000.00')).toBe(1000)
    })

    it('should parse negative values', () => {
      expect(currency.parse('-G 1,234.56')).toBe(-1234.56)
    })

    it('should handle invalid input', () => {
      expect(currency.parse('')).toBe(0)
      expect(currency.parse('abc')).toBe(0)
    })
  })
})
