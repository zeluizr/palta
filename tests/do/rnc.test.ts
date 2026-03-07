import { describe, it, expect } from 'vitest'
import * as rnc from '../../src/do/rnc.js'

describe('do/rnc', () => {
  describe('format', () => {
    it('formata RNC sem pontuação', () => {
      expect(rnc.format('101123456')).toBe('101-12345-6')
    })
    it('formata RNC com pontuação', () => {
      expect(rnc.format('101-12345-6')).toBe('101-12345-6')
    })
    it('formata parcialmente', () => {
      expect(rnc.format('101')).toBe('101')
      expect(rnc.format('10112345')).toBe('101-12345')
    })
  })

  describe('strip', () => {
    it('remove hífens', () => {
      expect(rnc.strip('101-12345-6')).toBe('101123456')
    })
    it('lida com null/undefined', () => {
      expect(rnc.strip(null as unknown as string)).toBe('')
      expect(rnc.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida RNC válido (9 dígitos)', () => {
      expect(rnc.validate('101-12345-6')).toBe(true)
      expect(rnc.validate('101123456')).toBe(true)
    })
    it('rejeita RNC com comprimento inválido', () => {
      expect(rnc.validate('10112345')).toBe(false)
      expect(rnc.validate('')).toBe(false)
      expect(rnc.validate('1011234567')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(rnc.validate(null as unknown as string)).toBe(false)
      expect(rnc.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(rnc.mask).toBe('###-#####-#')
    })
  })
})
