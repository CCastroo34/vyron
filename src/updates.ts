import './style.css'
import { inject } from '@vercel/analytics'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Updates } from './components/updates.ts'
import { Footer } from './components/footer.ts'

// Initialize Vercel Web Analytics
inject()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('updates')}
  ${BackgroundHero()}
  ${Updates()}
  ${Footer()}
`

setupHeaderInteractions()
