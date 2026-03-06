import { describe, it, expect } from 'vitest'
import * as phone from '../../src/co/phone.js'

describe('co/phone', () => {
  describe('format', () => {
    it('formata celular colombiano', () => {
      expect(phone.format('3001234567')).toBe('+57 300 123 4567')
    })
    it('formata fixo de 8 dígitos', () => {
      expect(phone.format('12345678')).toBe('+57 1 234 5678')
    })
    it('formata sem código internacional', () => {
      expect(phone.format('3001234567', { international: false })).toBe('300 123 4567')
    })
    it('remove código de país antes de formatar', () => {
      expect(phone.format('573001234567')).toBe('+57 300 123 4567')
    })
  })

  describe('validate', () => {
    it('valida celular de 10 dígitos começando com 3', () => {
      expect(phone.validate('3001234567')).toBe(true)
    })
    it('valida fixo de 8 dígitos', () => {
      expect(phone.validate('12345678')).toBe(true)
    })
    it('rejeita número inválido', () => {
      expect(phone.validate('123')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
  })

  describe('countryCode', () => {
    it('retorna +57', () => {
      expect(phone.countryCode).toBe('+57')
    })
  })

  describe('mask', () => {
    it('retorna máscara', () => {
      expect(phone.mask).toBe('+57 ### ### ####')
    })
  })
})
