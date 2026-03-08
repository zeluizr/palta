import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/cu/zipcode.js'

describe('cu/zipcode', () => {
  const valid = '10400'

  describe('validate', () => {
    it('valida CEP válido', () => {
      expect(zipcode.validate(valid)).toBe(true)
    })
    it('valida CEP com 5 dígitos', () => {
      expect(zipcode.validate('12345')).toBe(true)
    })
    it('rejeita CEP com menos de 5 dígitos', () => {
      expect(zipcode.validate('1234')).toBe(false)
    })
    it('rejeita CEP com mais de 5 dígitos', () => {
      expect(zipcode.validate('123456')).toBe(false)
    })
    it('aceita null e undefined', () => {
      expect(zipcode.validate(null as any)).toBe(false)
      expect(zipcode.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata CEP válido', () => {
      expect(zipcode.format(valid)).toBe('10400')
    })
    it('remove caracteres não-numéricos', () => {
      expect(zipcode.format('10-400')).toBe('10400')
    })
  })

  describe('strip', () => {
    it('remove formatação', () => {
      expect(zipcode.strip('10-400')).toBe('10400')
    })
    it('retorna apenas dígitos', () => {
      expect(zipcode.strip('ABC10DEF400')).toBe('10400')
    })
    it('aceita null e undefined', () => {
      expect(zipcode.strip(null as any)).toBe('')
      expect(zipcode.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('mask é #####', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
