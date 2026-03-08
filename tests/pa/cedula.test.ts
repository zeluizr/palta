import { describe, it, expect } from 'vitest'
import * as cedula from '../../src/pa/cedula.js'

describe('pa/cedula', () => {
  describe('validate', () => {
    it('valida cédula válida com 8 dígitos', () => {
      expect(cedula.validate('12345678')).toBe(true)
      expect(cedula.validate('98765432')).toBe(true)
    })
    it('rejeita cédula com comprimento inválido', () => {
      expect(cedula.validate('1234567')).toBe(false)
      expect(cedula.validate('123456789')).toBe(false)
      expect(cedula.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cedula.validate(null as unknown as string)).toBe(false)
      expect(cedula.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata cédula com 8 dígitos', () => {
      expect(cedula.format('12345678')).toBe('1-234-5678')
      expect(cedula.format('98765432')).toBe('9-876-5432')
    })
    it('formata parcialmente', () => {
      expect(cedula.format('1')).toBe('1')
      expect(cedula.format('12')).toBe('1-2')
      expect(cedula.format('12345')).toBe('1-234-5')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(cedula.strip('1-234-5678')).toBe('12345678')
      expect(cedula.strip('9-876-5432')).toBe('98765432')
    })
    it('lida com null/undefined', () => {
      expect(cedula.strip(null as unknown as string)).toBe('')
      expect(cedula.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cedula.mask).toBe('#-###-####')
    })
  })
})
