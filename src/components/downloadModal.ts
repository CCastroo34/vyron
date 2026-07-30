/** Single source: direct download URL for the current release asset */
export const GAME_DOWNLOAD = {
  // Stable GitHub link: always serves the asset with this exact filename from the latest Release.
  url: 'https://github.com/CCastroo34/vyron/releases/latest/download/Vyron-Setup.exe',
  fileName: 'Vyron-Setup.exe',
} as const

const TRANSITION_MS = 320

/**
 * Starts the file download without opening a new tab.
 * Uses a temporary in-page link so the browser stays on this site while the download runs.
 */
function executeDownload(): void {
  const link = document.createElement('a')
  link.href = GAME_DOWNLOAD.url
  link.download = GAME_DOWNLOAD.fileName
  link.rel = 'noopener noreferrer'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function getRoot(): HTMLElement | null {
  return document.getElementById('download-modal-root')
}

function getPanel(root: HTMLElement): HTMLElement | null {
  return root.querySelector('.download-modal-panel')
}

const PANEL_OPEN = ['opacity-100', 'translate-y-0', 'scale-100'] as const
const PANEL_CLOSED = ['opacity-0', 'translate-y-8', 'scale-[0.98]'] as const

export function closeDownloadModal(): void {
  const root = getRoot()
  if (!root) return

  const panel = getPanel(root)
  panel?.classList.remove(...PANEL_OPEN)
  panel?.classList.add(...PANEL_CLOSED)

  root.classList.remove('opacity-100', 'pointer-events-auto')
  root.classList.add('opacity-0', 'pointer-events-none', 'invisible')
  root.setAttribute('aria-hidden', 'true')

  window.setTimeout(() => {
    document.body.classList.remove('overflow-hidden')
  }, TRANSITION_MS)
}

export function openDownloadModal(): void {
  if (!getRoot()) setupDownloadModal()
  const root = getRoot()
  if (!root) return

  const alreadyOpen =
    root.classList.contains('opacity-100') && root.classList.contains('pointer-events-auto')

  if (alreadyOpen) {
    root.setAttribute('aria-hidden', 'false')
    document.body.classList.add('overflow-hidden')
    return
  }

  const panel = getPanel(root)
  if (panel) {
    panel.classList.remove(...PANEL_OPEN)
    panel.classList.add(...PANEL_CLOSED)
  }

  root.setAttribute('aria-hidden', 'false')
  document.body.classList.add('overflow-hidden')

  root.classList.remove('opacity-0', 'pointer-events-none', 'invisible')
  root.classList.add('opacity-100', 'pointer-events-auto')

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const p = getPanel(root)
      if (!p) return
      p.classList.remove(...PANEL_CLOSED)
      p.classList.add(...PANEL_OPEN)
    })
  })

  const title = root.querySelector('#download-modal-title')
  if (title instanceof HTMLElement) title.focus()
}

export function setupDownloadModal(): void {
  if (document.getElementById('download-modal-root')) return

  const root = document.createElement('div')
  root.id = 'download-modal-root'
  root.className = [
    'fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4',
    'invisible opacity-0 pointer-events-none transition-opacity duration-300 ease-out',
  ].join(' ')
  root.setAttribute('aria-hidden', 'true')

  root.innerHTML = `
    <div
      class="download-modal-backdrop absolute inset-0 z-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ease-out"
      data-download-modal-backdrop
      tabindex="-1"
      aria-hidden="true"
    ></div>
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      class="download-modal-panel relative z-10 w-full sm:max-w-md max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-t-2xl sm:rounded-2xl bg-neutral-900 border border-red-900/30 shadow-2xl shadow-red-950/40 pointer-events-auto origin-bottom sm:origin-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-8 scale-[0.98]"
    >
      <div class="p-5 sm:p-6 border-b border-red-900/20 flex items-start justify-between gap-3">
        <h2 id="download-modal-title" tabindex="-1" class="text-lg sm:text-xl font-bold text-gray-100 pr-2">
          Starting your download
        </h2>
        <button type="button" class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500" data-download-modal-close aria-label="Close">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="p-5 sm:p-6 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
        <p>
          Your download should begin immediately. The file is
          <code class="text-xs sm:text-sm bg-white/5 px-1.5 py-0.5 rounded text-gray-200">${GAME_DOWNLOAD.fileName}</code>.
        </p>

        <ol class="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300 pl-1">
          <li>When the download finishes, open <code class="text-xs bg-white/5 px-1 rounded">${GAME_DOWNLOAD.fileName}</code> from your Downloads folder.</li>
          <li>If Windows shows a SmartScreen warning, click "More info" then "Run anyway" (this is normal for new, unsigned installers).</li>
          <li>Follow the on-screen setup steps to install the game.</li>
        </ol>

        <p class="text-xs text-gray-500">
          Having trouble? Reach out at <a class="text-red-400 hover:underline font-medium" href="mailto:contact@vyrondev.com">contact@vyrondev.com</a>.
        </p>
      </div>

      <div class="p-5 sm:p-6 pt-0 flex justify-end">
        <button type="button" data-download-modal-dismiss class="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white font-semibold shadow-lg hover:shadow-red-900/40 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
          Got it
        </button>
      </div>
    </div>
  `

  document.body.appendChild(root)

  const closeSelectors =
    '[data-download-modal-close], [data-download-modal-dismiss], [data-download-modal-backdrop]'
  root.querySelectorAll(closeSelectors).forEach((el) => {
    el.addEventListener('click', () => {
      closeDownloadModal()
    })
  })

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    if (root.classList.contains('invisible') || root.classList.contains('opacity-0')) return
    closeDownloadModal()
  })
}

/** First click: open the release page (new tab) and show guidance modal. */
export function downloadGame(): void {
  executeDownload()
  openDownloadModal()
}
