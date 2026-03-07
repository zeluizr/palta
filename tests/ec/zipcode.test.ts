import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/ec/zipcode.js'

describe('ec/zipcode', () => {
  describe('strip', () => {
    it('removes non-digits', () => {
      expect(zipcode.strip('170150')).toBe('170150')
      expect(zipcode.strip('17-0150')).toBe('170150')
    })
    it('handles null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates 6-digit zipcode', () => {
      expect(zipcode.validate('170150')).toBe(true)
    })
    it('rejects wrong length', () => {
      expect(zipcode.validate('17015')).toBe(false)
      expect(zipcode.validate('1701500')).toBe(false)
    })
    it('handles null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('returns 6-digit zipcode', () => {
      expect(zipcode.format('170150')).toBe('170150')
    })
    it('pads with leading zeros', () => {
      expect(zipcode.format('17015')).toBe('017015')
    })
    it('trims to 6 digits when longer', () => {
      expect(zipcode.format('1701500')).toBe('170150')
    })
  })

  describe('mask', () => {
    it('returns correct mask', () => {
      expect(zipcode.mask).toBe('######')
    })
  })
})
