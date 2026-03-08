import { describe, expect, it } from 'vitest'
import * as ein from '../../src/pr/ein.js'

describe('pr/ein', () => {
  describe('validate', () => {
    it('returns true for 9 digits', () => {
      expect(ein.validate('123456789')).toBe(true)
      expect(ein.validate('12-3456789')).toBe(true)
      expect(ein.validate('66-1234567')).toBe(true)
    })

    it('returns false for invalid length', () => {
      expect(ein.validate('12345678')).toBe(false)
      expect(ein.validate('1234567890')).toBe(false)
      expect(ein.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(ein.validate(null as any)).toBe(false)
      expect(ein.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats 9 digits as XX-XXXXXXX', () => {
      expect(ein.format('123456789')).toBe('12-3456789')
      expect(ein.format('661234567')).toBe('66-1234567')
    })

    it('preserves already formatted EIN', () => {
      expect(ein.format('12-3456789')).toBe('12-3456789')
    })

    it('returns original value for invalid input', () => {
      expect(ein.format('12345')).toBe('12345')
      expect(ein.format('')).toBe('')
    })

    it('handles null and undefined', () => {
      expect(ein.format(null as any)).toBe('')
      expect(ein.format(undefined as any)).toBe('')
    })
  })

  describe('strip', () => {
    it('removes non-digits', () => {
      expect(ein.strip('12-3456789')).toBe('123456789')
      expect(ein.strip('66-1234567')).toBe('661234567')
      expect(ein.strip('12 345 6789')).toBe('123456789')
    })

    it('handles null and undefined', () => {
      expect(ein.strip(null as any)).toBe('')
      expect(ein.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('exports correct mask', () => {
      expect(ein.mask).toBe('##-#######')
    })
  })
})
