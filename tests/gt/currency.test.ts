import { describe, it, expect } from 'vitest'
import * as currency from '../../src/gt/currency.js'

describe('gt.currency', () => {
  describe('constants', () => {
    it('should have correct symbol', () => {
      expect(currency.symbol).toBe('Q')
    })

    it('should have correct code', () => {
      expect(currency.code).toBe('GTQ')
    })

    it('should have correct decimals', () => {
      expect(currency.decimals).toBe(2)
    })
  })

  describe('format', () => {
    it('should format with symbol (no space)', () => {
      expect(currency.format(1234.56)).toBe('Q1,234.56')
    })

    it('should format without symbol', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })

    it('should format negative values', () => {
      expect(currency.format(-1234.56)).toBe('Q-1,234.56')
    })

    it('should format with custom decimals', () => {
      expect(currency.format(1234.567, { decimals: 3 })).toBe('Q1,234.567')
    })

    it('should format with zero decimals', () => {
      expect(currency.format(1234.56, { decimals: 0 })).toBe('Q1,235')
    })

    it('should format large numbers', () => {
      expect(currency.format(1234567.89)).toBe('Q1,234,567.89')
    })

    it('should format zero', () => {
      expect(currency.format(0)).toBe('Q0.00')
    })
  })

  describe('parse', () => {
    it('should parse formatted string', () => {
      expect(currency.parse('Q1,234.56')).toBe(1234.56)
    })

    it('should parse without symbol', () => {
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })

    it('should parse negative values', () => {
      expect(currency.parse('Q-1,234.56')).toBe(-1234.56)
    })

    it('should parse with space after symbol', () => {
      expect(currency.parse('Q 1,234.56')).toBe(1234.56)
    })

    it('should return 0 for invalid input', () => {
      expect(currency.parse('invalid')).toBe(0)
    })

    it('should return 0 for empty string', () => {
      expect(currency.parse('')).toBe(0)
    })
  })
})
