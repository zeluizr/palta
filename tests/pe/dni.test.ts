import { describe, it, expect } from 'vitest'
import * as dni from '../../src/pe/dni.js'

describe('pe/dni', () => {
  describe('format', () => {
    it('formata DNI de 8 dígitos', () => {
      expect(dni.format('12345678')).toBe('12345678')
    })
    it('trunca para 8 dígitos', () => {
      expect(dni.format('123456789')).toBe('12345678')
    })
  })

  describe('strip', () => {
    it('retorna só dígitos', () => {
      expect(dni.strip('12345678')).toBe('12345678')
    })
  })

  describe('validate', () => {
    it('valida DNI de 8 dígitos', () => {
      expect(dni.validate('12345678')).toBe(true)
    })
    it('rejeita DNI com comprimento inválido', () => {
      expect(dni.validate('1234567')).toBe(false)
      expect(dni.validate('123456789')).toBe(false)
      expect(dni.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(dni.validate(null as unknown as string)).toBe(false)
      expect(dni.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(dni.mask).toBe('########')
    })
  })
})
