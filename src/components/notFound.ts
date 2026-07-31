export function NotFound(): string {
  return `
    <section class="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto w-full pt-32 sm:pt-40 pb-20 sm:pb-28 text-center">
      <p class="text-red-600 font-bold tracking-widest text-sm sm:text-base uppercase mb-4">Error 404</p>
      <h1 class="text-6xl sm:text-8xl font-bold text-gray-100 tracking-tight mb-6" style="text-shadow: 0 0 24px rgba(220,38,38,0.35);">
        LOST
      </h1>
      <p class="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10">
        This room doesn't exist in the house. Whatever you were looking for isn't here — and the deeper you wander off the map, the harder it is to find your way back.
      </p>
      <a href="/" class="inline-flex items-center gap-2 bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-red-900/40 transition-all duration-200 text-sm sm:text-base">
        Return Home
      </a>
    </section>
  `
}
