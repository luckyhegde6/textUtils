export function wordCount(text: string): number {
  if (!text) return 0
  return text.trim().split(/\s+/).filter(Boolean).length
}

export function charCount(text: string): number {
  if (!text) return 0
  return text.length
}
