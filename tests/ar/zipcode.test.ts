import { describe, it, expect } from 'vitest'
import * as zipcode from '../../src/ar/zipcode.js'

describe('ar/zipcode', () => {
  describe('format', () => {
    it('retorna CPA como está', () => {
      expect(zipcode.format('C1002AAF')).toBe('C1002AAF')
    })
    it('retorna código postal velho como está', () => {
      expect(zipcode.format('1002')).toBe('1002')
    })
  })

  describe('strip', () => {
    it('remove espaços e converte para maiúsculo', () => {
      expect(zipcode.strip('c1002aaf')).toBe('C1002AAF')
    })
  })

  describe('validate', () => {
    it('valida formato CPA', () => {
      expect(zipcode.validate('C1002AAF')).toBe(true)
      expect(zipcode.validate('B1636DSF')).toBe(true)
    })
    it('valida código postal de 4 dígitos', () => {
      expect(zipcode.validate('1002')).toBe(true)
    })
    it('rejeita formato inválido', () => {
      expect(zipcode.validate('123')).toBe(false)
      expect(zipcode.validate('')).toBe(false)
      expect(zipcode.validate('12345')).toBe(false)
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(zipcode.mask).toBe('A####AAA')
    })
  })
})
