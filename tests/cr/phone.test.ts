import { describe, it, expect } from 'vitest'
import * as phone from '../../src/cr/phone.js'

describe('cr/phone', () => {
  describe('validate', () => {
    it('valida telefone com 8 dígitos', () => {
      expect(phone.validate('12345678')).toBe(true)
      expect(phone.validate('61234567')).toBe(true)
      expect(phone.validate('81234567')).toBe(true)
      expect(phone.validate('22345678')).toBe(true)
    })
    it('rejeita telefone com comprimento inválido', () => {
      expect(phone.validate('1234567')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata telefone internacional', () => {
      expect(phone.format('12345678')).toBe('+506 1234 5678')
    })
    it('formata telefone local', () => {
      expect(phone.format('12345678', { international: false })).toBe('1234 5678')
    })
    it('mantém valor inválido', () => {
      expect(phone.format('123')).toBe('123')
    })
  })

  describe('strip', () => {
    it('remove código do país', () => {
      expect(phone.strip('+506 1234 5678')).toBe('12345678')
      expect(phone.strip('50612345678')).toBe('12345678')
      expect(phone.strip('0050612345678')).toBe('12345678')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('constants', () => {
    it('countryCode é +506', () => {
      expect(phone.countryCode).toBe('+506')
    })
    it('mask é +506 #### ####', () => {
      expect(phone.mask).toBe('+506 #### ####')
    })
  })
})
