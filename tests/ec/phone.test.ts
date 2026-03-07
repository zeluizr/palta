import { describe, it, expect } from 'vitest'
import * as phone from '../../src/ec/phone.js'

describe('ec/phone', () => {
  describe('strip', () => {
    it('strips country code +593', () => {
      expect(phone.strip('+593991234567')).toBe('991234567')
    })
    it('strips leading zero from 10-digit mobile', () => {
      expect(phone.strip('0991234567')).toBe('991234567')
    })
    it('returns bare 9-digit mobile as-is', () => {
      expect(phone.strip('991234567')).toBe('991234567')
    })
    it('returns bare 8-digit landline as-is', () => {
      expect(phone.strip('22123456')).toBe('22123456')
    })
    it('handles null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates mobile (9 digits starting with 9)', () => {
      expect(phone.validate('991234567')).toBe(true)
      expect(phone.validate('981234567')).toBe(true)
    })
    it('validates landline (8 digits)', () => {
      expect(phone.validate('22123456')).toBe(true)
    })
    it('rejects invalid lengths', () => {
      expect(phone.validate('9912345')).toBe(false)
      expect(phone.validate('99123456789')).toBe(false)
    })
    it('handles null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats mobile number', () => {
      expect(phone.format('991234567')).toBe('+593 99 123 4567')
    })
    it('formats landline number', () => {
      expect(phone.format('22123456')).toBe('+593 2 212 3456')
    })
    it('formats from +593 prefix', () => {
      expect(phone.format('+593991234567')).toBe('+593 99 123 4567')
    })
    it('formats mobile without country code when international: false', () => {
      expect(phone.format('991234567', { international: false })).toBe('99 123 4567')
    })
    it('formats landline without country code when international: false', () => {
      expect(phone.format('22123456', { international: false })).toBe('2 212 3456')
    })
  })

  describe('constants', () => {
    it('has correct country code', () => {
      expect(phone.countryCode).toBe('+593')
    })
    it('has mobile and landline masks', () => {
      expect(phone.mask.mobile).toBe('+593 9# ### ####')
      expect(phone.mask.landline).toBe('+593 # ### ####')
    })
  })
})
