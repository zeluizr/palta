import { describe, it, expect } from 'vitest'
import * as cedula from '../../src/ni/cedula.js'

describe('ni/cedula', () => {
  describe('format', () => {
    it('formata cédula válida completa', () => {
      expect(cedula.format('0010101800001A')).toBe('001-010180-0001A')
    })
    it('formata cédula parcial (menos de 3 chars)', () => {
      expect(cedula.format('01')).toBe('01')
    })
    it('formata cédula parcial (3-8 chars)', () => {
      expect(cedula.format('00101')).toBe('001-01')
    })
    it('formata cédula parcial (9-12 chars)', () => {
      expect(cedula.format('00101018000')).toBe('001-010180-00')
    })
  })

  describe('strip', () => {
    it('remove hífens e mantém alfanumérico', () => {
      expect(cedula.strip('001-010180-0001A')).toBe('0010101800001A')
    })
    it('converte para maiúsculas', () => {
      expect(cedula.strip('001-010180-0001a')).toBe('0010101800001A')
    })
    it('lida com null/undefined', () => {
      expect(cedula.strip(null as any)).toBe('')
      expect(cedula.strip(undefined as any)).toBe('')
    })
  })

  describe('validate', () => {
    it('valida cédula com formato correto', () => {
      expect(cedula.validate('001-010180-0001A')).toBe(true)
    })
    it('valida sem hífens', () => {
      expect(cedula.validate('0010101800001A')).toBe(true)
    })
    it('rejeita cédula com tamanho errado', () => {
      expect(cedula.validate('001-010180-0001')).toBe(false)
      expect(cedula.validate('001-010180-0001AB')).toBe(false)
      expect(cedula.validate('')).toBe(false)
    })
    it('rejeita cédula sem letra no final', () => {
      expect(cedula.validate('00101018000011')).toBe(false)
      expect(cedula.validate('001010180000111')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cedula.validate(null as any)).toBe(false)
      expect(cedula.validate(undefined as any)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cedula.mask).toBe('###-######-###A')
    })
  })
})
