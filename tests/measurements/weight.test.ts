import { describe, it, expect } from 'vitest'
import * as weight from '../../src/measurements/weight.js'

describe('measurements/weight', () => {
  describe('convert', () => {
    it('kg → g', () => expect(weight.convert(1, 'kg', 'g')).toBe(1000))
    it('g → kg', () => expect(weight.convert(500, 'g', 'kg')).toBe(0.5))
    it('lb → kg', () => expect(weight.convert(1, 'lb', 'kg')).toBeCloseTo(0.453592))
    it('oz → g', () => expect(weight.convert(1, 'oz', 'g')).toBeCloseTo(28.3495))
    it('kg → mg', () => expect(weight.convert(1, 'kg', 'mg')).toBe(1_000_000))
    it('mesma unidade retorna o mesmo valor', () => expect(weight.convert(5, 'kg', 'kg')).toBe(5))
    it('retorna NaN para NaN', () => expect(weight.convert(NaN, 'g', 'kg')).toBeNaN())
    it('retorna NaN para Infinity', () => expect(weight.convert(Infinity, 'g', 'kg')).toBeNaN())
  })

  describe('format', () => {
    it('inteiro sem auto-escala exibe sem decimais', () => {
      expect(weight.format(500, 'g')).toBe('500 g')
    })
    it('g ≥ 1000 auto-escala para kg', () => {
      expect(weight.format(1000, 'g')).toBe('1,00 kg')
    })
    it('g = 1500 → 1,50 kg', () => {
      expect(weight.format(1500, 'g')).toBe('1,50 kg')
    })
    it('g < 1000 não auto-escala', () => {
      expect(weight.format(999, 'g')).toBe('999 g')
    })
    it('kg com decimais', () => {
      expect(weight.format(1.5, 'kg')).toBe('1,50 kg')
    })
    it('options.decimals sobrescreve padrão', () => {
      expect(weight.format(1500, 'g', { decimals: 3 })).toBe('1,500 kg')
    })
    it('retorna vazio para NaN', () => {
      expect(weight.format(NaN, 'g')).toBe('')
    })
    it('retorna vazio para Infinity', () => {
      expect(weight.format(Infinity, 'g')).toBe('')
    })
    it('unidades sem auto-escala (mg)', () => {
      expect(weight.format(500, 'mg')).toBe('500 mg')
    })
    it('lb com decimais', () => {
      expect(weight.format(1.5, 'lb')).toBe('1,50 lb')
    })
  })
})
