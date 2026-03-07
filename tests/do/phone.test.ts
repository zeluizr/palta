import { describe, it, expect } from 'vitest'
import * as phone from '../../src/do/phone.js'

describe('do/phone', () => {
  describe('format', () => {
    it('formata número sem pontuação', () => {
      expect(phone.format('8091234567')).toBe('+1 (809) 123-4567')
    })
    it('formata número com +1', () => {
      expect(phone.format('18091234567')).toBe('+1 (809) 123-4567')
    })
    it('formata número com prefixo 829', () => {
      expect(phone.format('8291234567')).toBe('+1 (829) 123-4567')
    })
    it('formata número com prefixo 849', () => {
      expect(phone.format('8491234567')).toBe('+1 (849) 123-4567')
    })
    it('retorna original se comprimento inválido', () => {
      expect(phone.format('809123')).toBe('809123')
    })
  })

  describe('strip', () => {
    it('remove formatação', () => {
      expect(phone.strip('+1 (809) 123-4567')).toBe('8091234567')
    })
    it('remove prefixo do país se presente', () => {
      expect(phone.strip('18091234567')).toBe('8091234567')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as unknown as string)).toBe('')
      expect(phone.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida número com prefixo 809', () => {
      expect(phone.validate('8091234567')).toBe(true)
      expect(phone.validate('+1 (809) 123-4567')).toBe(true)
    })
    it('valida número com prefixo 829', () => {
      expect(phone.validate('8291234567')).toBe(true)
    })
    it('valida número com prefixo 849', () => {
      expect(phone.validate('8491234567')).toBe(true)
    })
    it('rejeita número com prefixo inválido', () => {
      expect(phone.validate('8001234567')).toBe(false)
      expect(phone.validate('2121234567')).toBe(false)
    })
    it('rejeita número com comprimento inválido', () => {
      expect(phone.validate('809123')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as unknown as string)).toBe(false)
      expect(phone.validate(undefined as unknown as string)).toBe(false)
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
