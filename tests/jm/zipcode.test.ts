import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/jm/zipcode.js'

describe('jm/zipcode', () => {
  describe('validate', () => {
    it('valida código com 4 dígitos', () => {
      expect(zipcode.validate('1234')).toBe(true)
    })
    it('valida código com 8 dígitos', () => {
      expect(zipcode.validate('12345678')).toBe(true)
    })
    it('rejeita código fora do range', () => {
      expect(zipcode.validate('123')).toBe(false)
      expect(zipcode.validate('123456789')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('retorna dígitos', () => {
      expect(zipcode.format('12345')).toBe('12345')
    })
    it('trunca para 8 dígitos', () => {
      expect(zipcode.format('123456789')).toBe('12345678')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('12.345')).toBe('12345')
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
