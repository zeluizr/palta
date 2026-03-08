import { describe, it, expect } from 'vitest'
import * as ni from '../../src/cu/ni.js'

describe('cu/ni', () => {
  const valid = '90021512345'

  describe('validate', () => {
    it('valida NI válido', () => {
      expect(ni.validate(valid)).toBe(true)
    })
    it('valida NI com 11 dígitos e data válida', () => {
      expect(ni.validate('85031012345')).toBe(true)
    })
    it('rejeita NI com menos de 11 dígitos', () => {
      expect(ni.validate('1234567890')).toBe(false)
    })
    it('rejeita NI com mais de 11 dígitos', () => {
      expect(ni.validate('123456789012')).toBe(false)
    })
    it('rejeita NI com mês inválido', () => {
      expect(ni.validate('90131512345')).toBe(false)
    })
    it('rejeita NI com dia inválido', () => {
      expect(ni.validate('90023212345')).toBe(false)
    })
    it('aceita null e undefined', () => {
      expect(ni.validate(null as any)).toBe(false)
      expect(ni.validate(undefined as any)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata NI válido', () => {
      expect(ni.format(valid)).toBe('90021512345')
    })
    it('remove caracteres não-numéricos', () => {
      expect(ni.format('900-215-12345')).toBe('90021512345')
    })
  })

  describe('strip', () => {
    it('remove formatação', () => {
      expect(ni.strip('900-215-12345')).toBe('90021512345')
    })
    it('retorna apenas dígitos', () => {
      expect(ni.strip('ABC900DEF215GHI12345')).toBe('90021512345')
    })
    it('aceita null e undefined', () => {
      expect(ni.strip(null as any)).toBe('')
      expect(ni.strip(undefined as any)).toBe('')
    })
  })

  describe('mask', () => {
    it('mask é ###########', () => {
      expect(ni.mask).toBe('###########')
    })
  })
})
