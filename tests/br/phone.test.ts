import { describe, it, expect } from 'vitest'
import * as phone from '../../src/br/phone.js'

describe('br/phone', () => {
  describe('format', () => {
    it('formata celular', () => {
      expect(phone.format('11999887766')).toBe('(11) 99988-7766')
    })
    it('formata fixo', () => {
      expect(phone.format('1133334444')).toBe('(11) 3333-4444')
    })
    it('formata com código internacional', () => {
      expect(phone.format('11999887766', { international: true })).toBe('+55 (11) 99988-7766')
    })
    it('formata fixo com código internacional', () => {
      expect(phone.format('1133334444', { international: true })).toBe('+55 (11) 3333-4444')
    })
    it('remove código de país antes de formatar', () => {
      expect(phone.format('5511999887766')).toBe('(11) 99988-7766')
    })
  })

  describe('validate', () => {
    it('valida celular', () => {
      expect(phone.validate('11999887766')).toBe(true)
    })
    it('valida fixo', () => {
      expect(phone.validate('1133334444')).toBe(true)
    })
    it('rejeita números inválidos', () => {
      expect(phone.validate('123')).toBe(false)
      expect(phone.validate('')).toBe(false)
      expect(phone.validate('119998877')).toBe(false)
    })
  })

  describe('countryCode', () => {
    it('retorna +55', () => {
      expect(phone.countryCode).toBe('+55')
    })
  })

  describe('mask', () => {
    it('retorna objeto com mobile e landline', () => {
      expect(phone.mask).toEqual({
        mobile: '(##) #####-####',
        landline: '(##) ####-####',
      })
    })
  })
})
