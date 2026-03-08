import { describe, it, expect } from 'vitest'
import * as ruc from '../../src/pa/ruc.js'

describe('pa/ruc', () => {
  describe('validate', () => {
    it('valida RUC de Pessoa Jurídica com 10 dígitos', () => {
      expect(ruc.validate('1234567890')).toBe(true)
    })
    it('valida RUC de Pessoa Física com 8 dígitos', () => {
      expect(ruc.validate('12345678')).toBe(true)
    })
    it('valida RUC de Pessoa Física com 9 dígitos', () => {
      expect(ruc.validate('123456789')).toBe(true)
    })
    it('rejeita RUC com comprimento inválido', () => {
      expect(ruc.validate('123456')).toBe(false)
      expect(ruc.validate('12345678901')).toBe(false)
      expect(ruc.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ruc.validate(null as unknown as string)).toBe(false)
      expect(ruc.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata RUC PJ com 10 dígitos', () => {
      expect(ruc.format('1234567890')).toBe('1-234-567890')
    })
    it('formata RUC PF com 8 dígitos', () => {
      expect(ruc.format('12345678')).toBe('1-234-5678')
    })
    it('retorna sem formatação para 9 dígitos', () => {
      expect(ruc.format('123456789')).toBe('123456789')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(ruc.strip('1-234-567890')).toBe('1234567890')
      expect(ruc.strip('1-234-5678')).toBe('12345678')
    })
    it('lida com null/undefined', () => {
      expect(ruc.strip(null as unknown as string)).toBe('')
      expect(ruc.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ruc.mask).toBe('#-###-######')
    })
  })
})
