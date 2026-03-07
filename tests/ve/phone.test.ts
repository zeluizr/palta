import { describe, it, expect } from 'vitest'
import * as phone from '../../src/ve/phone.js'

describe('ve/phone', () => {
  describe('validate', () => {
    it('valida telefone fixo (começa com 2)', () => {
      expect(phone.validate('2121234567')).toBe(true)
    })
    it('valida celular (começa com 4)', () => {
      expect(phone.validate('4121234567')).toBe(true)
    })
    it('rejeita número que começa com 3', () => {
      expect(phone.validate('3121234567')).toBe(false)
    })
    it('rejeita número com comprimento errado', () => {
      expect(phone.validate('212123456')).toBe(false)
      expect(phone.validate('21212345678')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata telefone fixo', () => {
      expect(phone.format('2121234567')).toBe('+58 212 1234567')
    })
    it('formata celular', () => {
      expect(phone.format('4121234567')).toBe('+58 412 123 4567')
    })
    it('formata com prefixo internacional', () => {
      expect(phone.format('+582121234567')).toBe('+58 212 1234567')
    })
    it('formata com prefixo 0', () => {
      expect(phone.format('02121234567')).toBe('+58 212 1234567')
    })
    it('retorna input original para número de 10 dígitos que não começa com 2 ou 4', () => {
      expect(phone.format('3121234567')).toBe('3121234567')
    })
  })

  describe('strip', () => {
    it('remove prefixo +58', () => {
      expect(phone.strip('+582121234567')).toBe('2121234567')
    })
    it('remove prefixo 0', () => {
      expect(phone.strip('02121234567')).toBe('2121234567')
    })
    it('retorna 10 dígitos sem modificação', () => {
      expect(phone.strip('2121234567')).toBe('2121234567')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna as máscaras corretas', () => {
      expect(phone.mask.landline).toBe('+58 XXX XXXXXXX')
      expect(phone.mask.mobile).toBe('+58 4XX XXX XXXX')
    })
  })

  describe('countryCode', () => {
    it('retorna +58', () => {
      expect(phone.countryCode).toBe('+58')
    })
  })
})
