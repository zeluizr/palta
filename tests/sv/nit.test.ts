import { describe, it, expect } from 'vitest'
import * as nit from '../../src/sv/nit.js'

describe('sv.nit', () => {
  describe('validate', () => {
    it('should validate correct 14-digit NIT', () => {
      expect(nit.validate('0614-123456-101-0')).toBe(true)
      expect(nit.validate('06141234561010')).toBe(true)
    })

    it('should reject invalid NIT', () => {
      expect(nit.validate('123')).toBe(false)
      expect(nit.validate('0614-123456-101')).toBe(false)
      expect(nit.validate('061412345610100')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(nit.validate(null as any)).toBe(false)
      expect(nit.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format NIT with hyphens', () => {
      expect(nit.format('06141234561010')).toBe('0614-123456-101-0')
    })

    it('should format partial NIT progressively', () => {
      expect(nit.format('0614')).toBe('0614')
      expect(nit.format('0614123')).toBe('0614-123')
      expect(nit.format('0614123456')).toBe('0614-123456')
      expect(nit.format('0614123456101')).toBe('0614-123456-101')
    })

    it('should truncate extra digits', () => {
      expect(nit.format('061412345610109999')).toBe('0614-123456-101-0')
    })
  })

  describe('strip', () => {
    it('should remove hyphens and non-digits', () => {
      expect(nit.strip('0614-123456-101-0')).toBe('06141234561010')
      expect(nit.strip('0614.123456.101.0')).toBe('06141234561010')
      expect(nit.strip('0614 123456 101 0')).toBe('06141234561010')
    })
  })

  describe('mask', () => {
    it('should export correct mask', () => {
      expect(nit.mask).toBe('####-######-###-#')
    })
  })
})
