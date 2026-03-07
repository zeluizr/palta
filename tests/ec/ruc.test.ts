import { describe, it, expect } from 'vitest'
import * as ruc from '../../src/ec/ruc.js'

describe('ec/ruc', () => {
  describe('strip', () => {
    it('removes non-digits', () => {
      expect(ruc.strip('1790085783001')).toBe('1790085783001')
    })
    it('handles null/undefined', () => {
      expect(ruc.strip(null as unknown as string)).toBe('')
      expect(ruc.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('validates persona natural (CI-based)', () => {
      // 1713175071 is a valid CI, so 1713175071001 is a valid natural person RUC
      expect(ruc.validate('1713175071001')).toBe(true)
    })
    it('rejects persona natural with invalid CI', () => {
      expect(ruc.validate('1713175070001')).toBe(false)
    })
    it('rejects persona natural with wrong suffix', () => {
      expect(ruc.validate('1713175071002')).toBe(false)
    })
    it('validates sociedad privada (d[2]=9)', () => {
      // 1790085783001: d[2]=9, weights=[4,3,2,7,6,5,4,3,2]
      // sum = 1*4+7*3+9*2+0*7+0*6+8*5+5*4+7*3+8*2 = 4+21+18+0+0+40+20+21+16 = 140
      // rem = 140%11 = 8, check = 11-8 = 3, d[9]=3 ✓
      expect(ruc.validate('1790085783001')).toBe(true)
    })
    it('rejects sociedad privada with wrong check digit', () => {
      expect(ruc.validate('1790085784001')).toBe(false)
    })
    it('rejects sociedad privada with wrong suffix', () => {
      expect(ruc.validate('1790085783002')).toBe(false)
    })
    it('validates entidad pública (d[2]=6)', () => {
      // 1760001550001: d[2]=6, WEIGHTS_PUBLIC=[3,2,7,6,5,4,3,2] on digits 0-7
      // sum = 1*3+7*2+6*7+0*6+0*5+0*4+1*3+5*2 = 3+14+42+0+0+0+3+10 = 72
      // rem = 72%11 = 6, expected = 11-6 = 5, d[8]=5, suffix d.slice(9)='0001' ✓
      expect(ruc.validate('1760001550001')).toBe(true)
    })
    it('rejects entidad pública with wrong check digit', () => {
      expect(ruc.validate('1760001560001')).toBe(false)
    })
    it('rejects wrong length', () => {
      expect(ruc.validate('179008578300')).toBe(false)
      expect(ruc.validate('17900857830010')).toBe(false)
    })
    it('rejects empty/null/undefined', () => {
      expect(ruc.validate('')).toBe(false)
      expect(ruc.validate(null as unknown as string)).toBe(false)
      expect(ruc.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('returns digits as-is', () => {
      expect(ruc.format('1790085783001')).toBe('1790085783001')
    })
    it('caps output to 13 digits', () => {
      expect(ruc.format('17900857830010')).toBe('1790085783001')
    })
  })

  describe('mask', () => {
    it('returns correct mask', () => {
      expect(ruc.mask).toBe('#############')
    })
  })
})
