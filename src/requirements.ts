import './style.css'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Requirements } from './components/requirements.ts'
import { Footer } from './components/footer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('requirements')}
  ${BackgroundHero()}
  ${Requirements()}
  ${Footer()}
`

setupHeaderInteractions()
