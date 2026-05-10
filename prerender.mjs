import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const ROUTES = ['/', '/blog/0', '/blog/1', '/blog/2']
const DIST   = './dist'
const PORT   = 4173

const browser = await puppeteer.launch()

for (const route of ROUTES) {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' })
  const html = await page.content()

  const outDir = path.join(DIST, route)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`✓ prerendered ${route}`)
}

await browser.close()