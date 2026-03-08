import { describe, it, expect } from 'vitest'
import * as nin from '../../src/jm/nin.js'

describe('jm.nin', () => {
  describe('validate', () => {
    it('should accept valid 10-digit NIN', () => {
      expect(nin.validate('1234567890')).toBe(true)
      expect(nin.validate('9876543210')).toBe(true)
    })

    it('should reject invalid NIN', () => {
      expect(nin.validate('123456789')).toBe(false) // 9 digits
      expect(nin.validate('12345678901')).toBe(false) // 11 digits
      expect(nin.validate('')).toBe(false)
      expect(nin.validate('abc')).toBe(false)
    })

    it('should handle null and undefined', () => {
      expect(nin.validate(null as any)).toBe(false)
      expect(nin.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should return 10 digits without formatting', () => {
      expect(nin.format('1234567890')).toBe('1234567890')
      expect(nin.format('9876543210')).toBe('9876543210')
    })

    it('should return original value if invalid', () => {
      expect(nin.format('123456789')).toBe('123456789')
      expect(nin.format('abc')).toBe('abc')
    })
  })

  describe('strip', () => {
    it('should remove all non-digits', () => {
      expect(nin.strip('1234567890')).toBe('1234567890')
      expect(nin.strip('123 456 7890')).toBe('1234567890')
      expect(nin.strip('NIN: 1234567890')).toBe('1234567890')
    })

    it('should handle null and undefined', () => {
      expect(nin.strip(null as any)).toBe('')
      expect(nin.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('should export correct mask', () => {
      expect(nin.mask).toBe('##########')
    })
  })
})
