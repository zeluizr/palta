import { describe, it, expect } from 'vitest'
import * as phone from '../../src/sv/phone.js'

describe('sv.phone', () => {
  describe('constants', () => {
    it('should export correct country code', () => {
      expect(phone.countryCode).toBe('+503')
    })

    it('should export correct mask', () => {
      expect(phone.mask).toBe('+503 ####-####')
    })
  })

  describe('validate', () => {
    it('should validate correct 8-digit phone', () => {
      expect(phone.validate('71234567')).toBe(true)
      expect(phone.validate('61234567')).toBe(true)
      expect(phone.validate('21234567')).toBe(true)
    })

    it('should reject invalid phone', () => {
      expect(phone.validate('1234567')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('123')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format phone with country code', () => {
      expect(phone.format('71234567')).toBe('+503 7123-4567')
    })

    it('should format partial phone progressively', () => {
      expect(phone.format('7123')).toBe('+503 7123')
      expect(phone.format('712345')).toBe('+503 7123-45')
    })

    it('should handle empty input', () => {
      expect(phone.format('')).toBe('')
    })

    it('should truncate extra digits', () => {
      expect(phone.format('712345679999')).toBe('+503 7123-4567')
    })
  })

  describe('strip', () => {
    it('should remove country code and non-digits', () => {
      expect(phone.strip('+503 7123-4567')).toBe('71234567')
      expect(phone.strip('503 7123-4567')).toBe('71234567')
      expect(phone.strip('7123-4567')).toBe('71234567')
    })
  })
})
