import { describe, it, expect } from 'vitest'
import * as ci from '../../src/bo/ci.js'

describe('bo/ci', () => {
  describe('validate', () => {
    it('valida CI com 5 dígitos', () => {
      expect(ci.validate('12345')).toBe(true)
    })
    it('valida CI com 8 dígitos', () => {
      expect(ci.validate('12345678')).toBe(true)
    })
    it('valida CI com sufixo de departamento', () => {
      expect(ci.validate('1234567 SC')).toBe(true)
      expect(ci.validate('1234567 LP')).toBe(true)
    })
    it('rejeita CI com menos de 5 dígitos', () => {
      expect(ci.validate('1234')).toBe(false)
      expect(ci.validate('')).toBe(false)
    })
    it('rejeita CI com mais de 8 dígitos', () => {
      expect(ci.validate('123456789')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(ci.validate(null as unknown as string)).toBe(false)
      expect(ci.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata CI sem sufixo', () => {
      expect(ci.format('1234567')).toBe('1234567')
    })
    it('formata CI com sufixo válido', () => {
      expect(ci.format('1234567 SC')).toBe('1234567 SC')
      expect(ci.format('1234567 LP')).toBe('1234567 LP')
    })
    it('remove sufixo inválido', () => {
      expect(ci.format('1234567 XX')).toBe('1234567')
      expect(ci.format('1234567 ABC')).toBe('1234567')
    })
    it('retorna entrada para CI inválida', () => {
      expect(ci.format('123')).toBe('123')
    })
  })

  describe('strip', () => {
    it('remove pontuação e sufixo', () => {
      expect(ci.strip('1234567 SC')).toBe('1234567')
      expect(ci.strip('12.34.567 LP')).toBe('1234567')
    })
    it('lida com null/undefined', () => {
      expect(ci.strip(null as unknown as string)).toBe('')
      expect(ci.strip(undefined as unknown as string)).toBe('')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(ci.mask).toBe('#######')
    })
  })
})
