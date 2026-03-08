import { describe, it, expect } from 'vitest'
import * as nit from '../../src/bo/nit.js'

describe('bo/nit', () => {
  describe('validate', () => {
    it('valida NIT com 7 dígitos', () => {
      expect(nit.validate('1234567')).toBe(true)
    })
    it('valida NIT com 10 dígitos', () => {
      expect(nit.validate('1234567890')).toBe(true)
    })
    it('valida NIT com 13 dígitos', () => {
      expect(nit.validate('1234567890123')).toBe(true)
    })
    it('rejeita NIT com menos de 7 dígitos', () => {
      expect(nit.validate('123456')).toBe(false)
      expect(nit.validate('12345')).toBe(false)
      expect(nit.validate('')).toBe(false)
    })
    it('rejeita NIT com mais de 13 dígitos', () => {
      expect(nit.validate('12345678901234')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(nit.validate(null as unknown as string)).toBe(false)
      expect(nit.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('retorna apenas dígitos', () => {
      expect(nit.format('1234567')).toBe('1234567')
      expect(nit.format('12.345.678-9')).toBe('123456789')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(nit.strip('12.345.678-9')).toBe('123456789')
      expect(nit.strip('12-345-678')).toBe('12345678')
    })
    it('lida com null/undefined', () => {
      expect(nit.strip(null as unknown as string)).toBe('')
      expect(nit.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna máscara vazia', () => {
      expect(nit.mask).toBe('')
    })
  })
})
