import { describe, expect, it } from 'vitest'
import * as zipcode from '../../src/ht/zipcode.js'

describe('ht.zipcode', () => {
  describe('validate', () => {
    it('should return true for valid 4-digit zipcode', () => {
      expect(zipcode.validate('1234')).toBe(true)
      expect(zipcode.validate('9876')).toBe(true)
    })

    it('should return false for invalid length', () => {
      expect(zipcode.validate('123')).toBe(false)
      expect(zipcode.validate('12345')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(zipcode.validate(null as any)).toBe(false)
      expect(zipcode.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format to 4 digits with padding', () => {
      expect(zipcode.format('1234')).toBe('1234')
      expect(zipcode.format('123')).toBe('0123')
      expect(zipcode.format('12')).toBe('0012')
      expect(zipcode.format('1')).toBe('0001')
    })

    it('should truncate to 4 digits if longer', () => {
      expect(zipcode.format('12345')).toBe('1234')
    })

    it('should handle empty input', () => {
      expect(zipcode.format('')).toBe('0000')
    })
  })

  describe('strip', () => {
    it('should remove non-digits', () => {
      expect(zipcode.strip('12-34')).toBe('1234')
      expect(zipcode.strip('abc1234def')).toBe('1234')
    })

    it('should handle null/undefined', () => {
      expect(zipcode.strip(null as any)).toBe('')
      expect(zipcode.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('should have correct mask pattern', () => {
      expect(zipcode.mask).toBe('####')
    })
  })
})
