import { describe, it, expect } from 'vitest'
import * as curp from '../../src/mx/curp.js'

describe('mx/curp', () => {
  describe('strip', () => {
    it('removes spaces and uppercases', () => {
      expect(curp.strip('hegg560427mvzrrl04')).toBe('HEGG560427MVZRRL04')
      expect(curp.strip('HEGG 560427 MVZRRL 04')).toBe('HEGG560427MVZRRL04')
    })
    it('handles null/undefined', () => {
      expect(curp.strip(null as unknown as string)).toBe('')
      expect(curp.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates a valid CURP', () => {
      expect(curp.validate('HEGG560427MVZRRL04')).toBe(true)
    })
    it('rejects CURP with wrong check digit', () => {
      expect(curp.validate('HEGG560427MVZRRL09')).toBe(false)
    })
    it('rejects wrong length', () => {
      expect(curp.validate('HEGG560427MVZRRL')).toBe(false)
      expect(curp.validate('HEGG560427MVZRRL0499')).toBe(false)
    })
    it('rejects invalid state code', () => {
      expect(curp.validate('HEGG560427MXZRRL04')).toBe(false)
    })
    it('rejects empty string', () => {
      expect(curp.validate('')).toBe(false)
    })
    it('rejects null/undefined', () => {
      expect(curp.validate(null as unknown as string)).toBe(false)
      expect(curp.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('returns stripped/uppercased CURP', () => {
      expect(curp.format('hegg560427mvzrrl04')).toBe('HEGG560427MVZRRL04')
      expect(curp.format('HEGG560427MVZRRL04')).toBe('HEGG560427MVZRRL04')
    })
  })

  describe('mask', () => {
    it('returns correct mask', () => {
      expect(curp.mask).toBe('LLLLYYMMDDHLLEENN#')
    })
  })
})
