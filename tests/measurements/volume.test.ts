import { describe, it, expect } from 'vitest'
import * as volume from '../../src/measurements/volume.js'

describe('measurements/volume', () => {
  describe('convert', () => {
    it('l → ml', () => expect(volume.convert(1, 'l', 'ml')).toBe(1000))
    it('ml → l', () => expect(volume.convert(500, 'ml', 'l')).toBe(0.5))
    it('l → fl oz', () => expect(volume.convert(1, 'l', 'fl oz')).toBeCloseTo(33.814))
    it('fl oz → ml', () => expect(volume.convert(1, 'fl oz', 'ml')).toBeCloseTo(29.5735))
    it('mesma unidade retorna o mesmo valor', () => expect(volume.convert(5, 'l', 'l')).toBe(5))
    it('retorna NaN para NaN', () => expect(volume.convert(NaN, 'ml', 'l')).toBeNaN())
    it('retorna NaN para Infinity', () => expect(volume.convert(Infinity, 'ml', 'l')).toBeNaN())
  })

  describe('format', () => {
    it('inteiro sem auto-escala exibe sem decimais', () => {
      expect(volume.format(750, 'ml')).toBe('750 ml')
    })
    it('ml ≥ 1000 auto-escala para l', () => {
      expect(volume.format(1000, 'ml')).toBe('1,00 l')
    })
    it('ml = 1500 → 1,50 l', () => {
      expect(volume.format(1500, 'ml')).toBe('1,50 l')
    })
    it('ml < 1000 não auto-escala', () => {
      expect(volume.format(999, 'ml')).toBe('999 ml')
    })
    it('l com decimais', () => {
      expect(volume.format(1.5, 'l')).toBe('1,50 l')
    })
    it('options.decimals sobrescreve padrão', () => {
      expect(volume.format(1500, 'ml', { decimals: 1 })).toBe('1,5 l')
    })
    it('retorna vazio para NaN', () => {
      expect(volume.format(NaN, 'ml')).toBe('')
    })
    it('retorna vazio para Infinity', () => {
      expect(volume.format(Infinity, 'ml')).toBe('')
    })
    it('fl oz com decimais', () => {
      expect(volume.format(1.5, 'fl oz')).toBe('1,50 fl oz')
    })
  })
})
