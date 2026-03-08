import { describe, it, expect } from 'vitest'
import * as trn from '../../src/jm/trn.js'

describe('jm/trn', () => {
  describe('validate', () => {
    it('valida TRN com 9 dígitos', () => {
      expect(trn.validate('123456789')).toBe(true)
    })
    it('rejeita TRN com comprimento inválido', () => {
      expect(trn.validate('12345678')).toBe(false)
      expect(trn.validate('1234567890')).toBe(false)
      expect(trn.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(trn.validate(null as unknown as string)).toBe(false)
      expect(trn.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata TRN com 9 dígitos', () => {
      expect(trn.format('123456789')).toBe('123-456-789')
    })
    it('formata parcialmente', () => {
      expect(trn.format('123')).toBe('123')
      expect(trn.format('123456')).toBe('123-456')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(trn.strip('123-456-789')).toBe('123456789')
    })
    it('lida com null/undefined', () => {
      expect(trn.strip(null as unknown as string)).toBe('')
      expect(trn.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(trn.mask).toBe('###-###-###')
    })
  })
})
