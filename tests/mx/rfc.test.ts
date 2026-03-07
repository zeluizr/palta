import { describe, it, expect } from 'vitest'
import * as rfc from '../../src/mx/rfc.js'

describe('mx/rfc', () => {
  describe('strip', () => {
    it('removes spaces and hyphens and uppercases', () => {
      expect(rfc.strip('GODE 560704 RJ1')).toBe('GODE560704RJ1')
      expect(rfc.strip('gode-560704-rj1')).toBe('GODE560704RJ1')
      expect(rfc.strip('GODE560704RJ1')).toBe('GODE560704RJ1')
    })
    it('handles null/undefined', () => {
      expect(rfc.strip(null as unknown as string)).toBe('')
      expect(rfc.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates persona fisica RFC', () => {
      expect(rfc.validate('GODE560704RJ1')).toBe(true)
    })
    it('validates persona moral RFC', () => {
      expect(rfc.validate('ACO560104JN8')).toBe(true)
    })
    it('validates anonymous RFC XAXX010101000', () => {
      expect(rfc.validate('XAXX010101000')).toBe(true)
    })
    it('validates with spaces in input', () => {
      expect(rfc.validate('GODE 560704 RJ1')).toBe(true)
    })
    it('rejects empty string', () => {
      expect(rfc.validate('')).toBe(false)
    })
    it('rejects null/undefined', () => {
      expect(rfc.validate(null as unknown as string)).toBe(false)
      expect(rfc.validate(undefined as unknown as string)).toBe(false)
    })
    it('rejects wrong length', () => {
      expect(rfc.validate('GODE56070')).toBe(false)
      expect(rfc.validate('GODE560704RJ1EXTRA')).toBe(false)
    })
    it('rejects invalid format (numbers where letters expected)', () => {
      expect(rfc.validate('1234560704RJ1')).toBe(false)
    })
    it('rejects invalid date in RFC', () => {
      expect(rfc.validate('GODE561304RJ1')).toBe(false)
    })
  })

  describe('format', () => {
    it('formats persona fisica RFC', () => {
      expect(rfc.format('GODE560704RJ1')).toBe('GODE 560704 RJ1')
    })
    it('formats persona moral RFC', () => {
      expect(rfc.format('ACO560104JN8')).toBe('ACO 560104 JN8')
    })
    it('returns as-is if not valid format', () => {
      expect(rfc.format('INVALID')).toBe('INVALID')
    })
    it('strips input before formatting', () => {
      expect(rfc.format('gode560704rj1')).toBe('GODE 560704 RJ1')
    })
  })

  describe('mask', () => {
    it('returns correct masks', () => {
      expect(rfc.mask.fisica).toBe('LLLL YYMMDD XXX')
      expect(rfc.mask.moral).toBe('LLL YYMMDD XXX')
    })
  })
})
