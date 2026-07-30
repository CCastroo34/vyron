export function Header(active: string = 'home'): string {
  const navItem = (href: string, label: string, key: string) => {
    const isActive = active === key
    const activeClasses = isActive
      ? 'text-red-500 border-red-600'
      : 'text-gray-300 border-transparent hover:text-red-400 hover:border-red-800'
    return `<a class="py-2 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0 md:border-b-2 ${activeClasses} font-medium focus:outline-hidden transition-colors duration-300 text-base md:text-sm" href="${href}"${isActive ? ' aria-current="page"' : ''}>${label}</a>`
  }

  return `
    <header class="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav class="mt-2 md:mt-4 relative max-w-5xl w-full bg-gradient-to-r from-black/90 via-red-950/60 to-black/90 backdrop-blur-lg bg-opacity-95 border border-red-900/50 rounded-[20px] md:rounded-[28px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-2 md:p-1 ps-4 md:ps-5 md:py-0 sm:mx-auto shadow-lg shadow-red-950/40">
            <div class="flex items-center min-w-0 flex-1 md:flex-none">
            <!-- Logo -->
            <a class="flex-none flex items-center gap-2 rounded-md focus:outline-hidden focus:opacity-80 group" href="https://vyrondev.com/" aria-label="Vyron">
                <img src="/assets/logo.png" alt="Vyron" class="h-8 md:h-9 w-auto object-contain drop-shadow-[0_0_6px_rgba(190,18,60,0.5)]" onerror="this.style.display='none'">
                <span class="hidden xs:inline text-base md:text-lg font-bold tracking-widest uppercase text-gray-100 group-hover:text-red-500 transition-colors duration-300 truncate">VYRON</span>
            </a>
            <!-- End Logo -->
            </div>

            <div class="flex items-center gap-1 md:order-4 md:ms-4">
            <!-- CTA button -->
            <a class="hidden sm:inline-flex w-full sm:w-auto whitespace-nowrap py-2 md:py-2.5 px-3 md:px-4 inline-flex justify-center items-center gap-x-2 text-xs md:text-sm font-semibold rounded-full border border-red-800/60 bg-red-900/30 backdrop-blur-sm text-red-300 hover:bg-red-800/50 hover:border-red-600 hover:text-white focus:outline-hidden transition-all duration-300 shadow-sm" href="https://github.com/vyron-team/vyron/releases/latest" target="_blank" rel="noopener">
                <span class="hidden md:inline">Download</span>
                <span class="md:hidden">Download</span>
            </a>

            <div class="md:hidden">
                <!-- Toggle Button -->
                <button type="button" id="vyron-nav-toggle" class="flex justify-center items-center w-10 h-10 border border-red-900/60 text-gray-300 rounded-full hover:bg-red-950/60 focus:outline-hidden transition-all duration-300" aria-expanded="false" aria-controls="vyron-navbar-collapse" aria-label="Toggle navigation">
                <svg id="vyron-nav-icon-open" class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg id="vyron-nav-icon-close" class="hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <!-- End Toggle Button -->
            </div>
            </div>

            <!-- Navigation Menu -->
            <div id="vyron-navbar-collapse" class="hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-1 md:gap-4 mt-4 md:mt-0 py-3 md:py-0 md:ps-7 border-t md:border-t-0 border-red-900/40 md:border-none">
                ${navItem('/', 'Home', 'home')}
                ${navItem('/features.html', 'Features', 'features')}
                ${navItem('/requirements.html', 'Requirements', 'requirements')}
                ${navItem('/faq.html', 'FAQ', 'faq')}
                ${navItem('/updates.html', 'Updates', 'updates')}
                ${navItem('/privacy.html', 'Privacy', 'privacy')}
                <a class="sm:hidden py-2 px-4 mt-2 rounded-lg bg-red-900/40 border border-red-800/60 text-red-300 font-medium text-center transition-all duration-300" href="https://github.com/CCastroo34/vyron/releases/download/1.0.0/VyronSetup.2.1.1.exe" target="_blank" rel="noopener">Download</a>
            </div>
            </div>
        </nav>
    </header>
  `
}

export function setupHeaderInteractions() {
  const toggle = document.querySelector<HTMLButtonElement>('#vyron-nav-toggle')
  const menu = document.querySelector<HTMLElement>('#vyron-navbar-collapse')
  const iconOpen = document.querySelector<HTMLElement>('#vyron-nav-icon-open')
  const iconClose = document.querySelector<HTMLElement>('#vyron-nav-icon-close')

  if (!toggle || !menu) return

  toggle.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden')
    if (isHidden) {
      menu.classList.remove('hidden')
      toggle.setAttribute('aria-expanded', 'true')
      iconOpen?.classList.add('hidden')
      iconClose?.classList.remove('hidden')
    } else {
      menu.classList.add('hidden')
      toggle.setAttribute('aria-expanded', 'false')
      iconOpen?.classList.remove('hidden')
      iconClose?.classList.add('hidden')
    }
  })
}
