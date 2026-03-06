import { describe, it, expect } from 'vitest'
import { detect } from '../src/detect.js'

describe('detect', () => {
  it('retorna null para string vazia', () => {
    expect(detect('')).toBeNull()
  })

  it('retorna null para comprimento desconhecido', () => {
    expect(detect('12345')).toBeNull()
  })

  it('detecta CPF válido', () => {
    const result = detect('529.982.247-25')
    expect(result).not.toBeNull()
    expect(result?.country).toBe('BR')
    expect(result?.type).toBe('cpf')
    expect(result?.valid).toBe(true)
    expect(result?.formatted).toBe('529.982.247-25')
  })

  it('detecta CNPJ válido', () => {
    const result = detect('11.222.333/0001-81')
    expect(result).not.toBeNull()
    expect(result?.country).toBe('BR')
    expect(result?.type).toBe('cnpj')
    expect(result?.valid).toBe(true)
  })

  it('detecta RUT chileno com K', () => {
    const result = detect('76.354.771-K')
    expect(result).not.toBeNull()
    expect(result?.country).toBe('CL')
    expect(result?.type).toBe('rut')
    expect(result?.valid).toBe(true)
  })

  it('detecta CUIT argentino válido', () => {
    const result = detect('20-12345678-6')
    expect(result).not.toBeNull()
    expect(result?.country).toBe('AR')
    expect(result?.type).toBe('cuit')
    expect(result?.valid).toBe(true)
  })

  it('detecta DNI peruano (8 dígitos)', () => {
    const result = detect('12345678')
    expect(result).not.toBeNull()
    expect(result?.type).toBe('dni')
  })

  it('detecta CC colombiana (10 dígitos)', () => {
    const result = detect('1234567890')
    expect(result).not.toBeNull()
    expect(result?.country).toBe('CO')
    expect(result?.type).toBe('cc')
  })

  it('retorna valid=false para CPF com dígito verificador errado', () => {
    const result = detect('52998224726')
    expect(result).not.toBeNull()
    expect(result?.valid).toBe(false)
  })
})
