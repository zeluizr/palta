import { describe, expect, it } from 'vitest'
import * as tin from '../../src/tt/tin'

describe('tt.tin', () => {
  describe('mask', () => {
    it('returns the correct mask', () => {
      expect(tin.mask).toBe('###-###-###')
    })
  })

  describe('strip', () => {
    it('removes non-digit characters', () => {
      expect(tin.strip('123-456-789')).toBe('123456789')
      expect(tin.strip('123.456.789')).toBe('123456789')
      expect(tin.strip('123 456 789')).toBe('123456789')
      expect(tin.strip('abc123456789xyz')).toBe('123456789')
    })

    it('handles null and undefined', () => {
      expect(tin.strip(null as any)).toBe('')
      expect(tin.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('returns true for valid 9-digit TIN', () => {
      expect(tin.validate('123456789')).toBe(true)
      expect(tin.validate('123-456-789')).toBe(true)
      expect(tin.validate('987654321')).toBe(true)
    })

    it('returns false for invalid TIN', () => {
      expect(tin.validate('12345678')).toBe(false)
      expect(tin.validate('1234567890')).toBe(false)
      expect(tin.validate('')).toBe(false)
      expect(tin.validate('abc')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(tin.validate(null as any)).toBe(false)
      expect(tin.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats valid 9-digit TIN as XXX-XXX-XXX', () => {
      expect(tin.format('123456789')).toBe('123-456-789')
      expect(tin.format('987654321')).toBe('987-654-321')
    })

    it('handles already formatted TIN', () => {
      expect(tin.format('123-456-789')).toBe('123-456-789')
    })

    it('returns original value for invalid input', () => {
      expect(tin.format('12345')).toBe('12345')
      expect(tin.format('invalid')).toBe('invalid')
    })

    it('handles null and undefined', () => {
      expect(tin.format(null as any)).toBe('')
      expect(tin.format(undefined as any)).toBe('')
    })
  })
})
