import { describe, it, expect } from 'vitest'
import * as dui from '../../src/sv/dui.js'

describe('sv.dui', () => {
  describe('validate', () => {
    it('should validate correct 9-digit DUI', () => {
      expect(dui.validate('12345678-9')).toBe(true)
      expect(dui.validate('123456789')).toBe(true)
    })

    it('should reject invalid DUI', () => {
      expect(dui.validate('12345')).toBe(false)
      expect(dui.validate('1234567890')).toBe(false)
      expect(dui.validate('12345678')).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(dui.validate(null as any)).toBe(false)
      expect(dui.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('should format DUI with hyphen', () => {
      expect(dui.format('123456789')).toBe('12345678-9')
    })

    it('should format partial DUI progressively', () => {
      expect(dui.format('123456')).toBe('123456')
      expect(dui.format('12345678')).toBe('12345678')
    })

    it('should truncate extra digits', () => {
      expect(dui.format('1234567890')).toBe('12345678-9')
    })
  })

  describe('strip', () => {
    it('should remove hyphen and non-digits', () => {
      expect(dui.strip('12345678-9')).toBe('123456789')
      expect(dui.strip('12345678.9')).toBe('123456789')
      expect(dui.strip('12345678 9')).toBe('123456789')
    })
  })

  describe('mask', () => {
    it('should export correct mask', () => {
      expect(dui.mask).toBe('########-#')
    })
  })
})
