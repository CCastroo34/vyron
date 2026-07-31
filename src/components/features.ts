export interface FeatureItem {
  title: string
  description: string
  icon: string
}

export const FEATURE_LIST: FeatureItem[] = [
  {
    title: 'Online Co-op Investigation',
    description: 'Team up with friends in first-person multiplayer co-op to explore William\'s abandoned family home and piece together what happened to him.',
    icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4',
  },
  {
    title: 'A House That Changes',
    description: 'Familiar rooms shift without warning and impossible corridors appear. The deeper you explore, the less reality can be trusted.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Environmental Puzzles',
    description: 'Search for clues, recover forgotten documents, and solve puzzles woven into the environment to uncover the truth behind William\'s disappearance.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'An Entity That Follows',
    description: 'An unseen paranormal presence tracks your every move. Every answer you find only draws it closer.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    title: 'Atmosphere Over Jump Scares',
    description: 'Vyron builds dread through atmosphere, exploration, and psychological tension rather than relying on constant jump scares.',
    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  },
  {
    title: 'Communication Is Survival',
    description: 'Teamwork and careful observation are essential. Talk to your friends, share what you find, and watch each other\'s backs.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
]

export const Features = () => {
  const cards = FEATURE_LIST.map((f) => `
            <div class="group bg-gradient-to-b from-red-950/20 to-black border border-red-900/30 rounded-xl p-6 hover:border-red-700/60 hover:shadow-lg hover:shadow-red-950/40 transition-all duration-300">
              <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-red-900/30 border border-red-800/40 group-hover:bg-red-800/40 transition-colors duration-300">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${f.icon}"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-100 mb-2">${f.title}</h3>
              <p class="text-sm text-gray-400 leading-relaxed">${f.description}</p>
            </div>`).join('')

  return `
    <section id="features-content" class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div class="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-tight uppercase">Features</h1>
        <div class="w-16 h-1 bg-gradient-to-r from-red-700 to-red-900 mx-auto mb-4"></div>
        <p class="text-gray-400 text-sm sm:text-base">What makes Vyron a different kind of co-op horror experience.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        ${cards}
      </div>
    </section>
  `
}
