import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/sv/zipcode.js'

describe('sv.zipcode', () => {
  describe('validate', () => {
    it('should validate correct 4-digit zipcode', () => {
      expect(zipcode.validate('1101')).toBe(true)
      expect(zipcode.validate('0001')).toBe(true)
    })

    it('should reject invalid zipcode', () => {
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
    it('should format zipcode with leading zeros', () => {
      expect(zipcode.format('1101')).toBe('1101')
      expect(zipcode.format('1')).toBe('0001')
      expect(zipcode.format('123')).toBe('0123')
    })

    it('should truncate extra digits', () => {
      expect(zipcode.format('11019999')).toBe('1101')
    })
  })

  describe('strip', () => {
    it('should remove non-digits', () => {
      expect(zipcode.strip('1101')).toBe('1101')
      expect(zipcode.strip('1-1-0-1')).toBe('1101')
      expect(zipcode.strip('CP 1101')).toBe('1101')
    })
  })

  describe('mask', () => {
    it('should export correct mask', () => {
      expect(zipcode.mask).toBe('####')
    })
  })
})
