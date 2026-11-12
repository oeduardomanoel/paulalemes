import type { H3Event } from 'h3'

export const siteBase = (event: H3Event) =>
  String(useRuntimeConfig(event).public.siteUrl || '').replace(/\/$/, '')
