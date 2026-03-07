import { describe, it, expect } from 'vitest'
import * as phone from '../../src/uy/phone.js'

describe('uy/phone', () => {
  describe('validate', () => {
    it('valida número móvel com 8 dígitos', () => {
      expect(phone.validate('98123456')).toBe(true)
    })
    it('valida número fixo com 8 dígitos', () => {
      expect(phone.validate('24000000')).toBe(true)
    })
    it('rejeita número com comprimento inválido', () => {
      expect(phone.validate('9812345')).toBe(false)
      expect(phone.validate('981234567')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata número com 8 dígitos', () => {
      expect(phone.format('98123456')).toBe('+598 98 123 456')
    })
    it('formata sem prefixo internacional quando international=false', () => {
      expect(phone.format('98123456', { international: false })).toBe('98 123 456')
    })
    it('retorna original se não tiver 8 dígitos', () => {
      expect(phone.format('invalid')).toBe('invalid')
    })
  })

  describe('strip', () => {
    it('remove código internacional +598', () => {
      expect(phone.strip('+59898123456')).toBe('98123456')
    })
    it('remove zero inicial', () => {
      expect(phone.strip('098123456')).toBe('98123456')
    })
    it('retorna dígitos limpos', () => {
      expect(phone.strip('98 123 456')).toBe('98123456')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('constants', () => {
    it('countryCode é +598', () => {
      expect(phone.countryCode).toBe('+598')
    })
    it('mask está correto', () => {
      expect(phone.mask).toBe('+598 ## ### ###')
    })
  })
})
