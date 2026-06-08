import { defineConfig } from 'vite';
import { resolve } from 'path';

const pages = [
  'index.html',
  'about.html',
  'services.html',
  'mobile-notary.html',
  'online-notary.html',
  'tools.html',
  'business-services.html',
  'pricing.html',
  'booking.html',
  'contact.html',
  'faq.html'
];

export default defineConfig({
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace('.html', ''), resolve(__dirname, page)])
      )
    }
  }
});
