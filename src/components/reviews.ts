/**
 * PLACEHOLDER CONTENT — these are example quotes, not real reviews.
 * Replace with real playtester/press quotes once available.
 * Do not attribute these to real outlets or real people.
 */
export interface ReviewItem {
  quote: string
  author: string
  role: string
  rating: number // out of 5
}

export const REVIEW_LIST: ReviewItem[] = [
  {
    quote: 'The atmosphere got under my skin more than any jump scare could. Every corridor felt wrong in a different way.',
    author: 'Playtest Participant',
    role: 'Closed Beta',
    rating: 5,
  },
  {
    quote: 'Playing with friends made the tension worse, not better. Nobody wanted to split up, but the puzzles forced us to.',
    author: 'Playtest Participant',
    role: 'Closed Beta',
    rating: 5,
  },
  {
    quote: 'The house genuinely doesn\'t feel the same twice. I got turned around in a hallway I\'d already been through.',
    author: 'Playtest Participant',
    role: 'Closed Beta',
    rating: 4,
  },
]

function renderStars(rating: number): string {
  return Array.from({ length: 5 }, (_, i) => `
    <svg class="w-4 h-4 ${i < rating ? 'text-red-500' : 'text-gray-700'}" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z"/>
    </svg>`).join('')
}

export function Reviews(): string {
  const cards = REVIEW_LIST.map((r) => `
            <div class="bg-gradient-to-b from-red-950/20 to-black border border-red-900/30 rounded-xl p-6 flex flex-col">
              <div class="flex gap-0.5 mb-3">${renderStars(r.rating)}</div>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed italic mb-4 flex-1">"${r.quote}"</p>
              <div>
                <p class="text-sm font-semibold text-gray-100">${r.author}</p>
                <p class="text-xs text-gray-500">${r.role}</p>
              </div>
            </div>`).join('')

  return `
      <!-- Reviews Section -->
      <div id="reviews" class="mt-12 sm:mt-16 scroll-mt-28">
        <div class="mb-6 sm:mb-8 max-w-4xl">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-100 mb-3 sm:mb-4 tracking-tight">What Playtesters Are Saying</h2>
          <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-red-700 to-red-900"></div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          ${cards}
        </div>
      </div>
  `
}
