import { describe, it, expect } from 'vitest'
import * as dimex from '../../src/cr/dimex.js'

describe('cr/dimex', () => {
  describe('validate', () => {
    it('valida DIMEX com 11 dígitos', () => {
      expect(dimex.validate('12345678901')).toBe(true)
    })
    it('valida DIMEX com 12 dígitos', () => {
      expect(dimex.validate('123456789012')).toBe(true)
    })
    it('rejeita DIMEX com comprimento inválido', () => {
      expect(dimex.validate('1234567890')).toBe(false)
      expect(dimex.validate('1234567890123')).toBe(false)
      expect(dimex.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(dimex.validate(null as unknown as string)).toBe(false)
      expect(dimex.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('retorna dígitos sem formatação', () => {
      expect(dimex.format('12345678901')).toBe('12345678901')
      expect(dimex.format('123456789012')).toBe('123456789012')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(dimex.strip('123-456-789-01')).toBe('12345678901')
    })
    it('lida com null/undefined', () => {
      expect(dimex.strip(null as unknown as string)).toBe('')
      expect(dimex.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(dimex.mask).toBe('############')
    })
  })
})
