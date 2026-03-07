import { describe, it, expect } from 'vitest'
import * as phone from '../../src/mx/phone.js'

describe('mx/phone', () => {
  describe('strip', () => {
    it('removes non-digits', () => {
      expect(phone.strip('+52 55 1234 5678')).toBe('5512345678')
    })
    it('removes +52 country code prefix when longer than 10 digits', () => {
      expect(phone.strip('+525512345678')).toBe('5512345678')
    })
    it('keeps 10-digit number as-is', () => {
      expect(phone.strip('5512345678')).toBe('5512345678')
    })
    it('handles null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates a 10-digit number', () => {
      expect(phone.validate('5512345678')).toBe(true)
    })
    it('validates with country code prefix', () => {
      expect(phone.validate('+525512345678')).toBe(true)
    })
    it('rejects fewer than 10 digits', () => {
      expect(phone.validate('551234567')).toBe(false)
    })
    it('rejects more than 10 digits (without country code)', () => {
      expect(phone.validate('55123456789')).toBe(false)
    })
    it('handles null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats 10-digit number', () => {
      expect(phone.format('5512345678')).toBe('+52 55 1234 5678')
    })
    it('formats with country code in input', () => {
      expect(phone.format('+525512345678')).toBe('+52 55 1234 5678')
    })
    it('returns original value if not 10 digits', () => {
      expect(phone.format('123')).toBe('123')
    })
  })

  describe('constants', () => {
    it('has correct countryCode', () => {
      expect(phone.countryCode).toBe('+52')
    })
    it('has correct mask', () => {
      expect(phone.mask).toBe('+52 XX XXXX XXXX')
    })
  })
})
