import './style.css'
import { inject } from '@vercel/analytics'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Faq, setupFaqInteractions } from './components/faq.ts'
import { Footer } from './components/footer.ts'

// Initialize Vercel Web Analytics
inject()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('faq')}
  ${BackgroundHero()}
  ${Faq()}
  ${Footer()}
`

setupHeaderInteractions()
setupFaqInteractions()
