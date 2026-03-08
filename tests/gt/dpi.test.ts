import { describe, it, expect } from 'vitest'
import * as dpi from '../../src/gt/dpi.js'

describe('gt.dpi', () => {
  describe('mask', () => {
    it('should have correct mask', () => {
      expect(dpi.mask).toBe('#############')
    })
  })

  describe('strip', () => {
    it('should remove non-digits', () => {
      expect(dpi.strip('1234-5678-90123')).toBe('1234567890123')
    })

    it('should handle empty string', () => {
      expect(dpi.strip('')).toBe('')
    })

    it('should keep only digits', () => {
      expect(dpi.strip('1234ABC5678')).toBe('12345678')
    })
  })

  describe('validate', () => {
    it('should validate 13 digits', () => {
      expect(dpi.validate('1234567890123')).toBe(true)
    })

    it('should invalidate less than 13 digits', () => {
      expect(dpi.validate('123456789012')).toBe(false)
    })

    it('should invalidate more than 13 digits', () => {
      expect(dpi.validate('12345678901234')).toBe(false)
    })

    it('should invalidate empty string', () => {
      expect(dpi.validate('')).toBe(false)
    })
  })

  describe('format', () => {
    it('should return digits only', () => {
      expect(dpi.format('1234567890123')).toBe('1234567890123')
    })

    it('should strip non-digits', () => {
      expect(dpi.format('1234-5678-90123')).toBe('1234567890123')
    })

    it('should handle empty string', () => {
      expect(dpi.format('')).toBe('')
    })
  })
})
