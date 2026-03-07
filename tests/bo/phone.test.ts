import { describe, it, expect } from 'vitest'
import * as phone from '../../src/bo/phone.js'

describe('bo/phone', () => {
  describe('validate', () => {
    it('valida celular com 8 dígitos', () => {
      expect(phone.validate('71234567')).toBe(true)
      expect(phone.validate('61234567')).toBe(true)
      expect(phone.validate('81234567')).toBe(true)
    })
    it('valida fixo com 7 dígitos', () => {
      expect(phone.validate('2123456')).toBe(true)
      expect(phone.validate('3123456')).toBe(true)
      expect(phone.validate('4123456')).toBe(true)
    })
    it('valida telefone com código de país', () => {
      expect(phone.validate('+591 71234567')).toBe(true)
      expect(phone.validate('00591 2123456')).toBe(true)
    })
    it('rejeita telefone inválido', () => {
      expect(phone.validate('123')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
  })

  describe('format', () => {
    it('formata celular (8 dígitos) internacional', () => {
      expect(phone.format('71234567')).toBe('+591 7 123 4567')
    })
    it('formata fixo (7 dígitos) internacional', () => {
      expect(phone.format('2123456')).toBe('+591 2 123 456')
    })
    it('formata celular sem internacional', () => {
      expect(phone.format('71234567', { international: false })).toBe('7 123 4567')
    })
    it('formata fixo sem internacional', () => {
      expect(phone.format('2123456', { international: false })).toBe('2 123 456')
    })
    it('remove código de país antes de formatar', () => {
      expect(phone.format('+591 71234567')).toBe('+591 7 123 4567')
      expect(phone.format('00591 2123456')).toBe('+591 2 123 456')
    })
  })

  describe('strip', () => {
    it('remove código de país +591', () => {
      expect(phone.strip('+591 71234567')).toBe('71234567')
    })
    it('remove código de país 00591', () => {
      expect(phone.strip('00591 71234567')).toBe('71234567')
    })
    it('remove código de país 591', () => {
      expect(phone.strip('591 71234567')).toBe('71234567')
    })
    it('remove não-dígitos', () => {
      expect(phone.strip('7-123-4567')).toBe('71234567')
    })
  })

  describe('constants', () => {
    it('countryCode é +591', () => {
      expect(phone.countryCode).toBe('+591')
    })
    it('mask está definida', () => {
      expect(phone.mask).toBe('+591 # ### ####')
    })
  })
})
