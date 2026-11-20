import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Site URL used for canonical / Open Graph tags.
// Set SITE_URL (e.g. https://nobi.dev) on Vercel, otherwise the production
// domain Vercel exposes automatically is used. Empty = relative URLs.
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '')
).replace(/\/$/, '')

const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectSiteUrl()],
})
