import { describe, it, expect } from 'vitest'
import * as phone from '../../src/cu/phone.js'

describe('cu/phone', () => {
  const validMobile = '51234567'
  const validLandline = '7123456'

  describe('validate', () => {
    it('valida celular com 8 dígitos', () => {
      expect(phone.validate(validMobile)).toBe(true)
    })
    it('valida fixo com 7 dígitos', () => {
      expect(phone.validate(validLandline)).toBe(true)
    })
    it('rejeita telefone com menos de 7 dígitos', () => {
      expect(phone.validate('123456')).toBe(false)
    })
    it('rejeita telefone com 9 dígitos', () => {
      expect(phone.validate('123456789')).toBe(false)
    })
    it('valida com código do país', () => {
      expect(phone.validate('+53 51234567')).toBe(true)
    })
    it('aceita null e undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata celular (8 dígitos) internacional', () => {
      expect(phone.format(validMobile)).toBe('+53 5 123 4567')
    })
    it('formata fixo (7 dígitos) internacional', () => {
      expect(phone.format(validLandline)).toBe('+53 71 23456')
    })
    it('formata celular nacional', () => {
      expect(phone.format(validMobile, { international: false })).toBe('5 123 4567')
    })
    it('formata fixo nacional', () => {
      expect(phone.format(validLandline, { international: false })).toBe('71 23456')
    })
    it('remove código do país se presente', () => {
      expect(phone.format('+53 51234567')).toBe('+53 5 123 4567')
    })
  })

  describe('strip', () => {
    it('remove formatação', () => {
      expect(phone.strip('+53 5 123 4567')).toBe('51234567')
    })
    it('remove código do país', () => {
      expect(phone.strip('5351234567')).toBe('51234567')
    })
    it('aceita null e undefined', () => {
      expect(phone.strip(null as any)).toBe('')
      expect(phone.strip(undefined as any)).toBe('')
    })
  })

  describe('constants', () => {
    it('countryCode é +53', () => {
      expect(phone.countryCode).toBe('+53')
    })
    it('mask é +53 # ### ####', () => {
      expect(phone.mask).toBe('+53 # ### ####')
    })
  })
})
