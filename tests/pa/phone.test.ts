import { describe, it, expect } from 'vitest'
import * as phone from '../../src/pa/phone.js'

describe('pa/phone', () => {
  describe('constants', () => {
    it('exporta countryCode e mask', () => {
      expect(phone.countryCode).toBe('+507')
      expect(phone.mask).toBe('+507 #### ####')
    })
  })

  describe('validate', () => {
    it('valida celular com 8 dígitos', () => {
      expect(phone.validate('61234567')).toBe(true)
    })
    it('valida fixo com 7 dígitos', () => {
      expect(phone.validate('1234567')).toBe(true)
    })
    it('rejeita comprimento inválido', () => {
      expect(phone.validate('123456')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata celular (8 dígitos) internacional', () => {
      expect(phone.format('61234567')).toBe('+507 6123 4567')
      expect(phone.format('61234567', { international: true })).toBe('+507 6123 4567')
    })
    it('formata celular (8 dígitos) local', () => {
      expect(phone.format('61234567', { international: false })).toBe('6123 4567')
    })
    it('formata fixo (7 dígitos) internacional', () => {
      expect(phone.format('1234567')).toBe('+507 123 4567')
      expect(phone.format('1234567', { international: true })).toBe('+507 123 4567')
    })
    it('formata fixo (7 dígitos) local', () => {
      expect(phone.format('1234567', { international: false })).toBe('123 4567')
    })
    it('retorna valor original para comprimento inválido', () => {
      expect(phone.format('123456')).toBe('123456')
    })
  })

  describe('strip', () => {
    it('remove countryCode e formatação', () => {
      expect(phone.strip('+507 6123 4567')).toBe('61234567')
      expect(phone.strip('507 6123 4567')).toBe('61234567')
      expect(phone.strip('00507 6123 4567')).toBe('61234567')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })
})
