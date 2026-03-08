import { describe, expect, it } from 'vitest'
import * as phone from '../../src/tt/phone'

describe('tt.phone', () => {
  describe('constants', () => {
    it('has correct country code', () => {
      expect(phone.countryCode).toBe('+1')
    })

    it('has correct mask', () => {
      expect(phone.mask).toBe('+1 (###) ###-####')
    })
  })

  describe('strip', () => {
    it('removes formatting characters', () => {
      expect(phone.strip('+1 (868) 123-4567')).toBe('8681234567')
      expect(phone.strip('(868) 123-4567')).toBe('8681234567')
      expect(phone.strip('868-123-4567')).toBe('8681234567')
      expect(phone.strip('868 123 4567')).toBe('8681234567')
    })

    it('removes leading 1 if present and total is 11 digits', () => {
      expect(phone.strip('18681234567')).toBe('8681234567')
      expect(phone.strip('+1 868 123 4567')).toBe('8681234567')
    })

    it('handles null and undefined', () => {
      expect(phone.strip(null as any)).toBe('')
      expect(phone.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('returns true for valid 868 prefix numbers', () => {
      expect(phone.validate('8681234567')).toBe(true)
      expect(phone.validate('868-123-4567')).toBe(true)
      expect(phone.validate('+1 (868) 123-4567')).toBe(true)
      expect(phone.validate('18681234567')).toBe(true)
    })

    it('returns false for non-868 NANP numbers', () => {
      expect(phone.validate('2125551234')).toBe(false) // NYC
      expect(phone.validate('4165551234')).toBe(false) // Toronto
    })

    it('returns false for invalid lengths', () => {
      expect(phone.validate('868123456')).toBe(false) // too short
      expect(phone.validate('86812345678')).toBe(false) // too long
      expect(phone.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats valid numbers in international format by default', () => {
      expect(phone.format('8681234567')).toBe('+1 (868) 123-4567')
      expect(phone.format('18681234567')).toBe('+1 (868) 123-4567')
    })

    it('formats in local format when international is false', () => {
      expect(phone.format('8681234567', { international: false })).toBe(
        '(868) 123-4567'
      )
    })

    it('returns original value for invalid input', () => {
      expect(phone.format('123')).toBe('123')
      expect(phone.format('invalid')).toBe('invalid')
    })

    it('handles null and undefined', () => {
      expect(phone.format(null as any)).toBe('')
      expect(phone.format(undefined as any)).toBe('')
    })
  })
})
