import { describe, it, expect } from 'vitest'
import * as ci from '../../src/ve/ci.js'

describe('ve/ci', () => {
  describe('validate', () => {
    it('valida cédula V com 8 dígitos', () => {
      expect(ci.validate('V-12.345.678')).toBe(true)
    })
    it('valida cédula E com 7 dígitos', () => {
      expect(ci.validate('E-1234567')).toBe(true)
    })
    it('valida cédula V com 6 dígitos', () => {
      expect(ci.validate('V-123456')).toBe(true)
    })
    it('rejeita prefixo inválido', () => {
      expect(ci.validate('J-12345678')).toBe(false)
    })
    it('rejeita dígitos insuficientes', () => {
      expect(ci.validate('V-12345')).toBe(false)
    })
    it('rejeita dígitos em excesso', () => {
      expect(ci.validate('V-123456789')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ci.validate(null as unknown as string)).toBe(false)
      expect(ci.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata cédula V de 8 dígitos', () => {
      expect(ci.format('V12345678')).toBe('V-12.345.678')
    })
    it('formata cédula V de 7 dígitos', () => {
      expect(ci.format('V1234567')).toBe('V-1.234.567')
    })
    it('formata cédula V de 6 dígitos', () => {
      expect(ci.format('V123456')).toBe('V-123.456')
    })
    it('formata cédula E de 8 dígitos', () => {
      expect(ci.format('E12345678')).toBe('E-12.345.678')
    })
    it('formata cédula já formatada', () => {
      expect(ci.format('V-12.345.678')).toBe('V-12.345.678')
    })
  })

  describe('strip', () => {
    it('remove pontos e hífens', () => {
      expect(ci.strip('V-12.345.678')).toBe('V12345678')
    })
    it('converte para maiúsculas', () => {
      expect(ci.strip('v-12.345.678')).toBe('V12345678')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ci.mask).toBe('X-XX.XXX.XXX')
    })
  })
})
