import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/ni/zipcode.js'

describe('ni/zipcode', () => {
  describe('format', () => {
    it('formata CEP de 5 dígitos', () => {
      expect(zipcode.format('12345')).toBe('12345')
    })
    it('trunca para 5 dígitos', () => {
      expect(zipcode.format('123456')).toBe('12345')
    })
  })

  describe('strip', () => {
    it('retorna só dígitos', () => {
      expect(zipcode.strip('12-345')).toBe('12345')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as any)).toBe('')
      expect(zipcode.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida CEP de 5 dígitos', () => {
      expect(zipcode.validate('12345')).toBe(true)
    })
    it('rejeita CEP inválido', () => {
      expect(zipcode.validate('1234')).toBe(false)
      expect(zipcode.validate('123456')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as any)).toBe(false)
      expect(zipcode.validate(undefined as any)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
