import { describe, it, expect } from 'vitest'
import * as currency from '../../src/mx/currency.js'

describe('mx/currency', () => {
  describe('format', () => {
    it('formats with two decimal places', () => {
      expect(currency.format(1234.56)).toBe('$1,234.56')
    })
    it('formats zero', () => {
      expect(currency.format(0)).toBe('$0.00')
    })
    it('formats large amount', () => {
      expect(currency.format(1000000)).toBe('$1,000,000.00')
    })
    it('formats negative amount', () => {
      expect(currency.format(-500.5)).toBe('$-500.50')
    })
    it('formats integer without decimals', () => {
      expect(currency.format(100)).toBe('$100.00')
    })
  })

  describe('strip', () => {
    it('removes $ and commas', () => {
      expect(currency.strip('$1,234.56')).toBe('1234.56')
    })
    it('handles amount without symbol', () => {
      expect(currency.strip('1,234.56')).toBe('1234.56')
    })
    it('handles null/undefined', () => {
      expect(currency.strip(null as unknown as string)).toBe('')
      expect(currency.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('constants', () => {
    it('has correct symbol', () => {
      expect(currency.symbol).toBe('$')
    })
    it('has correct code', () => {
      expect(currency.code).toBe('MXN')
    })
    it('has correct decimals', () => {
      expect(currency.decimals).toBe(2)
    })
  })
})
