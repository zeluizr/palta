import { describe, it, expect } from 'vitest'
import * as ci from '../../src/uy/ci.js'

describe('uy/ci', () => {
  describe('validate', () => {
    it('valida CI válida', () => {
      expect(ci.validate('12345672')).toBe(true)
    })
    it('rejeita CI com dígito verificador errado', () => {
      expect(ci.validate('12345671')).toBe(false)
      expect(ci.validate('12345670')).toBe(false)
    })
    it('rejeita CI com comprimento inválido', () => {
      expect(ci.validate('1234567')).toBe(false)
      expect(ci.validate('123456789')).toBe(false)
      expect(ci.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ci.validate(null as unknown as string)).toBe(false)
      expect(ci.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata CI com 8 dígitos', () => {
      expect(ci.format('12345672')).toBe('1.234.567-2')
    })
    it('formata parcialmente', () => {
      expect(ci.format('1')).toBe('1')
      expect(ci.format('12')).toBe('1.2')
      expect(ci.format('12345')).toBe('1.234.5')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(ci.strip('1.234.567-2')).toBe('12345672')
    })
    it('lida com null/undefined', () => {
      expect(ci.strip(null as unknown as string)).toBe('')
      expect(ci.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ci.mask).toBe('#.###.###-#')
    })
  })
})
