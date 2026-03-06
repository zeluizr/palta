import { describe, it, expect } from 'vitest'
import * as cnpj from '../../src/br/cnpj.js'

describe('br/cnpj', () => {
  describe('format', () => {
    it('formata CNPJ sem pontuação', () => {
      expect(cnpj.format('11222333000181')).toBe('11.222.333/0001-81')
    })
    it('formata CNPJ com pontuação', () => {
      expect(cnpj.format('11.222.333/0001-81')).toBe('11.222.333/0001-81')
    })
    it('formata parcialmente', () => {
      expect(cnpj.format('11')).toBe('11')
      expect(cnpj.format('11222')).toBe('11.222')
      expect(cnpj.format('11222333')).toBe('11.222.333')
      expect(cnpj.format('112223330001')).toBe('11.222.333/0001')
    })
  })

  describe('strip', () => {
    it('remove pontuação', () => {
      expect(cnpj.strip('11.222.333/0001-81')).toBe('11222333000181')
    })
  })

  describe('validate', () => {
    it('valida CNPJ válido', () => {
      expect(cnpj.validate('11.222.333/0001-81')).toBe(true)
      expect(cnpj.validate('11222333000181')).toBe(true)
    })
    it('rejeita todos dígitos iguais', () => {
      expect(cnpj.validate('11111111111111')).toBe(false)
      expect(cnpj.validate('00000000000000')).toBe(false)
    })
    it('rejeita CNPJ com comprimento inválido', () => {
      expect(cnpj.validate('1122233300018')).toBe(false)
      expect(cnpj.validate('')).toBe(false)
    })
    it('rejeita CNPJ com dígito verificador errado', () => {
      expect(cnpj.validate('11.222.333/0001-82')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(cnpj.validate(null as unknown as string)).toBe(false)
      expect(cnpj.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(cnpj.mask).toBe('##.###.###/####-##')
    })
  })
})
