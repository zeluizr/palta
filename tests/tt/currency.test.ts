import { describe, expect, it } from 'vitest'
import * as currency from '../../src/tt/currency'

describe('tt.currency', () => {
  describe('constants', () => {
    it('has correct symbol', () => {
      expect(currency.symbol).toBe('TT$')
    })

    it('has correct code', () => {
      expect(currency.code).toBe('TTD')
    })

    it('has correct decimals', () => {
      expect(currency.decimals).toBe(2)
    })
  })

  describe('format', () => {
    it('formats positive amounts with TT$ symbol (no space)', () => {
      expect(currency.format(1234.56)).toBe('TT$1,234.56')
      expect(currency.format(1000000)).toBe('TT$1,000,000.00')
      expect(currency.format(0)).toBe('TT$0.00')
      expect(currency.format(9.99)).toBe('TT$9.99')
    })

    it('formats negative amounts', () => {
      expect(currency.format(-1234.56)).toBe('TT$-1,234.56')
      expect(currency.format(-100)).toBe('TT$-100.00')
    })

    it('respects decimals option', () => {
      expect(currency.format(1234.567, { decimals: 0 })).toBe('TT$1,235')
      expect(currency.format(1234.567, { decimals: 3 })).toBe('TT$1,234.567')
    })

    it('respects symbol option', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
      expect(currency.format(1234.56, { symbol: true })).toBe('TT$1,234.56')
    })

    it('combines options correctly', () => {
      expect(currency.format(1234.567, { decimals: 1, symbol: false })).toBe(
        '1,234.6'
      )
    })
  })

  describe('parse', () => {
    it('parses formatted currency strings', () => {
      expect(currency.parse('TT$1,234.56')).toBe(1234.56)
      expect(currency.parse('TT$1,000,000.00')).toBe(1000000)
      expect(currency.parse('1,234.56')).toBe(1234.56)
    })

    it('handles strings without formatting', () => {
      expect(currency.parse('1234.56')).toBe(1234.56)
      expect(currency.parse('1234')).toBe(1234)
    })

    it('returns 0 for invalid input', () => {
      expect(currency.parse('invalid')).toBe(0)
      expect(currency.parse('')).toBe(0)
    })

    it('handles null and undefined', () => {
      expect(currency.parse(null as any)).toBe(0)
      expect(currency.parse(undefined as any)).toBe(0)
    })
  })
})
