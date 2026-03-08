import { describe, it, expect } from 'vitest'
import * as dni from '../../src/hn/dni.js'

describe('hn/dni', () => {
  describe('validate', () => {
    it('valida DNI válido com 13 dígitos', () => {
      expect(dni.validate('0801199901234')).toBe(true)
      expect(dni.validate('1234567890123')).toBe(true)
    })
    it('rejeita DNI com comprimento inválido', () => {
      expect(dni.validate('123456789012')).toBe(false)
      expect(dni.validate('12345678901234')).toBe(false)
      expect(dni.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(dni.validate(null as unknown as string)).toBe(false)
      expect(dni.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata DNI com 13 dígitos', () => {
      expect(dni.format('0801199901234')).toBe('0801199901234')
      expect(dni.format('1234567890123')).toBe('1234567890123')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(dni.strip('0801-1999-01234')).toBe('0801199901234')
      expect(dni.strip('1234567890123')).toBe('1234567890123')
    })
    it('lida com null/undefined', () => {
      expect(dni.strip(null as unknown as string)).toBe('')
      expect(dni.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(dni.mask).toBe('#############')
    })
  })
})
