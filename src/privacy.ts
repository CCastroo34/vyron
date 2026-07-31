import './style.css'
import { inject } from '@vercel/analytics'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Privacy } from './components/privacy.ts'
import { Footer } from './components/footer.ts'

// Initialize Vercel Web Analytics
inject()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('privacy')}
  ${BackgroundHero()}
  ${Privacy()}
  ${Footer()}
`

setupHeaderInteractions()
