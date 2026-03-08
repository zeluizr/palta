import { describe, expect, it } from 'vitest'
import * as currency from '../../src/pr/currency.js'

describe('pr/currency', () => {
  describe('format', () => {
    it('formats USD with $ symbol, comma thousands, and dot decimal', () => {
      expect(currency.format(1234.56)).toBe('$ 1,234.56')
      expect(currency.format(1000000)).toBe('$ 1,000,000.00')
      expect(currency.format(99.99)).toBe('$ 99.99')
      expect(currency.format(0.5)).toBe('$ 0.50')
    })

    it('handles negative values', () => {
      expect(currency.format(-1234.56)).toBe('$ -1,234.56')
    })

    it('handles zero', () => {
      expect(currency.format(0)).toBe('$ 0.00')
    })
  })

  describe('parse', () => {
    it('parses formatted currency string', () => {
      expect(currency.parse('$ 1,234.56')).toBe(1234.56)
      expect(currency.parse('$ 1,000,000.00')).toBe(1000000)
      expect(currency.parse('$ 99.99')).toBe(99.99)
    })

    it('handles unformatted numbers', () => {
      expect(currency.parse('1234.56')).toBe(1234.56)
      expect(currency.parse('99.99')).toBe(99.99)
    })

    it('handles negative values', () => {
      expect(currency.parse('$ -1,234.56')).toBe(-1234.56)
    })

    it('returns 0 for invalid input', () => {
      expect(currency.parse('')).toBe(0)
      expect(currency.parse('abc')).toBe(0)
    })
  })

  describe('constants', () => {
    it('exports correct symbol', () => {
      expect(currency.symbol).toBe('$')
    })

    it('exports correct code', () => {
      expect(currency.code).toBe('USD')
    })

    it('exports correct decimals', () => {
      expect(currency.decimals).toBe(2)
    })
  })
})
