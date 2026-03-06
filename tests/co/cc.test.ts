import { describe, it, expect } from 'vitest'
import * as cc from '../../src/co/cc.js'

describe('co/cc', () => {
  describe('format', () => {
    it('formata CC de 10 dígitos', () => {
      expect(cc.format('1234567890')).toBe('1.234.567.890')
    })
    it('formata CC de 6 dígitos', () => {
      expect(cc.format('123456')).toBe('123.456')
    })
    it('formata CC de 8 dígitos', () => {
      expect(cc.format('12345678')).toBe('12.345.678')
    })
  })

  describe('strip', () => {
    it('remove pontos', () => {
      expect(cc.strip('1.234.567.890')).toBe('1234567890')
    })
  })

  describe('validate', () => {
    it('valida CC de 6 a 10 dígitos', () => {
      expect(cc.validate('123456')).toBe(true)
      expect(cc.validate('1234567890')).toBe(true)
      expect(cc.validate('12345678')).toBe(true)
    })
    it('rejeita CC inválido', () => {
      expect(cc.validate('12345')).toBe(false)
      expect(cc.validate('12345678901')).toBe(false)
      expect(cc.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cc.validate(null as unknown as string)).toBe(false)
      expect(cc.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cc.mask).toBe('#.###.###.###')
    })
  })
})
