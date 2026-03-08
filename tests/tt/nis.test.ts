import { describe, expect, it } from 'vitest'
import * as nis from '../../src/tt/nis'

describe('tt.nis', () => {
  describe('mask', () => {
    it('returns the correct mask', () => {
      expect(nis.mask).toBe('AA######A')
    })
  })

  describe('strip', () => {
    it('removes non-alphanumeric characters and converts to uppercase', () => {
      expect(nis.strip('TT123456A')).toBe('TT123456A')
      expect(nis.strip('tt123456a')).toBe('TT123456A')
      expect(nis.strip('TT-123-456-A')).toBe('TT123456A')
      expect(nis.strip('TT 123 456 A')).toBe('TT123456A')
    })

    it('handles null and undefined', () => {
      expect(nis.strip(null as any)).toBe('')
      expect(nis.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('returns true for valid NIS format (2 letters + 6 digits + 1 letter)', () => {
      expect(nis.validate('TT123456A')).toBe(true)
      expect(nis.validate('AB987654Z')).toBe(true)
      expect(nis.validate('tt123456a')).toBe(true)
      expect(nis.validate('TT-123-456-A')).toBe(true)
    })

    it('returns false for invalid NIS format', () => {
      expect(nis.validate('T123456A')).toBe(false) // only 1 letter at start
      expect(nis.validate('TT12345A')).toBe(false) // only 5 digits
      expect(nis.validate('TT1234567A')).toBe(false) // 7 digits
      expect(nis.validate('TT123456AB')).toBe(false) // 2 letters at end
      expect(nis.validate('123456ABC')).toBe(false) // no letters at start
      expect(nis.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(nis.validate(null as any)).toBe(false)
      expect(nis.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('returns the 9-character NIS without additional formatting', () => {
      expect(nis.format('TT123456A')).toBe('TT123456A')
      expect(nis.format('tt123456a')).toBe('TT123456A')
      expect(nis.format('TT-123-456-A')).toBe('TT123456A')
    })

    it('truncates to 9 characters', () => {
      expect(nis.format('TT123456ABCD')).toBe('TT123456A')
    })

    it('handles null and undefined', () => {
      expect(nis.format(null as any)).toBe('')
      expect(nis.format(undefined as any)).toBe('')
    })
  })
})
