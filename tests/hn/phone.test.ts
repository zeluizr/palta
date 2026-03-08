import { describe, it, expect } from 'vitest'
import * as phone from '../../src/hn/phone.js'

describe('hn/phone', () => {
  describe('constants', () => {
    it('exporta countryCode e mask', () => {
      expect(phone.countryCode).toBe('+504')
      expect(phone.mask).toBe('+504 ####-####')
    })
  })

  describe('validate', () => {
    it('valida número com 8 dígitos', () => {
      expect(phone.validate('91234567')).toBe(true)
      expect(phone.validate('81234567')).toBe(true)
      expect(phone.validate('22345678')).toBe(true)
    })
    it('rejeita comprimento inválido', () => {
      expect(phone.validate('1234567')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata número (8 dígitos) internacional', () => {
      expect(phone.format('91234567')).toBe('+504 9123-4567')
      expect(phone.format('91234567', { international: true })).toBe('+504 9123-4567')
    })
    it('formata número (8 dígitos) local', () => {
      expect(phone.format('91234567', { international: false })).toBe('9123-4567')
    })
    it('retorna valor original para comprimento inválido', () => {
      expect(phone.format('1234567')).toBe('1234567')
    })
  })

  describe('strip', () => {
    it('remove countryCode e formatação', () => {
      expect(phone.strip('+504 9123-4567')).toBe('91234567')
      expect(phone.strip('504 9123-4567')).toBe('91234567')
      expect(phone.strip('91234567')).toBe('91234567')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })
})
