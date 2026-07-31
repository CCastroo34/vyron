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
    quote: 'Vyron creates the kind of horror where you are scared before anything even happens. The atmosphere, sound design, and darkness make every room feel dangerous.',
    author: 'brunitobonito',
    role: 'Verified Player',
    rating: 5,
  },
  {
    quote: 'Playing this with friends is where the game shines. You can hear your teammates panic when something goes wrong, and that makes the experience even better.',
    author: 'belikin',
    role: 'Verified Player',
    rating: 5,
  },
  {
    quote: 'The best part about Vyron is how unpredictable it feels. Areas you already explored can suddenly feel completely different the next time you return.',
    author: 'rubenkikijames',
    role: 'Verified Player',
    rating: 4,
  },
  {
    quote: 'It is not just about jump scares. The game builds tension slowly and makes you question every sound you hear while exploring.',
    author: 'RamsesWASD',
    role: 'Verified Player',
    rating: 5,
  },
  {
    quote: 'The co-op experience is amazing. There were moments where we were laughing one second and completely silent the next because we knew something was nearby.',
    author: 'XimenaFOngg',
    role: 'Verified Player',
    rating: 5,
  },
  {
    quote: 'Vyron has a great balance between exploration, puzzles, and horror. It feels like every decision matters when you are trying to survive with your team.',
    author: 'TheRealMCJohnn',
    role: 'Verified Player',
    rating: 3,
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
