import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/bo/zipcode.js'

describe('bo/zipcode', () => {
  describe('validate', () => {
    it('valida zipcode com 4 dígitos', () => {
      expect(zipcode.validate('1234')).toBe(true)
    })
    it('valida zipcode com 8 dígitos', () => {
      expect(zipcode.validate('12345678')).toBe(true)
    })
    it('rejeita zipcode com menos de 4 dígitos', () => {
      expect(zipcode.validate('123')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('rejeita zipcode com mais de 8 dígitos', () => {
      expect(zipcode.validate('123456789')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('retorna apenas dígitos', () => {
      expect(zipcode.format('12345')).toBe('12345')
      expect(zipcode.format('12-345')).toBe('12345')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('12-345')).toBe('12345')
      expect(zipcode.strip('12 345')).toBe('12345')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('########')
    })
  })
})
