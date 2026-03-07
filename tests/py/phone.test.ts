import { describe, it, expect } from 'vitest'
import * as phone from '../../src/py/phone.js'

describe('py/phone', () => {
  describe('validate', () => {
    it('valida celular (10 dígitos começando com 9)', () => {
      expect(phone.validate('9812345678')).toBe(true)
    })
    it('valida fixo (10 dígitos)', () => {
      expect(phone.validate('2112345678')).toBe(true)
    })
    it('rejeita número com comprimento inválido', () => {
      expect(phone.validate('123456')).toBe(false)
      expect(phone.validate('12345678901')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata celular (internacional)', () => {
      expect(phone.format('9812345678')).toBe('+595 981 234 5678')
    })
    it('formata fixo (internacional)', () => {
      expect(phone.format('2112345678')).toBe('+595 211 234 5678')
    })
    it('formata celular (local)', () => {
      expect(phone.format('9812345678', { international: false })).toBe('981 234 5678')
    })
    it('formata fixo (local)', () => {
      expect(phone.format('2112345678', { international: false })).toBe('211 234 5678')
    })
  })

  describe('strip', () => {
    it('remove código do país +595', () => {
      expect(phone.strip('+595 981 234 5678')).toBe('9812345678')
    })
    it('remove código do país 00595', () => {
      expect(phone.strip('005959812345678')).toBe('9812345678')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('constants', () => {
    it('countryCode é +595', () => {
      expect(phone.countryCode).toBe('+595')
    })
    it('mask está definido', () => {
      expect(phone.mask).toBe('+595 ### ### ###')
    })
  })
})
