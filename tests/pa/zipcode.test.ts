import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/pa/zipcode.js'

describe('pa/zipcode', () => {
  describe('validate', () => {
    it('valida zipcode com 4 dígitos', () => {
      expect(zipcode.validate('1234')).toBe(true)
      expect(zipcode.validate('0001')).toBe(true)
    })
    it('rejeita zipcode com comprimento inválido', () => {
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
    it('formata zipcode com padding', () => {
      expect(zipcode.format('1')).toBe('0001')
      expect(zipcode.format('12')).toBe('0012')
      expect(zipcode.format('123')).toBe('0123')
      expect(zipcode.format('1234')).toBe('1234')
    })
    it('trunca valores muito longos', () => {
      expect(zipcode.format('12345')).toBe('1234')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('1234')).toBe('1234')
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
