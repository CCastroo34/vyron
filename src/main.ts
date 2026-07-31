import './style.css'
import { inject } from '@vercel/analytics'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Hero, setupMediaGallery } from './components/hero.ts'
import { Footer } from './components/footer.ts'
import { setupDownloadModal, downloadGame } from './components/downloadModal.ts'

// Initialize Vercel Web Analytics
inject()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('home')}
  ${BackgroundHero()}
  ${Hero()}
  ${Footer()}
`

setupHeaderInteractions()
setupMediaGallery()
setupDownloadModal()
;(window as unknown as { downloadGame: typeof downloadGame }).downloadGame = downloadGame
