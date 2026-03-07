import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/uy/zipcode.js'

describe('uy/zipcode', () => {
  describe('validate', () => {
    it('valida CEP com 5 dígitos', () => {
      expect(zipcode.validate('11000')).toBe(true)
      expect(zipcode.validate('97000')).toBe(true)
    })
    it('rejeita CEP com comprimento inválido', () => {
      expect(zipcode.validate('1100')).toBe(false)
      expect(zipcode.validate('110000')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata CEP com 5 dígitos', () => {
      expect(zipcode.format('11000')).toBe('11000')
    })
    it('preenche com zeros à esquerda', () => {
      expect(zipcode.format('1100')).toBe('01100')
    })
    it('trunca para 5 dígitos', () => {
      expect(zipcode.format('110000')).toBe('11000')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('11.000')).toBe('11000')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
