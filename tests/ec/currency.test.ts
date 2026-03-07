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
  })

  describe('strip', () => {
    it('removes dollar sign and commas', () => {
      expect(currency.strip('$1,234.56')).toBe('1234.56')
      expect(currency.strip('$1,000,000.00')).toBe('1000000.00')
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
