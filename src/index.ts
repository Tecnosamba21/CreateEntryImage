import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import generateTemplate from './generate-template'
import puppeteer from 'puppeteer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

type Params = {
    title: string,
    tech: string
}

app.get('/', async (req: Request, res: Response) => {
    if (req.query.title == null || req.query.tech == null) res.status(500).json({ message: 'Invalid request' })

    const title = req.query.title as string
    const tech = req.query.tech as string

    const template = generateTemplate(title, tech)

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.setViewport({ width: 1200, height: 630 })
    await page.setContent(template, { waitUntil: 'networkidle0' })

    const image = await page.screenshot({ type: 'png' })
    await browser.close()

    res.set('Content-Type', 'image/png')
    res.send(image)
})

app.listen(PORT)
console.log(`App listenning on port: ${PORT}`)