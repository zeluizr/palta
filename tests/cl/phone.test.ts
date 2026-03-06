import { describe, it, expect } from 'vitest'
import * as phone from '../../src/cl/phone.js'

describe('cl/phone', () => {
  describe('format', () => {
    it('formata celular internacional', () => {
      expect(phone.format('912345678')).toBe('+56 9 1234 5678')
    })
    it('formata fixo internacional', () => {
      expect(phone.format('212345678')).toBe('+56 2 1234 5678')
    })
    it('formata sem código internacional', () => {
      expect(phone.format('912345678', { international: false })).toBe('9 1234 5678')
    })
    it('remove código de país antes de formatar', () => {
      expect(phone.format('56912345678')).toBe('+56 9 1234 5678')
    })
  })

  describe('validate', () => {
    it('valida número de 9 dígitos', () => {
      expect(phone.validate('912345678')).toBe(true)
      expect(phone.validate('212345678')).toBe(true)
    })
    it('rejeita número inválido', () => {
      expect(phone.validate('123')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
  })

  describe('countryCode', () => {
    it('retorna +56', () => {
      expect(phone.countryCode).toBe('+56')
    })
  })

  describe('mask', () => {
    it('retorna máscara', () => {
      expect(phone.mask).toBe('+56 # #### ####')
    })
  })
})
