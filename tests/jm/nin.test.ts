import { describe, it, expect } from 'vitest'
import * as nin from '../../src/jm/nin.js'

describe('jm/nin', () => {
  describe('validate', () => {
    it('valida NIN com 10 dígitos', () => {
      expect(nin.validate('1234567890')).toBe(true)
    })
    it('rejeita NIN com comprimento inválido', () => {
      expect(nin.validate('123456789')).toBe(false)
      expect(nin.validate('12345678901')).toBe(false)
      expect(nin.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(nin.validate(null as unknown as string)).toBe(false)
      expect(nin.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('retorna dígitos sem formatação', () => {
      expect(nin.format('1234567890')).toBe('1234567890')
    })
    it('trunca para 10 dígitos', () => {
      expect(nin.format('12345678901')).toBe('1234567890')
    })
  })

  describe('strip', () => {
    it('remove não-dígitos', () => {
      expect(nin.strip('1234-567890')).toBe('1234567890')
    })
    it('lida com null/undefined', () => {
      expect(nin.strip(null as unknown as string)).toBe('')
      expect(nin.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(nin.mask).toBe('##########')
    })
  })
})
