import { describe, it, expect } from 'vitest'
import * as rtn from '../../src/hn/rtn.js'

describe('hn/rtn', () => {
  describe('validate', () => {
    it('valida RTN válido com 14 dígitos', () => {
      expect(rtn.validate('12345678901234')).toBe(true)
      expect(rtn.validate('08019999012345')).toBe(true)
    })
    it('rejeita RTN com comprimento inválido', () => {
      expect(rtn.validate('1234567890123')).toBe(false)
      expect(rtn.validate('123456789012345')).toBe(false)
      expect(rtn.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(rtn.validate(null as unknown as string)).toBe(false)
      expect(rtn.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata RTN com 14 dígitos', () => {
      expect(rtn.format('12345678901234')).toBe('1234-5678-901234')
      expect(rtn.format('08019999012345')).toBe('0801-9999-012345')
    })
    it('formata parcialmente', () => {
      expect(rtn.format('123')).toBe('123')
      expect(rtn.format('12345')).toBe('1234-5')
      expect(rtn.format('123456789')).toBe('1234-5678-9')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(rtn.strip('1234-5678-901234')).toBe('12345678901234')
      expect(rtn.strip('0801-9999-012345')).toBe('08019999012345')
    })
    it('lida com null/undefined', () => {
      expect(rtn.strip(null as unknown as string)).toBe('')
      expect(rtn.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(rtn.mask).toBe('####-####-######')
    })
  })
})
