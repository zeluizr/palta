import { describe, it, expect } from 'vitest'
import * as phone from '../../src/jm/phone.js'

describe('jm/phone', () => {
  describe('validate', () => {
    it('valida número jamaicano com prefixo 876', () => {
      expect(phone.validate('8761234567')).toBe(true)
    })
    it('rejeita número com prefixo inválido', () => {
      expect(phone.validate('7871234567')).toBe(false)
      expect(phone.validate('9391234567')).toBe(false)
    })
    it('rejeita número com comprimento inválido', () => {
      expect(phone.validate('876123456')).toBe(false)
      expect(phone.validate('87612345678')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata número com prefixo internacional', () => {
      expect(phone.format('8761234567')).toBe('+1 (876) 123-4567')
    })
    it('formata sem prefixo internacional', () => {
      expect(phone.format('8761234567', { international: false })).toBe('(876) 123-4567')
    })
    it('retorna original se inválido', () => {
      expect(phone.format('invalid')).toBe('invalid')
    })
  })

  describe('strip', () => {
    it('remove +1 e formatting', () => {
      expect(phone.strip('+18761234567')).toBe('8761234567')
    })
    it('remove parênteses e hífens', () => {
      expect(phone.strip('+1 (876) 123-4567')).toBe('8761234567')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('constants', () => {
    it('countryCode é +1', () => {
      expect(phone.countryCode).toBe('+1')
    })
    it('mask está correto', () => {
      expect(phone.mask).toBe('+1 (###) ###-####')
    })
  })
})
