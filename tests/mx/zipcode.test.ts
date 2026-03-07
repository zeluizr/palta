import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/mx/zipcode.js'

describe('mx/zipcode', () => {
  describe('strip', () => {
    it('removes non-digits', () => {
      expect(zipcode.strip('06600')).toBe('06600')
      expect(zipcode.strip('066-00')).toBe('06600')
    })
    it('handles null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates 5-digit zipcode', () => {
      expect(zipcode.validate('06600')).toBe(true)
    })
    it('validates zipcode with leading zero', () => {
      expect(zipcode.validate('01000')).toBe(true)
    })
    it('rejects fewer than 5 digits', () => {
      expect(zipcode.validate('0660')).toBe(false)
    })
    it('rejects more than 5 digits', () => {
      expect(zipcode.validate('066000')).toBe(false)
    })
    it('handles null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('pads with leading zeros to 5 digits', () => {
      expect(zipcode.format('6600')).toBe('06600')
      expect(zipcode.format('600')).toBe('00600')
    })
    it('keeps valid 5-digit zipcode as-is', () => {
      expect(zipcode.format('06600')).toBe('06600')
    })
    it('handles null/undefined', () => {
      expect(zipcode.format(null as unknown as string)).toBe('00000')
      expect(zipcode.format(undefined as unknown as string)).toBe('00000')
    })
  })

  describe('mask', () => {
    it('returns correct mask', () => {
      expect(zipcode.mask).toBe('XXXXX')
    })
  })
})
