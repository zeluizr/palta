import { describe, it, expect } from 'vitest'
import * as reeup from '../../src/cu/reeup.js'

describe('cu/reeup', () => {
  const valid = '12345678'

  describe('validate', () => {
    it('valida REEUP válido', () => {
      expect(reeup.validate(valid)).toBe(true)
    })
    it('valida REEUP com 8 dígitos', () => {
      expect(reeup.validate('87654321')).toBe(true)
    })
    it('rejeita REEUP com menos de 8 dígitos', () => {
      expect(reeup.validate('1234567')).toBe(false)
    })
    it('rejeita REEUP com mais de 8 dígitos', () => {
      expect(reeup.validate('123456789')).toBe(false)
    })
    it('aceita null e undefined', () => {
      expect(reeup.validate(null as any)).toBe(false)
      expect(reeup.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata REEUP válido', () => {
      expect(reeup.format(valid)).toBe('12345678')
    })
    it('remove caracteres não-numéricos', () => {
      expect(reeup.format('1234-5678')).toBe('12345678')
    })
  })

  describe('strip', () => {
    it('remove formatação', () => {
      expect(reeup.strip('1234-5678')).toBe('12345678')
    })
    it('retorna apenas dígitos', () => {
      expect(reeup.strip('ABC1234DEF5678')).toBe('12345678')
    })
    it('aceita null e undefined', () => {
      expect(reeup.strip(null as any)).toBe('')
      expect(reeup.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('mask é ########', () => {
      expect(reeup.mask).toBe('########')
    })
  })
})
