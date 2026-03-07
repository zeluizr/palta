import { describe, it, expect } from 'vitest'
import * as rut from '../../src/uy/rut.js'

describe('uy/rut', () => {
  describe('validate', () => {
    it('valida RUT válido', () => {
      expect(rut.validate('212345678909')).toBe(true)
    })
    it('rejeita RUT com dígito verificador errado', () => {
      expect(rut.validate('212345678908')).toBe(false)
      expect(rut.validate('212345678901')).toBe(false)
    })
    it('rejeita RUT com comprimento inválido', () => {
      expect(rut.validate('21234567890')).toBe(false)
      expect(rut.validate('2123456789099')).toBe(false)
      expect(rut.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(rut.validate(null as unknown as string)).toBe(false)
      expect(rut.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata RUT com 12 dígitos', () => {
      expect(rut.format('212345678909')).toBe('21234567890-9')
    })
    it('formata parcialmente (sem hífen)', () => {
      expect(rut.format('21234567890')).toBe('21234567890')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(rut.strip('21234567890-9')).toBe('212345678909')
    })
    it('lida com null/undefined', () => {
      expect(rut.strip(null as unknown as string)).toBe('')
      expect(rut.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(rut.mask).toBe('###########-#')
    })
  })
})
