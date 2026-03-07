import { describe, it, expect } from 'vitest'
import * as rif from '../../src/ve/rif.js'

describe('ve/rif', () => {
  describe('validate', () => {
    it('valida RIF J válido (J-12345678-5)', () => {
      expect(rif.validate('J-12345678-5')).toBe(true)
    })
    it('rejeita RIF J com dígito verificador errado', () => {
      expect(rif.validate('J-12345678-4')).toBe(false)
    })
    it('valida RIF V válido (V-12345678-1)', () => {
      // V=1, body=12345678, digits=[1,1,2,3,4,5,6,7,8]
      // weights=[4,3,2,7,6,5,4,3,2]
      // sum=4+3+4+21+24+25+24+21+16=142, rem=142%11=10, check=11-10=1
      expect(rif.validate('V-12345678-1')).toBe(true)
    })
    it('rejeita RIF V com dígito verificador errado', () => {
      expect(rif.validate('V-12345678-5')).toBe(false)
    })
    it('valida RIF com prefixo E', () => {
      // E=2, body=12345678, digits=[2,1,2,3,4,5,6,7,8]
      // sum=8+3+4+21+24+25+24+21+16=146, rem=146%11=3 (11*13=143, 146-143=3), check=11-3=8
      expect(rif.validate('E-12345678-8')).toBe(true)
    })
    it('valida RIF com prefixo G', () => {
      // G=3, body=12345678, digits=[3,1,2,3,4,5,6,7,8]
      // sum=12+3+4+21+24+25+24+21+16=150, rem=150%11=7 (11*13=143, 150-143=7), check=11-7=4
      expect(rif.validate('G-12345678-4')).toBe(true)
    })
    it('valida RIF com prefixo P', () => {
      // P=4, body=12345678, digits=[4,1,2,3,4,5,6,7,8]
      // sum=16+3+4+21+24+25+24+21+16=154, rem=154%11=0 (11*14=154), check=0
      expect(rif.validate('P-12345678-0')).toBe(true)
    })
    it('rejeita prefixo inválido', () => {
      expect(rif.validate('X-12345678-5')).toBe(false)
    })
    it('rejeita comprimento inválido', () => {
      expect(rif.validate('J-1234567-5')).toBe(false)
      expect(rif.validate('J-123456789-5')).toBe(false)
      expect(rif.validate('')).toBe(false)
    })
    it('lida com null/undefined', () => {
      expect(rif.validate(null as unknown as string)).toBe(false)
      expect(rif.validate(undefined as unknown as string)).toBe(false)
    })
  })

  describe('format', () => {
    it('formata RIF sem formatação', () => {
      expect(rif.format('J123456785')).toBe('J-12345678-5')
    })
    it('formata RIF já formatado', () => {
      expect(rif.format('J-12345678-5')).toBe('J-12345678-5')
    })
  })

  describe('strip', () => {
    it('remove hífens e espaços', () => {
      expect(rif.strip('J-12345678-5')).toBe('J123456785')
    })
    it('converte para maiúsculas', () => {
      expect(rif.strip('j-12345678-5')).toBe('J123456785')
    })
  })

  describe('mask', () => {
    it('retorna a máscara correta', () => {
      expect(rif.mask).toBe('X-XXXXXXXX-X')
    })
  })
})
