import './style.css'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Features } from './components/features.ts'
import { Footer } from './components/footer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('features')}
  ${BackgroundHero()}
  ${Features()}
  ${Footer()}
`

setupHeaderInteractions()
