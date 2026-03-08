import { describe, expect, it } from 'vitest'
import * as phone from '../../src/pr/phone.js'

describe('pr/phone', () => {
  describe('validate', () => {
    it('returns true for 10 digits with area code 787', () => {
      expect(phone.validate('7871234567')).toBe(true)
      expect(phone.validate('787-123-4567')).toBe(true)
      expect(phone.validate('+1 787-123-4567')).toBe(true)
      expect(phone.validate('17871234567')).toBe(true)
    })

    it('returns true for 10 digits with area code 939', () => {
      expect(phone.validate('9391234567')).toBe(true)
      expect(phone.validate('939-123-4567')).toBe(true)
      expect(phone.validate('+1 939-123-4567')).toBe(true)
      expect(phone.validate('19391234567')).toBe(true)
    })

    it('returns false for invalid area codes', () => {
      expect(phone.validate('2121234567')).toBe(false)
      expect(phone.validate('3051234567')).toBe(false)
      expect(phone.validate('7861234567')).toBe(false)
    })

    it('returns false for invalid length', () => {
      expect(phone.validate('787123456')).toBe(false)
      expect(phone.validate('78712345678')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats 10 digits with international format by default', () => {
      expect(phone.format('7871234567')).toBe('+1 (787) 123-4567')
      expect(phone.format('9391234567')).toBe('+1 (939) 123-4567')
    })

    it('formats with country code 1 prefix', () => {
      expect(phone.format('17871234567')).toBe('+1 (787) 123-4567')
      expect(phone.format('19391234567')).toBe('+1 (939) 123-4567')
    })

    it('formats without international prefix when specified', () => {
      expect(phone.format('7871234567', { international: false })).toBe('(787) 123-4567')
      expect(phone.format('9391234567', { international: false })).toBe('(939) 123-4567')
    })

    it('returns original value for invalid input', () => {
      expect(phone.format('123')).toBe('123')
      expect(phone.format('')).toBe('')
    })

    it('handles null and undefined', () => {
      expect(phone.format(null as any)).toBe('')
      expect(phone.format(undefined as any)).toBe('')
    })
  })

  describe('strip', () => {
    it('removes non-digits', () => {
      expect(phone.strip('+1 (787) 123-4567')).toBe('7871234567')
      expect(phone.strip('787-123-4567')).toBe('7871234567')
      expect(phone.strip('(787) 123-4567')).toBe('7871234567')
    })

    it('removes country code 1 prefix', () => {
      expect(phone.strip('17871234567')).toBe('7871234567')
      expect(phone.strip('+1 7871234567')).toBe('7871234567')
    })

    it('handles null and undefined', () => {
      expect(phone.strip(null as any)).toBe('')
      expect(phone.strip(undefined as any)).toBe('')
    })
  })

  describe('constants', () => {
    it('exports correct country code', () => {
      expect(phone.countryCode).toBe('+1')
    })

    it('exports correct mask', () => {
      expect(phone.mask).toBe('+1 (###) ###-####')
    })
  })
})
