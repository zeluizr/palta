import { describe, expect, it } from 'vitest'
import * as phone from '../../src/ht/phone.js'

describe('ht.phone', () => {
  describe('constants', () => {
    it('should have correct country code', () => {
      expect(phone.countryCode).toBe('+509')
    })

    it('should have correct mask', () => {
      expect(phone.mask).toBe('+509 #### ####')
    })
  })

  describe('validate', () => {
    it('should return true for valid 8-digit phone', () => {
      expect(phone.validate('12345678')).toBe(true)
      expect(phone.validate('98765432')).toBe(true)
    })

    it('should return true for phone with country code', () => {
      expect(phone.validate('50912345678')).toBe(true)
      expect(phone.validate('+50912345678')).toBe(true)
    })

    it('should return false for invalid length', () => {
      expect(phone.validate('1234567')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format 8-digit phone with country code', () => {
      expect(phone.format('12345678')).toBe('+509 1234 5678')
      expect(phone.format('98765432')).toBe('+509 9876 5432')
    })

    it('should handle phone with country code', () => {
      expect(phone.format('50912345678')).toBe('+509 1234 5678')
      expect(phone.format('+509 1234 5678')).toBe('+509 1234 5678')
    })

    it('should handle incomplete phone', () => {
      expect(phone.format('123')).toBe('+509 123')
      expect(phone.format('1234')).toBe('+509 1234')
    })

    it('should handle empty input', () => {
      expect(phone.format('')).toBe('')
    })
  })

  describe('strip', () => {
    it('should remove country code and non-digits', () => {
      expect(phone.strip('+509 1234 5678')).toBe('12345678')
      expect(phone.strip('509-1234-5678')).toBe('12345678')
    })

    it('should keep only local digits', () => {
      expect(phone.strip('abc12345678def')).toBe('12345678')
    })

    it('should handle null/undefined', () => {
      expect(phone.strip(null as any)).toBe('')
      expect(phone.strip(undefined as any)).toBe('')
    })
  })
})
