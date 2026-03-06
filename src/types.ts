export interface DocumentModule {
  format(value: string): string
  strip(value: string): string
  validate(value: string): boolean
  mask: string
}

export interface CurrencyModule {
  format(value: number, options?: { decimals?: number; symbol?: boolean }): string
  parse(value: string): number
  symbol: string
  code: string
}

export interface PhoneModule {
  format(value: string, options?: { international?: boolean }): string
  validate(value: string): boolean
  mask: string | { mobile: string; landline: string }
  countryCode: string
}

export interface ZipcodeModule {
  format(value: string): string
  validate(value: string): boolean
  mask: string
}

export interface DetectResult {
  country: 'BR' | 'CL' | 'AR' | 'CO' | 'PE'
  type: 'cpf' | 'cnpj' | 'rut' | 'cuit' | 'dni' | 'nit' | 'cc' | 'ruc'
  valid: boolean
  formatted: string
}
