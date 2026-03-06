import { describe, it, expect } from 'vitest'
import * as phone from '../../src/pe/phone.js'

describe('pe/phone', () => {
  describe('format', () => {
    it('formata celular peruano', () => {
      expect(phone.format('987654321')).toBe('+51 987 654 321')
    })
    it('formata fixo Lima (7 dígitos locais)', () => {
      expect(phone.format('1234567')).toBe('+51 1 123 4567')
    })
    it('formata sem código internacional', () => {
      expect(phone.format('987654321', { international: false })).toBe('987 654 321')
    })
    it('remove código de país antes de formatar', () => {
      expect(phone.format('51987654321')).toBe('+51 987 654 321')
    })
  })

  describe('validate', () => {
    it('valida celular de 9 dígitos começando com 9', () => {
      expect(phone.validate('987654321')).toBe(true)
    })
    it('valida fixo de 7 dígitos', () => {
      expect(phone.validate('1234567')).toBe(true)
    })
    it('rejeita número inválido', () => {
      expect(phone.validate('123')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
  })

  describe('countryCode', () => {
    it('retorna +51', () => {
      expect(phone.countryCode).toBe('+51')
    })
  })

  describe('mask', () => {
    it('retorna máscara', () => {
      expect(phone.mask).toBe('+51 ### ### ###')
    })
  })
})
