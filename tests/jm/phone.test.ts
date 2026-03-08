import { describe, it, expect } from 'vitest'
import * as phone from '../../src/jm/phone.js'

describe('jm.phone', () => {
  describe('constants', () => {
    it('should export correct constants', () => {
      expect(phone.countryCode).toBe('+1')
      expect(phone.mask).toBe('+1 (###) ###-####')
    })
  })

  describe('validate', () => {
    it('should accept valid Jamaica phone numbers (876)', () => {
      expect(phone.validate('8761234567')).toBe(true)
      expect(phone.validate('876-123-4567')).toBe(true)
      expect(phone.validate('+1 (876) 123-4567')).toBe(true)
      expect(phone.validate('18761234567')).toBe(true)
    })

    it('should reject non-876 numbers', () => {
      expect(phone.validate('2125551234')).toBe(false) // NY
      expect(phone.validate('3105551234')).toBe(false) // CA
      expect(phone.validate('8091234567')).toBe(false) // DR
    })

    it('should reject invalid lengths', () => {
      expect(phone.validate('876123456')).toBe(false) // 9 digits
      expect(phone.validate('87612345678')).toBe(false) // 11 digits
      expect(phone.validate('')).toBe(false)
    })

    it('should handle null and undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format with international format by default', () => {
      expect(phone.format('8761234567')).toBe('+1 (876) 123-4567')
      expect(phone.format('876-123-4567')).toBe('+1 (876) 123-4567')
    })

    it('should strip leading 1 if present', () => {
      expect(phone.format('18761234567')).toBe('+1 (876) 123-4567')
    })

    it('should respect international option', () => {
      expect(phone.format('8761234567', { international: true })).toBe('+1 (876) 123-4567')
      expect(phone.format('8761234567', { international: false })).toBe('(876) 123-4567')
    })

    it('should return original value if invalid', () => {
      expect(phone.format('123')).toBe('123')
      expect(phone.format('abc')).toBe('abc')
    })
  })

  describe('strip', () => {
    it('should remove all formatting', () => {
      expect(phone.strip('+1 (876) 123-4567')).toBe('8761234567')
      expect(phone.strip('876-123-4567')).toBe('8761234567')
      expect(phone.strip('(876) 123-4567')).toBe('8761234567')
    })

    it('should strip leading 1 from 11-digit numbers', () => {
      expect(phone.strip('18761234567')).toBe('8761234567')
      expect(phone.strip('+1 876 123 4567')).toBe('8761234567')
    })

    it('should handle null and undefined', () => {
      expect(phone.strip(null as any)).toBe('')
      expect(phone.strip(undefined as any)).toBe('')
    })
  })
})
