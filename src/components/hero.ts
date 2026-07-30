export function Hero(): string {
  return `
    <section class="max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full relative pt-24 sm:pt-28 lg:pt-32 mb-8 sm:mb-12">

      <!-- Main Grid Layout -->
      <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">

        <!-- Left Side - Media Gallery -->
        <div class="lg:col-span-2 order-2 lg:order-1">
          <!-- Main Game Media -->
          <div class="relative mb-3 sm:mb-4 group" id="main-display">
            <video id="main-video" src="/assets/video/trailer.mp4" poster="/assets/images/hero-key-art.png" class="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-2xl shadow-red-950/40 border border-red-900/30 bg-black" controls playsinline preload="metadata"></video>
          </div>

          <!-- Thumbnail Gallery -->
          <div class="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
            <img src="/assets/images/screenshot-1.jpg" alt="Screenshot 1" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-red-600 snap-start" data-src="/assets/images/screenshot-1.jpg" onerror="this.style.opacity='0.15'">
            <img src="/assets/images/screenshot-2.jpg" alt="Screenshot 2" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-src="/assets/images/screenshot-2.jpg" onerror="this.style.opacity='0.15'">
            <img src="/assets/images/screenshot-3.jpg" alt="Screenshot 3" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-src="/assets/images/screenshot-3.jpg" onerror="this.style.opacity='0.15'">
            <img src="/assets/images/screenshot-4.jpg" alt="Screenshot 4" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-src="/assets/images/screenshot-4.jpg" onerror="this.style.opacity='0.15'">
            <img src="/assets/images/screenshot-5.jpg" alt="Screenshot 5" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-src="/assets/images/screenshot-5.jpg" onerror="this.style.opacity='0.15'">
            <img src="/assets/images/screenshot-6.jpg" alt="Screenshot 6" class="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-all thumbnail-item border-2 border-transparent snap-start" data-src="/assets/images/screenshot-6.jpg" onerror="this.style.opacity='0.15'">
          </div>

          <!-- Screenshot Lightbox -->
          <div id="screenshot-lightbox" class="fixed inset-0 z-[300] hidden items-center justify-center p-4 bg-black/90 backdrop-blur-sm" aria-hidden="true">
            <button type="button" data-lightbox-close aria-label="Close preview" class="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <img id="lightbox-image" src="" alt="Screenshot preview" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl">
          </div>

          <!-- About Vyron Section -->
          <div id="about" class="mt-12 sm:mt-16 max-w-4xl mx-auto scroll-mt-28">
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-100 mb-3 sm:mb-4 tracking-tight">About Vyron</h2>
              <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-red-700 to-red-900"></div>
            </div>

            <div class="prose prose-sm sm:prose-lg max-w-none text-gray-300">
              <p class="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-300">
                <strong class="text-gray-100">Vyron</strong> is a first-person multiplayer co-op psychological horror game where you and your friends investigate the mysterious disappearance of William after strange reports begin emerging from his abandoned family home.
              </p>

              <p class="leading-relaxed mb-4 sm:mb-6 text-gray-300">
                What starts as a simple investigation quickly turns into a fight for survival as the house reveals a terrifying secret hidden within its walls. The deeper you explore, the more reality begins to unravel. Familiar rooms change without warning, impossible corridors appear, and an unseen paranormal entity follows your every move, making it impossible to tell what is real and what is not.
              </p>

              <p class="leading-relaxed mb-4 sm:mb-6 text-gray-300">
                Working together, players must search for clues, recover forgotten documents, solve environmental puzzles, and uncover the truth behind William's disappearance. Every discovery reveals another piece of the house's dark past, but each answer only draws the entity closer.
              </p>

              <p class="leading-relaxed mb-4 sm:mb-6 text-gray-300">
                The horror in Vyron is built through atmosphere, exploration, and psychological tension rather than constant jump scares. Communication, teamwork, and careful observation are essential to surviving the nightmare and escaping with the truth.
              </p>

              <p class="leading-relaxed text-red-400 italic font-medium">
                Some memories should remain forgotten.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side - Game Information -->
        <div class="lg:col-span-1 order-1 lg:order-2">
          <!-- Game Logo -->
          <div class="mb-4 sm:mb-6">
            <img src="/assets/images/hero-key-art.png" alt="Vyron key art" class="w-full max-w-sm h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-4 mx-auto lg:mx-0 border border-red-900/30" onerror="this.style.opacity='0.1'">
          </div>

          <!-- Game Title -->
          <div class="mb-4 sm:mb-6 text-center lg:text-left">
            <h1 class="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-100 mb-2 tracking-tight uppercase">Vyron</h1>
            <p class="text-red-500 text-sm sm:text-base font-medium">A Psychological Co-op Horror Game</p>
          </div>

          <!-- Game Description -->
          <div class="mb-4 sm:mb-6">
            <p class="text-gray-400 leading-relaxed text-sm sm:text-base text-center lg:text-left">
              Investigate. Survive. Escape with the truth &mdash; if the house lets you.
            </p>
          </div>

          <!-- Game Action Buttons -->
          <div class="mb-4 sm:mb-6 space-y-3">
            <button type="button" onclick="window.downloadGame && window.downloadGame()" class="block text-center w-full bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-red-900/40 transition-all duration-200 text-sm sm:text-base">
              Download
            </button>
          </div>

          <!-- Release Information -->
          <div class="mb-4 sm:mb-6 space-y-3">
            <div class="flex justify-between items-start">
              <span class="text-xs sm:text-sm text-gray-500 uppercase">Release Date:</span>
              <span class="text-gray-200 font-medium text-sm sm:text-base text-right">24.06.26</span>
            </div>
            <div class="flex justify-between items-start">
              <span class="text-xs sm:text-sm text-gray-500 uppercase">Platform:</span>
              <span class="text-gray-200 font-medium text-sm sm:text-base text-right">PC</span>
            </div>
            <div class="flex justify-between items-start">
              <span class="text-xs sm:text-sm text-gray-500 uppercase">Developer:</span>
              <span class="text-red-400 font-medium text-sm sm:text-base text-right">Vyron Team</span>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-950/20 rounded-lg border border-red-900/30">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-red-800 to-red-950 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs text-gray-500 uppercase">Contact Mail</p>
                <button onclick="navigator.clipboard.writeText('contact@vyrondev.com'); this.innerHTML='&#10003; Copied!'; setTimeout(() => this.innerHTML='contact@vyrondev.com', 2000)"
                        class="text-red-400 hover:text-red-300 font-medium transition-colors duration-200 text-sm sm:text-base truncate block w-full text-left">
                  contact@vyrondev.com
                </button>
              </div>
            </div>
          </div>

          <!-- Tags Section -->
          <div class="mb-4 sm:mb-6">
            <p class="text-xs sm:text-sm text-gray-500 mb-3">Tags:</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 sm:px-3 py-1 bg-red-900/40 border border-red-800/50 hover:bg-red-800/50 text-red-200 text-xs sm:text-sm rounded cursor-default transition-all duration-200">Psychological Horror</span>
              <span class="px-2 sm:px-3 py-1 bg-blue-900/40 border border-blue-800/50 hover:bg-blue-800/50 text-blue-200 text-xs sm:text-sm rounded cursor-default transition-all duration-200">Co-op</span>
              <span class="px-2 sm:px-3 py-1 bg-purple-900/40 border border-purple-800/50 hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm rounded cursor-default transition-all duration-200">Multiplayer</span>
              <span class="px-2 sm:px-3 py-1 bg-amber-900/40 border border-amber-800/50 hover:bg-amber-800/50 text-amber-200 text-xs sm:text-sm rounded cursor-default transition-all duration-200">Puzzle</span>
              <span class="px-2 sm:px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 hover:bg-indigo-800/50 text-indigo-200 text-xs sm:text-sm rounded cursor-default transition-all duration-200">Atmospheric</span>
              <span class="px-2 sm:px-3 py-1 bg-emerald-900/40 border border-emerald-800/50 hover:bg-emerald-800/50 text-emerald-200 text-xs sm:text-sm rounded cursor-default transition-all duration-200">Survival</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  `
}

export function setupMediaGallery() {
  const thumbnailItems = document.querySelectorAll<HTMLImageElement>('.thumbnail-item')
  const lightbox = document.getElementById('screenshot-lightbox')
  const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement | null

  function openLightbox(src: string) {
    if (!lightbox || !lightboxImage) return
    lightboxImage.src = src
    lightbox.classList.remove('hidden')
    lightbox.classList.add('flex')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('overflow-hidden')
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return
    lightbox.classList.add('hidden')
    lightbox.classList.remove('flex')
    lightbox.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('overflow-hidden')
    lightboxImage.src = ''
  }

  thumbnailItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src')

      thumbnailItems.forEach(thumb => {
        thumb.classList.remove('border-red-600')
        thumb.classList.add('border-transparent')
      })

      item.classList.remove('border-transparent')
      item.classList.add('border-red-600')

      if (src) openLightbox(src)
    })
  })

  // Close on X button or clicking outside the image
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox || (e.target as HTMLElement).closest('[data-lightbox-close]')) {
      closeLightbox()
    }
  })

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
      closeLightbox()
    }
  })
}
