import { describe, it, expect } from 'vitest'
import * as ci from '../../src/ec/ci.js'

describe('ec/ci', () => {
  describe('strip', () => {
    it('removes non-digits', () => {
      expect(ci.strip('1713175071')).toBe('1713175071')
      expect(ci.strip('17-1317-5071')).toBe('1713175071')
    })
    it('handles null/undefined', () => {
      expect(ci.strip(null as unknown as string)).toBe('')
      expect(ci.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates a known valid CI', () => {
      expect(ci.validate('1713175071')).toBe(true)
    })
    it('rejects wrong check digit', () => {
      expect(ci.validate('1713175070')).toBe(false)
      expect(ci.validate('1713175072')).toBe(false)
    })
    it('rejects invalid province (00)', () => {
      expect(ci.validate('0013175071')).toBe(false)
    })
    it('rejects invalid province (25)', () => {
      expect(ci.validate('2513175071')).toBe(false)
    })
    it('rejects invalid third digit (6-9)', () => {
      expect(ci.validate('1763175071')).toBe(false)
    })
    it('rejects wrong length', () => {
      expect(ci.validate('171317507')).toBe(false)
      expect(ci.validate('17131750710')).toBe(false)
    })
    it('rejects empty/null/undefined', () => {
      expect(ci.validate('')).toBe(false)
      expect(ci.validate(null as unknown as string)).toBe(false)
      expect(ci.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('returns the digits as-is', () => {
      expect(ci.format('1713175071')).toBe('1713175071')
    })
    it('caps output to 10 digits', () => {
      expect(ci.format('17131750710')).toBe('1713175071')
    })
  })

  describe('mask', () => {
    it('returns correct mask', () => {
      expect(ci.mask).toBe('##########')
    })
  })
})
