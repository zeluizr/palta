import { describe, expect, it } from 'vitest'
import * as zipcode from '../../src/tt/zipcode'

describe('tt.zipcode', () => {
  describe('mask', () => {
    it('returns the correct mask', () => {
      expect(zipcode.mask).toBe('XXXXXX')
    })
  })

  describe('strip', () => {
    it('removes non-alphanumeric characters and converts to uppercase', () => {
      expect(zipcode.strip('ABC123')).toBe('ABC123')
      expect(zipcode.strip('abc123')).toBe('ABC123')
      expect(zipcode.strip('ABC-123')).toBe('ABC123')
      expect(zipcode.strip('ABC 123')).toBe('ABC123')
      expect(zipcode.strip('A1B2C3')).toBe('A1B2C3')
    })

    it('handles null and undefined', () => {
      expect(zipcode.strip(null as any)).toBe('')
      expect(zipcode.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('returns true for valid 6-character alphanumeric codes', () => {
      expect(zipcode.validate('ABC123')).toBe(true)
      expect(zipcode.validate('123456')).toBe(true)
      expect(zipcode.validate('ABCDEF')).toBe(true)
      expect(zipcode.validate('A1B2C3')).toBe(true)
      expect(zipcode.validate('abc123')).toBe(true)
    })

    it('returns false for invalid lengths', () => {
      expect(zipcode.validate('ABC12')).toBe(false) // too short
      expect(zipcode.validate('ABC1234')).toBe(false) // too long
      expect(zipcode.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(zipcode.validate(null as any)).toBe(false)
      expect(zipcode.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('returns 6-character uppercase alphanumeric code', () => {
      expect(zipcode.format('abc123')).toBe('ABC123')
      expect(zipcode.format('ABC-123')).toBe('ABC123')
      expect(zipcode.format('A1B2C3')).toBe('A1B2C3')
    })

    it('truncates to 6 characters', () => {
      expect(zipcode.format('ABCDEFGH')).toBe('ABCDEF')
      expect(zipcode.format('12345678')).toBe('123456')
    })

    it('handles null and undefined', () => {
      expect(zipcode.format(null as any)).toBe('')
      expect(zipcode.format(undefined as any)).toBe('')
    })
  })
})
