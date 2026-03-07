import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/do/zipcode.js'

describe('do/zipcode', () => {
  describe('format', () => {
    it('formata zipcode de 5 dígitos', () => {
      expect(zipcode.format('10001')).toBe('10001')
    })
    it('adiciona padding para menos de 5 dígitos', () => {
      expect(zipcode.format('123')).toBe('00123')
      expect(zipcode.format('1')).toBe('00001')
    })
    it('trunca se mais de 5 dígitos', () => {
      expect(zipcode.format('123456')).toBe('12345')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(zipcode.strip('10-001')).toBe('10001')
    })
    it('lida com null/undefined', () => {
      expect(zipcode.strip(null as unknown as string)).toBe('')
      expect(zipcode.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida zipcode de 5 dígitos', () => {
      expect(zipcode.validate('10001')).toBe(true)
      expect(zipcode.validate('00123')).toBe(true)
    })
    it('rejeita zipcode com comprimento diferente de 5', () => {
      expect(zipcode.validate('1234')).toBe(false)
      expect(zipcode.validate('123456')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(zipcode.validate(null as unknown as string)).toBe(false)
      expect(zipcode.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('#####')
    })
  })
})
