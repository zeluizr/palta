import { describe, it, expect } from 'vitest'
import * as phone from '../../src/ni/phone.js'

describe('ni/phone', () => {
  describe('format', () => {
    it('formata celular nicaraguense', () => {
      expect(phone.format('81234567')).toBe('+505 8123 4567')
    })
    it('formata fixo nicaraguense', () => {
      expect(phone.format('22345678')).toBe('+505 2234 5678')
    })
    it('remove código de país antes de formatar', () => {
      expect(phone.format('50581234567')).toBe('+505 8123 4567')
      expect(phone.format('+50581234567')).toBe('+505 8123 4567')
    })
    it('formata parcial', () => {
      expect(phone.format('812')).toBe('812')
      expect(phone.format('8123')).toBe('+505 8123 ')
    })
  })

  describe('strip', () => {
    it('remove código de país', () => {
      expect(phone.strip('+505 8123 4567')).toBe('81234567')
      expect(phone.strip('50581234567')).toBe('81234567')
    })
    it('lida com null/undefined', () => {
      expect(phone.strip(null as any)).toBe('')
      expect(phone.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida celular de 8 dígitos', () => {
      expect(phone.validate('81234567')).toBe(true)
      expect(phone.validate('51234567')).toBe(true)
      expect(phone.validate('61234567')).toBe(true)
      expect(phone.validate('71234567')).toBe(true)
    })
    it('valida fixo de 8 dígitos', () => {
      expect(phone.validate('22345678')).toBe(true)
    })
    it('rejeita número inválido', () => {
      expect(phone.validate('1234567')).toBe(false)
      expect(phone.validate('123456789')).toBe(false)
      expect(phone.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(phone.validate(null as any)).toBe(false)
      expect(phone.validate(undefined as any)).toBe(false)
    })
  })

  describe('constants', () => {
    it('code é +505', () => {
      expect(phone.code).toBe('+505')
    })
    it('mask é +505 #### ####', () => {
      expect(phone.mask).toBe('+505 #### ####')
    })
  })
})
