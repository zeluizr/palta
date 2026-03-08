import { describe, expect, it } from 'vitest'
import * as ssn from '../../src/pr/ssn.js'

describe('pr/ssn', () => {
  describe('validate', () => {
    it('returns true for 9 digits', () => {
      expect(ssn.validate('123456789')).toBe(true)
      expect(ssn.validate('123-45-6789')).toBe(true)
      expect(ssn.validate('987-65-4321')).toBe(true)
    })

    it('returns false for invalid length', () => {
      expect(ssn.validate('12345678')).toBe(false)
      expect(ssn.validate('1234567890')).toBe(false)
      expect(ssn.validate('')).toBe(false)
    })

    it('handles null and undefined', () => {
      expect(ssn.validate(null as any)).toBe(false)
      expect(ssn.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formats 9 digits as XXX-XX-XXXX', () => {
      expect(ssn.format('123456789')).toBe('123-45-6789')
      expect(ssn.format('987654321')).toBe('987-65-4321')
    })

    it('preserves already formatted SSN', () => {
      expect(ssn.format('123-45-6789')).toBe('123-45-6789')
    })

    it('returns original value for invalid input', () => {
      expect(ssn.format('12345')).toBe('12345')
      expect(ssn.format('')).toBe('')
    })

    it('handles null and undefined', () => {
      expect(ssn.format(null as any)).toBe('')
      expect(ssn.format(undefined as any)).toBe('')
    })
  })

  describe('strip', () => {
    it('removes non-digits', () => {
      expect(ssn.strip('123-45-6789')).toBe('123456789')
      expect(ssn.strip('987-65-4321')).toBe('987654321')
      expect(ssn.strip('123 45 6789')).toBe('123456789')
    })

    it('handles null and undefined', () => {
      expect(ssn.strip(null as any)).toBe('')
      expect(ssn.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('exports correct mask', () => {
      expect(ssn.mask).toBe('###-##-####')
    })
  })
})
