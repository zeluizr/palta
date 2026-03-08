import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/py/zipcode.js'

describe('py/zipcode', () => {
  describe('validate', () => {
    it('valida CEP de 4 dígitos', () => {
      expect(zipcode.validate('1234')).toBe(true)
    })
    it('rejeita CEP com comprimento inválido', () => {
      expect(zipcode.validate('123')).toBe(false)
      expect(zipcode.validate('12345')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata com padding', () => {
      expect(zipcode.format('123')).toBe('0123')
    })
    it('formata valor correto', () => {
      expect(zipcode.format('1234')).toBe('1234')
    })
    it('trunca valor longo', () => {
      expect(zipcode.format('12345')).toBe('1234')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('12-34')).toBe('1234')
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
