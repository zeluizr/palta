import { describe, it, expect } from 'vitest'
import * as ci from '../../src/py/ci.js'

describe('py/ci', () => {
  describe('validate', () => {
    it('valida CI de 6 dígitos', () => {
      expect(ci.validate('123456')).toBe(true)
    })
    it('valida CI de 7 dígitos', () => {
      expect(ci.validate('1234567')).toBe(true)
    })
    it('valida CI de 8 dígitos', () => {
      expect(ci.validate('12345678')).toBe(true)
    })
    it('rejeita CI com comprimento inválido', () => {
      expect(ci.validate('12345')).toBe(false)
      expect(ci.validate('123456789')).toBe(false)
      expect(ci.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ci.validate(null as unknown as string)).toBe(false)
      expect(ci.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata CI', () => {
      expect(ci.format('1234567')).toBe('1234567')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(ci.strip('1.234.567')).toBe('1234567')
    })
    it('lida com null/undefined', () => {
      expect(ci.strip(null as unknown as string)).toBe('')
      expect(ci.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ci.mask).toBe('########')
    })
  })
})
