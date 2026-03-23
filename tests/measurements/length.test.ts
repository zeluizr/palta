import { describe, it, expect } from 'vitest'
import * as length from '../../src/measurements/length.js'

describe('measurements/length', () => {
  describe('convert', () => {
    it('cm → mm', () => expect(length.convert(10, 'cm', 'mm')).toBe(100))
    it('m → cm', () => expect(length.convert(1.5, 'm', 'cm')).toBe(150))
    it('ft → cm', () => expect(length.convert(1, 'ft', 'cm')).toBeCloseTo(30.48))
    it('km → m', () => expect(length.convert(1, 'km', 'm')).toBe(1000))
    it('in → mm', () => expect(length.convert(1, 'in', 'mm')).toBeCloseTo(25.4))
    it('mesma unidade retorna o mesmo valor', () => expect(length.convert(5, 'm', 'm')).toBe(5))
    it('retorna NaN para NaN', () => expect(length.convert(NaN, 'cm', 'm')).toBeNaN())
    it('retorna NaN para Infinity', () => expect(length.convert(Infinity, 'cm', 'm')).toBeNaN())
  })

  describe('format', () => {
    it('inteiro sem auto-escala exibe sem decimais', () => {
      expect(length.format(50, 'cm')).toBe('50 cm')
    })
    it('não-inteiro exibe com 2 decimais', () => {
      expect(length.format(1.5, 'm')).toBe('1,50 m')
    })
    it('cm ≥ 100 auto-escala para metros', () => {
      expect(length.format(100, 'cm')).toBe('1,00 m')
    })
    it('cm = 150 → 1,50 m', () => {
      expect(length.format(150, 'cm')).toBe('1,50 m')
    })
    it('cm = 1500 → 15,00 m', () => {
      expect(length.format(1500, 'cm')).toBe('15,00 m')
    })
    it('cm < 100 não auto-escala', () => {
      expect(length.format(99, 'cm')).toBe('99 cm')
    })
    it('options.decimals sobrescreve padrão', () => {
      expect(length.format(1.5, 'm', { decimals: 1 })).toBe('1,5 m')
    })
    it('options.decimals = 0 em inteiro', () => {
      expect(length.format(50, 'cm', { decimals: 0 })).toBe('50 cm')
    })
    it('retorna vazio para NaN', () => {
      expect(length.format(NaN, 'cm')).toBe('')
    })
    it('retorna vazio para Infinity', () => {
      expect(length.format(Infinity, 'cm')).toBe('')
    })
    it('unidades sem auto-escala (mm)', () => {
      expect(length.format(500, 'mm')).toBe('500 mm')
    })
    it('km com decimais', () => {
      expect(length.format(1.5, 'km')).toBe('1,50 km')
    })
  })
})
