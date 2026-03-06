import { describe, it, expect } from 'vitest'
import * as rut from '../../src/cl/rut.js'

describe('cl/rut', () => {
  describe('format', () => {
    it('formata RUT com 9 chars (corpo 8 + check)', () => {
      expect(rut.format('123456785')).toBe('12.345.678-5')
    })
    it('formata RUT com K', () => {
      expect(rut.format('76354771K')).toBe('76.354.771-K')
    })
    it('formata RUT de corpo menor', () => {
      expect(rut.format('76354771K')).toBe('76.354.771-K')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(rut.strip('12.345.678-5')).toBe('123456785')
    })
    it('converte k minúsculo para K', () => {
      expect(rut.strip('76.354.771-k')).toBe('76354771K')
    })
  })

  describe('getCheckDigit', () => {
    it('calcula dígito verificador correto', () => {
      expect(rut.getCheckDigit('12345678')).toBe('5')
    })
    it('calcula K como dígito verificador', () => {
      expect(rut.getCheckDigit('76354771')).toBe('K')
    })
    it('calcula 0 como dígito verificador', () => {
      expect(rut.getCheckDigit('31')).toBe('0')
    })
  })

  describe('validate', () => {
    it('valida RUT válido', () => {
      expect(rut.validate('12.345.678-5')).toBe(true)
      expect(rut.validate('123456785')).toBe(true)
    })
    it('valida RUT com K', () => {
      expect(rut.validate('76.354.771-K')).toBe(true)
    })
    it('rejeita RUT com check errado', () => {
      expect(rut.validate('12.345.678-9')).toBe(false)
    })
    it('rejeita RUT inválido', () => {
      expect(rut.validate('')).toBe(false)
      expect(rut.validate('1')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(rut.validate(null as unknown as string)).toBe(false)
      expect(rut.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(rut.mask).toBe('##.###.###-X')
    })
  })
})
