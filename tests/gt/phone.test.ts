import { describe, it, expect } from 'vitest'
import * as phone from '../../src/gt/phone.js'

describe('gt.phone', () => {
  describe('constants', () => {
    it('should have correct country code', () => {
      expect(phone.countryCode).toBe('+502')
    })

    it('should have correct mask', () => {
      expect(phone.mask).toBe('+502 #### ####')
    })
  })

  describe('strip', () => {
    it('should remove country code', () => {
      expect(phone.strip('+502 1234 5678')).toBe('12345678')
    })

    it('should remove country code without +', () => {
      expect(phone.strip('502 1234 5678')).toBe('12345678')
    })

    it('should handle already stripped', () => {
      expect(phone.strip('12345678')).toBe('12345678')
    })

    it('should remove non-digits', () => {
      expect(phone.strip('1234-5678')).toBe('12345678')
    })

    it('should handle empty string', () => {
      expect(phone.strip('')).toBe('')
    })
  })

  describe('validate', () => {
    it('should validate 8 digits', () => {
      expect(phone.validate('12345678')).toBe(true)
    })

    it('should validate with country code', () => {
      expect(phone.validate('+502 1234 5678')).toBe(true)
    })

    it('should invalidate less than 8 digits', () => {
      expect(phone.validate('1234567')).toBe(false)
    })

    it('should invalidate more than 8 digits (without country code)', () => {
      expect(phone.validate('123456789')).toBe(false)
    })

    it('should invalidate empty string', () => {
      expect(phone.validate('')).toBe(false)
    })
  })

  describe('format', () => {
    it('should format with country code by default', () => {
      expect(phone.format('12345678')).toBe('+502 1234 5678')
    })

    it('should format without country code when international=false', () => {
      expect(phone.format('12345678', { international: false })).toBe('1234 5678')
    })

    it('should format already formatted number', () => {
      expect(phone.format('+502 1234 5678')).toBe('+502 1234 5678')
    })

    it('should return original if invalid length', () => {
      expect(phone.format('123')).toBe('123')
    })

    it('should handle empty string', () => {
      expect(phone.format('')).toBe('')
    })
  })
})
