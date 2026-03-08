import { describe, expect, it } from 'vitest'
import * as zipcode from '../../src/pr/zipcode.js'

describe('pr/zipcode', () => {
  describe('validate', () => {
    it('returns true for valid Puerto Rico ZIP codes (00600-00999)', () => {
      expect(zipcode.validate('00600')).toBe(true)
      expect(zipcode.validate('00700')).toBe(true)
      expect(zipcode.validate('00800')).toBe(true)
      expect(zipcode.validate('00900')).toBe(true)
      expect(zipcode.validate('00999')).toBe(true)
      expect(zipcode.validate('00650')).toBe(true)
    })

    it('returns false for invalid prefix', () => {
      expect(zipcode.validate('00500')).toBe(false)
      expect(zipcode.validate('01000')).toBe(false)
      expect(zipcode.validate('10000')).toBe(false)
      expect(zipcode.validate('00599')).toBe(false)
    })

    it('returns false for invalid length', () => {
      expect(zipcode.validate('006')).toBe(false)
      expect(zipcode.validate('006001')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(zipcode.validate(null as any)).toBe(false)
      expect(zipcode.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('pads to 5 digits with leading zeros', () => {
      expect(zipcode.format('600')).toBe('00600')
      expect(zipcode.format('700')).toBe('00700')
      expect(zipcode.format('999')).toBe('00999')
    })

    it('preserves already formatted ZIP', () => {
      expect(zipcode.format('00600')).toBe('00600')
      expect(zipcode.format('00999')).toBe('00999')
    })

    it('truncates to 5 digits', () => {
      expect(zipcode.format('006001234')).toBe('00600')
    })

    it('handles null and undefined', () => {
      expect(zipcode.format(null as any)).toBe('00000')
      expect(zipcode.format(undefined as any)).toBe('00000')
    })
  })

  describe('strip', () => {
    it('removes non-digits', () => {
      expect(zipcode.strip('00600-1234')).toBe('006001234')
      expect(zipcode.strip('00700 USA')).toBe('00700')
      expect(zipcode.strip('PR 00800')).toBe('00800')
    })

    it('handles null and undefined', () => {
      expect(zipcode.strip(null as any)).toBe('')
      expect(zipcode.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('exports correct mask', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
