import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export type LocaleType = 'fr' | 'en' | 'es' | 'it' | 'nl' | 'de'

export const locales: LocaleType[] = ['fr', 'en', 'es', 'it', 'nl', 'de']

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'fr',
})

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix: undefined,
})
