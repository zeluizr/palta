import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/cr/zipcode.js'

describe('cr/zipcode', () => {
  describe('validate', () => {
    it('valida zipcode com 5 dígitos', () => {
      expect(zipcode.validate('12345')).toBe(true)
      expect(zipcode.validate('00001')).toBe(true)
    })
    it('rejeita zipcode com comprimento inválido', () => {
      expect(zipcode.validate('1234')).toBe(false)
      expect(zipcode.validate('123456')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata zipcode com padding', () => {
      expect(zipcode.format('123')).toBe('00123')
      expect(zipcode.format('12345')).toBe('12345')
    })
    it('trunca valores muito longos', () => {
      expect(zipcode.format('123456')).toBe('12345')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('12-345')).toBe('12345')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
