import './style.css'
import { Header, setupHeaderInteractions } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Updates } from './components/updates.ts'
import { Footer } from './components/footer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header('updates')}
  ${BackgroundHero()}
  ${Updates()}
  ${Footer()}
`

setupHeaderInteractions()
