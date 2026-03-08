import { describe, it, expect } from 'vitest'
import * as trn from '../../src/jm/trn.js'

describe('jm.trn', () => {
  describe('validate', () => {
    it('should accept valid 9-digit TRN', () => {
      expect(trn.validate('123456789')).toBe(true)
      expect(trn.validate('123-456-789')).toBe(true)
      expect(trn.validate('987654321')).toBe(true)
    })

    it('should reject invalid TRN', () => {
      expect(trn.validate('12345678')).toBe(false) // 8 digits
      expect(trn.validate('1234567890')).toBe(false) // 10 digits
      expect(trn.validate('')).toBe(false)
      expect(trn.validate('abc')).toBe(false)
    })

    it('should handle null and undefined', () => {
      expect(trn.validate(null as any)).toBe(false)
      expect(trn.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format valid TRN as XXX-XXX-XXX', () => {
      expect(trn.format('123456789')).toBe('123-456-789')
      expect(trn.format('987654321')).toBe('987-654-321')
    })

    it('should preserve already formatted TRN', () => {
      expect(trn.format('123-456-789')).toBe('123-456-789')
    })

    it('should return original value if invalid', () => {
      expect(trn.format('12345678')).toBe('12345678')
      expect(trn.format('abc')).toBe('abc')
    })
  })

  describe('strip', () => {
    it('should remove all non-digits', () => {
      expect(trn.strip('123-456-789')).toBe('123456789')
      expect(trn.strip('123 456 789')).toBe('123456789')
      expect(trn.strip('TRN: 123-456-789')).toBe('123456789')
    })

    it('should handle null and undefined', () => {
      expect(trn.strip(null as any)).toBe('')
      expect(trn.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('should export correct mask', () => {
      expect(trn.mask).toBe('###-###-###')
    })
  })
})
