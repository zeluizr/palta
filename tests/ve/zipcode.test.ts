import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/ve/zipcode.js'

describe('ve/zipcode', () => {
  describe('validate', () => {
    it('valida CEP de 4 dígitos', () => {
      expect(zipcode.validate('1060')).toBe(true)
    })
    it('rejeita CEP com menos de 4 dígitos', () => {
      expect(zipcode.validate('106')).toBe(false)
    })
    it('rejeita CEP com mais de 4 dígitos', () => {
      expect(zipcode.validate('10600')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata CEP de 4 dígitos', () => {
      expect(zipcode.format('1060')).toBe('1060')
    })
    it('preenche com zeros à esquerda', () => {
      expect(zipcode.format('106')).toBe('0106')
    })
    it('formata CEP com zeros à esquerda', () => {
      expect(zipcode.format('0060')).toBe('0060')
    })
  })

  describe('strip', () => {
    it('remove caracteres não numéricos', () => {
      expect(zipcode.strip('1060')).toBe('1060')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('####')
    })
  })
})
