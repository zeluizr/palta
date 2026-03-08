import { describe, expect, it } from 'vitest'
import * as cin from '../../src/ht/cin.js'

describe('ht.cin', () => {
  describe('validate', () => {
    it('should return true for valid 12-char alphanumeric CIN', () => {
      expect(cin.validate('ABCDEF123456')).toBe(true)
      expect(cin.validate('ABC123DEF456')).toBe(true)
      expect(cin.validate('123456789012')).toBe(true)
    })

    it('should return false for invalid length', () => {
      expect(cin.validate('ABCDEF12345')).toBe(false)
      expect(cin.validate('ABCDEF1234567')).toBe(false)
      expect(cin.validate('')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(cin.validate(null as any)).toBe(false)
      expect(cin.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format to 12 uppercase alphanumeric chars', () => {
      expect(cin.format('abcdef123456')).toBe('ABCDEF123456')
      expect(cin.format('ABC-DEF-123-456')).toBe('ABCDEF123456')
    })

    it('should remove non-alphanumeric characters', () => {
      expect(cin.format('ABC DEF-123.456')).toBe('ABCDEF123456')
    })

    it('should handle empty input', () => {
      expect(cin.format('')).toBe('')
    })
  })

  describe('strip', () => {
    it('should remove non-alphanumeric and convert to uppercase', () => {
      expect(cin.strip('abcdef-123456')).toBe('ABCDEF123456')
      expect(cin.strip('ABC DEF 123 456')).toBe('ABCDEF123456')
    })

    it('should handle null/undefined', () => {
      expect(cin.strip(null as any)).toBe('')
      expect(cin.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('should have correct mask pattern', () => {
      expect(cin.mask).toBe('XXXXXXXXXXXX')
    })
  })
})
