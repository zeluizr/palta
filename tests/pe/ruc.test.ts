import { describe, it, expect } from 'vitest'
import * as ruc from '../../src/pe/ruc.js'

describe('pe/ruc', () => {
  describe('format', () => {
    it('formata RUC de 11 dígitos', () => {
      expect(ruc.format('20100070970')).toBe('20100070970')
    })
    it('trunca para 11 dígitos', () => {
      expect(ruc.format('201000709701')).toBe('20100070970')
    })
  })

  describe('strip', () => {
    it('retorna só dígitos', () => {
      expect(ruc.strip('20100070970')).toBe('20100070970')
    })
  })

  describe('validate', () => {
    it('valida RUC de pessoa jurídica', () => {
      expect(ruc.validate('20100070970')).toBe(true)
    })
    it('rejeita RUC com comprimento inválido', () => {
      expect(ruc.validate('2010007097')).toBe(false)
      expect(ruc.validate('')).toBe(false)
    })
    it('rejeita RUC com prefixo inválido', () => {
      expect(ruc.validate('11100070970')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ruc.validate(null as unknown as string)).toBe(false)
      expect(ruc.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ruc.mask).toBe('###########')
    })
  })
})
