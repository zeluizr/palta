import { describe, it, expect } from 'vitest'
import * as phone from '../../src/ar/phone.js'

describe('ar/phone', () => {
  describe('format', () => {
    it('formata celular com prefixo 9', () => {
      expect(phone.format('91112345678')).toBe('+54 9 11 1234-5678')
    })
    it('formata fixo de 10 dígitos', () => {
      expect(phone.format('1112345678')).toBe('+54 11 1234-5678')
    })
    it('formata sem código internacional', () => {
      expect(phone.format('91112345678', { international: false })).toBe('9 11 1234-5678')
    })
  })

  describe('validate', () => {
    it('valida celular', () => {
      expect(phone.validate('91112345678')).toBe(true)
    })
    it('valida fixo', () => {
      expect(phone.validate('1112345678')).toBe(true)
    })
    it('rejeita número inválido', () => {
      expect(phone.validate('123')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
  })

  describe('countryCode', () => {
    it('retorna +54', () => {
      expect(phone.countryCode).toBe('+54')
    })
  })

  describe('mask', () => {
    it('retorna máscara', () => {
      expect(phone.mask).toBe('+54 9 ## ####-####')
    })
  })
})
