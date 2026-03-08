import { describe, it, expect } from 'vitest'
import * as ruc from '../../src/ni/ruc.js'

describe('ni/ruc', () => {
  describe('format', () => {
    it('formata RUC de 14 dígitos', () => {
      expect(ruc.format('12345678901234')).toBe('12345678901234')
    })
    it('trunca para 14 dígitos', () => {
      expect(ruc.format('123456789012345')).toBe('12345678901234')
    })
  })

  describe('strip', () => {
    it('retorna só dígitos', () => {
      expect(ruc.strip('1234-5678-9012-34')).toBe('12345678901234')
    })
    it('lida com null/undefined', () => {
      expect(ruc.strip(null as any)).toBe('')
      expect(ruc.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida RUC de 14 dígitos', () => {
      expect(ruc.validate('12345678901234')).toBe(true)
    })
    it('rejeita RUC inválido', () => {
      expect(ruc.validate('1234567890123')).toBe(false)
      expect(ruc.validate('123456789012345')).toBe(false)
      expect(ruc.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ruc.validate(null as any)).toBe(false)
      expect(ruc.validate(undefined as any)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ruc.mask).toBe('##############')
    })
  })
})
