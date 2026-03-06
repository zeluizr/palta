import { describe, it, expect } from 'vitest'
import * as cpf from '../../src/br/cpf.js'

describe('br/cpf', () => {
  describe('format', () => {
    it('formata CPF sem pontuação', () => {
      expect(cpf.format('52998224725')).toBe('529.982.247-25')
    })
    it('formata CPF com pontuação', () => {
      expect(cpf.format('529.982.247-25')).toBe('529.982.247-25')
    })
    it('formata parcialmente', () => {
      expect(cpf.format('529')).toBe('529')
      expect(cpf.format('529982')).toBe('529.982')
      expect(cpf.format('529982247')).toBe('529.982.247')
    })
    it('retorna string vazia para input vazio', () => {
      expect(cpf.format('')).toBe('')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(cpf.strip('529.982.247-25')).toBe('52998224725')
    })
    it('mantém só dígitos', () => {
      expect(cpf.strip('  529.982.247-25  ')).toBe('52998224725')
    })
  })

  describe('validate', () => {
    it('valida CPF válido', () => {
      expect(cpf.validate('529.982.247-25')).toBe(true)
      expect(cpf.validate('52998224725')).toBe(true)
    })
    it('rejeita todos dígitos iguais', () => {
      expect(cpf.validate('111.111.111-11')).toBe(false)
      expect(cpf.validate('00000000000')).toBe(false)
      expect(cpf.validate('99999999999')).toBe(false)
    })
    it('rejeita CPF com comprimento inválido', () => {
      expect(cpf.validate('123456789')).toBe(false)
      expect(cpf.validate('')).toBe(false)
    })
    it('rejeita CPF com dígito verificador errado', () => {
      expect(cpf.validate('529.982.247-26')).toBe(false)
      expect(cpf.validate('529.982.247-00')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cpf.validate(null as unknown as string)).toBe(false)
      expect(cpf.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cpf.mask).toBe('###.###.###-##')
    })
  })
})
