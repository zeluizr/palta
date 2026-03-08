import { describe, expect, it } from 'vitest'
import * as nif from '../../src/ht/nif.js'

describe('ht.nif', () => {
  describe('validate', () => {
    it('should return true for valid 9-digit NIF', () => {
      expect(nif.validate('123456789')).toBe(true)
      expect(nif.validate('987654321')).toBe(true)
    })

    it('should return true for valid NIF with hyphen', () => {
      expect(nif.validate('12345678-9')).toBe(true)
    })

    it('should return false for invalid length', () => {
      expect(nif.validate('12345678')).toBe(false)
      expect(nif.validate('1234567890')).toBe(false)
      expect(nif.validate('')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(nif.validate(null as any)).toBe(false)
      expect(nif.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format 9-digit NIF with hyphen', () => {
      expect(nif.format('123456789')).toBe('12345678-9')
    })

    it('should preserve already formatted NIF', () => {
      expect(nif.format('12345678-9')).toBe('12345678-9')
    })

    it('should not add hyphen for incomplete NIF', () => {
      expect(nif.format('12345')).toBe('12345')
      expect(nif.format('12345678')).toBe('12345678')
    })

    it('should handle empty input', () => {
      expect(nif.format('')).toBe('')
    })
  })

  describe('strip', () => {
    it('should remove hyphen and non-digits', () => {
      expect(nif.strip('12345678-9')).toBe('123456789')
      expect(nif.strip('123-456-789')).toBe('123456789')
    })

    it('should keep only digits', () => {
      expect(nif.strip('abc123def456ghi789')).toBe('123456789')
    })

    it('should handle null/undefined', () => {
      expect(nif.strip(null as any)).toBe('')
      expect(nif.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('should have correct mask pattern', () => {
      expect(nif.mask).toBe('########-#')
    })
  })
})
