export function onlyDigits(v: string): string {
  return v.replace(/\D/g, '')
}

export function onlyDigitsAndK(v: string): string {
  return v.replace(/[^0-9kK]/g, '').toUpperCase()
}

export function padLeft(v: string, len: number, char: string): string {
  while (v.length < len) v = char + v
  return v
}

export function safeStr(v: unknown): string {
  if (v === null || v === undefined) return ''
  return String(v)
}
