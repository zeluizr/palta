import { describe, it, expect } from 'vitest'
import * as currency from '../../src/ec/currency.js'

describe('ec/currency', () => {
  describe('format', () => {
    it('formats with dollar sign and US number format', () => {
      expect(currency.format(1234.56)).toBe('$1,234.56')
    })
    it('formats zero', () => {
      expect(currency.format(0)).toBe('$0.00')
    })
    it('formats millions', () => {
      expect(currency.format(1000000)).toBe('$1,000,000.00')
    })
    it('formats negative amount', () => {
      expect(currency.format(-1234.56)).toBe('-$1,234.56')
    })
    it('formats without symbol when symbol: false', () => {
      expect(currency.format(1234.56, { symbol: false })).toBe('1,234.56')
    })
    it('formats with custom decimals', () => {
      expect(currency.format(1234.5, { decimals: 0 })).toBe('$1,235')
      expect(currency.format(1234.5, { decimals: 3 })).toBe('$1,234.500')
    })
  })

  describe('parse', () => {
    it('removes dollar sign and commas and returns number', () => {
      expect(currency.parse('$1,234.56')).toBe(1234.56)
      expect(currency.parse('$1,000,000.00')).toBe(1000000)
    })
    it('handles plain number strings', () => {
      expect(currency.parse('1234.56')).toBe(1234.56)
    })
    it('returns 0 for invalid input', () => {
      expect(currency.parse('')).toBe(0)
    })
  })

  describe('constants', () => {
    it('has correct code and symbol', () => {
      expect(currency.code).toBe('USD')
      expect(currency.symbol).toBe('$')
      expect(currency.decimals).toBe(2)
    })
  })
})
