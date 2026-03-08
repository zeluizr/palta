import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/jm/zipcode.js'

describe('jm.zipcode', () => {
  describe('validate', () => {
    it('should accept 4-8 digit zipcodes', () => {
      expect(zipcode.validate('1234')).toBe(true)
      expect(zipcode.validate('12345')).toBe(true)
      expect(zipcode.validate('123456')).toBe(true)
      expect(zipcode.validate('1234567')).toBe(true)
      expect(zipcode.validate('12345678')).toBe(true)
    })

    it('should reject zipcodes outside 4-8 digit range', () => {
      expect(zipcode.validate('123')).toBe(false) // 3 digits
      expect(zipcode.validate('123456789')).toBe(false) // 9 digits
      expect(zipcode.validate('')).toBe(false)
    })

    it('should handle null and undefined', () => {
      expect(zipcode.validate(null as any)).toBe(false)
      expect(zipcode.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should return digits for valid zipcodes', () => {
      expect(zipcode.format('1234')).toBe('1234')
      expect(zipcode.format('12345678')).toBe('12345678')
    })

    it('should return original value if invalid', () => {
      expect(zipcode.format('123')).toBe('123')
      expect(zipcode.format('123456789')).toBe('123456789')
      expect(zipcode.format('abc')).toBe('abc')
    })
  })

  describe('strip', () => {
    it('should remove all non-digits', () => {
      expect(zipcode.strip('1234')).toBe('1234')
      expect(zipcode.strip('12-345')).toBe('12345')
      expect(zipcode.strip('ZIP: 12345')).toBe('12345')
    })

    it('should handle null and undefined', () => {
      expect(zipcode.strip(null as any)).toBe('')
      expect(zipcode.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('should export correct mask', () => {
      expect(zipcode.mask).toBe('########')
    })
  })
})
