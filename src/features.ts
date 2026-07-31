import './style.css'
import { inject } from '@vercel/analytics'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Features } from './components/features.ts'
import { Footer } from './components/footer.ts'

// Initialize Vercel Web Analytics
inject()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('features')}
  ${BackgroundHero()}
  ${Features()}
  ${Footer()}
`

setupHeaderInteractions()
