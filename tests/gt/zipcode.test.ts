import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/gt/zipcode.js'

describe('gt.zipcode', () => {
  describe('mask', () => {
    it('should have correct mask', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })

  describe('strip', () => {
    it('should remove non-digits', () => {
      expect(zipcode.strip('01234')).toBe('01234')
    })

    it('should handle empty string', () => {
      expect(zipcode.strip('')).toBe('')
    })

    it('should remove letters', () => {
      expect(zipcode.strip('ABC123')).toBe('123')
    })
  })

  describe('validate', () => {
    it('should validate 5 digits', () => {
      expect(zipcode.validate('01234')).toBe(true)
    })

    it('should invalidate less than 5 digits', () => {
      expect(zipcode.validate('1234')).toBe(false)
    })

    it('should invalidate more than 5 digits', () => {
      expect(zipcode.validate('123456')).toBe(false)
    })

    it('should invalidate empty string', () => {
      expect(zipcode.validate('')).toBe(false)
    })

    it('should validate after stripping non-digits', () => {
      expect(zipcode.validate('01-234')).toBe(true)
    })
  })

  describe('format', () => {
    it('should pad with zeros', () => {
      expect(zipcode.format('123')).toBe('00123')
    })

    it('should keep 5 digits as-is', () => {
      expect(zipcode.format('01234')).toBe('01234')
    })

    it('should truncate if more than 5', () => {
      expect(zipcode.format('123456')).toBe('12345')
    })

    it('should handle empty string', () => {
      expect(zipcode.format('')).toBe('00000')
    })
  })
})
