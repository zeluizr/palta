import { describe, it, expect } from 'vitest'
import * as juridica from '../../src/cr/juridica.js'

describe('cr/juridica', () => {
  describe('validate', () => {
    it('valida cédula jurídica válida', () => {
      expect(juridica.validate('3101123456')).toBe(true)
    })
    it('rejeita cédula jurídica com comprimento inválido', () => {
      expect(juridica.validate('310112345')).toBe(false)
      expect(juridica.validate('31011234567')).toBe(false)
      expect(juridica.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(juridica.validate(null as unknown as string)).toBe(false)
      expect(juridica.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata cédula jurídica com 10 dígitos', () => {
      expect(juridica.format('3101123456')).toBe('3-101-123456')
    })
    it('formata parcialmente', () => {
      expect(juridica.format('3')).toBe('3')
      expect(juridica.format('31')).toBe('3-1')
      expect(juridica.format('3101')).toBe('3-101')
      expect(juridica.format('3101123')).toBe('3-101-123')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(juridica.strip('3-101-123456')).toBe('3101123456')
    })
    it('lida com null/undefined', () => {
      expect(juridica.strip(null as unknown as string)).toBe('')
      expect(juridica.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(juridica.mask).toBe('#-###-######')
    })
  })
})
