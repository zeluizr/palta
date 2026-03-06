import { describe, it, expect } from 'vitest'
import * as dni from '../../src/ar/dni.js'

describe('ar/dni', () => {
  describe('format', () => {
    it('formata DNI de 8 dígitos', () => {
      expect(dni.format('12345678')).toBe('12.345.678')
    })
    it('formata DNI de 7 dígitos', () => {
      expect(dni.format('1234567')).toBe('12.345.67')
    })
    it('formata parcialmente', () => {
      expect(dni.format('12')).toBe('12')
      expect(dni.format('12345')).toBe('12.345')
    })
  })

  describe('strip', () => {
    it('remove pontos', () => {
      expect(dni.strip('12.345.678')).toBe('12345678')
    })
  })

  describe('validate', () => {
    it('valida DNI de 7 dígitos', () => {
      expect(dni.validate('1234567')).toBe(true)
    })
    it('valida DNI de 8 dígitos', () => {
      expect(dni.validate('12345678')).toBe(true)
      expect(dni.validate('12.345.678')).toBe(true)
    })
    it('rejeita DNI com comprimento inválido', () => {
      expect(dni.validate('123456')).toBe(false)
      expect(dni.validate('123456789')).toBe(false)
      expect(dni.validate('')).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(dni.mask).toBe('##.###.###')
    })
  })
})
