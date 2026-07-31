interface FaqItem {
  question: string
  answer: string
}

const FAQ_LIST: FaqItem[] = [
  {
    question: 'What is Vyron?',
    answer: 'Vyron is a multiplayer co-op horror game that combines exploration, puzzle-solving, and survival. Enter abandoned locations with your team, investigate supernatural events, uncover disturbing secrets, and do everything you can to make it out alive.',
  },
  {
    question: 'Why does Windows SmartScreen or my antivirus show a warning?',
    answer: 'Windows SmartScreen may display a warning for new or lesser-known applications. If you downloaded Vyron from our official website, click <span class="font-bold text-red-400">"More info"</span> → <span class="font-bold text-red-400">"Run anyway"</span>. If your antivirus blocks or quarantines the installer, restore it or add an exception for the extracted setup before launching the game.',
  },
  {
    question: 'Do I need to run the installer as administrator?',
    answer: 'Yes. Running the installer as administrator allows Vyron to install all required files, dependencies, and any additional components needed for the game. Right-click the <kbd class="inline-flex items-center rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-200 shadow-sm">VyronSetup.2.1.1.exe</kbd> file and choose <span class="font-bold text-red-400">"Run as administrator"</span>. This allows the installer to copy files to <strong>Program Files</strong>, install required components, and complete the setup without permission issues.',
  },
  {
    question: 'Why does the archive appear to be corrupted?',
    answer: 'A corrupted archive usually means the download was interrupted or incomplete. Delete the existing file and download it again from our official website. If the issue persists, try a different browser, temporarily disable your VPN, ensure you have enough free disk space, and extract the archive.',
  },
  {
    question: 'The installer is stuck. What should I do?',
    answer: 'If the installer appears to be frozen, wait a few minutes as it may be downloading or installing required components in the background. If it does not continue, close the installer, restart your PC, and run the setup again as an administrator.',
  },
  {
    question: 'The game closes without showing an error message.',
    answer: 'This is usually caused by outdated graphics drivers, corrupted game files, or software running in the background. Update your GPU drivers, restart your PC, temporarily disable overlays such as MSI Afterburner or Discord, and make sure your antivirus has not quarantined any game files.',
  },
  {
    question: 'The game freezes during the first launch. Is this normal?',
    answer: 'Yes. During the first launch, Vyron may take longer than usual to start while it creates save data, compiles shaders, and prepares game files for your system. This process can take several minutes depending on your hardware. Avoid closing the game unless it remains unresponsive for more than 10 minutes.',
  },
  {
    question: 'How do I get in touch with the team?',
    answer: 'You can reach Vyron Team at <span class="font-bold text-red-400">contact@vyrondev.com</span> or through the community links in the footer of this site.',
  },
]

export const Faq = () => {
  const items = FAQ_LIST.map((item, index) => `
            <div class="faq-item border border-red-900/30 rounded-xl bg-gradient-to-b from-red-950/10 to-black overflow-hidden">
              <button type="button" class="faq-toggle w-full flex items-center justify-between gap-4 text-left px-5 py-4 text-gray-100 font-medium hover:text-red-400 transition-colors duration-200" data-index="${index}" aria-expanded="false">
                <span>${item.question}</span>
                <svg class="faq-icon w-5 h-5 shrink-0 text-red-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="faq-panel hidden px-5 pb-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                ${item.answer}
              </div>
            </div>`).join('')

  return `
    <section id="faq-content" class="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div class="mb-8 sm:mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-tight uppercase">FAQ</h1>
        <div class="w-16 h-1 bg-gradient-to-r from-red-700 to-red-900 mx-auto mb-4"></div>
        <p class="text-gray-400 text-sm sm:text-base">Frequently asked questions about Vyron.</p>
      </div>
      <div class="space-y-3">
        ${items}
      </div>
    </section>
  `
}

export function setupFaqInteractions() {
  const toggles = document.querySelectorAll<HTMLButtonElement>('.faq-toggle')
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const panel = toggle.parentElement?.querySelector<HTMLElement>('.faq-panel')
      const icon = toggle.querySelector<HTMLElement>('.faq-icon')
      if (!panel) return
      const isHidden = panel.classList.contains('hidden')
      panel.classList.toggle('hidden', !isHidden)
      toggle.setAttribute('aria-expanded', String(isHidden))
      icon?.classList.toggle('rotate-180', isHidden)
    })
  })
}
