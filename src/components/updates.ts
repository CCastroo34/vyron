interface UpdateEntry {
  date: string
  tag: string
  title: string
  notes: string[]
}

const UPDATE_LOG: UpdateEntry[] = [
  {
    date: '28.07.26',
    tag: 'Patch 0.3.1',
    title: 'Bug Fixes',
    notes: [
      'Fixed players spawning outside the playable area in rare cases.',
      'Improved overall game stability during long play sessions.',
      'Updated several environmental sounds and visual effects.',
    ],
  },
  {
    date: '20.07.26',
    tag: 'Patch 0.3.0',
    title: 'Co-op Improvements',
    notes: [
      'Fixed rare desync issues during cooperative puzzle interactions.',
      'Improved voice chat reliability and connection recovery.',
      'Players can now reconnect to active multiplayer sessions.',
    ],
  },
  {
    date: '12.07.26',
    tag: 'Patch 0.2.2',
    title: 'Performance Update',
    notes: [
      'Optimized CPU and GPU usage on lower-end systems.',
      'Reduced loading times between multiplayer sessions.',
      'Improved texture streaming to reduce stuttering.',
    ],
  },
  {
    date: '05.07.26',
    tag: 'Patch 0.2.0',
    title: 'Gameplay Update',
    notes: [
      'Added new environmental puzzles and objectives.',
      'Improved enemy AI behavior during chase sequences.',
      'Adjusted player movement and interaction speed.',
    ],
  },
  {
    date: '28.06.26',
    tag: 'Patch 0.1.1',
    title: 'Hotfix',
    notes: [
      'Fixed multiple crashes when joining multiplayer sessions.',
      'Improved connection stability for players with high latency.',
      'Minor UI fixes across the main menu.',
    ],
  },
  {
    date: '24.06.26',
    tag: 'Patch 0.1.0',
    title: 'Initial Playtest Build',
    notes: [
      'First public playtest build released.',
      'Implemented online co-op support and lobby creation.',
      'Added the first playable location and core gameplay systems.',
    ],
  },
]

export const Updates = () => {
  const entries = UPDATE_LOG.map((entry) => `
            <div class="relative pl-8 sm:pl-10 pb-10 border-l border-red-900/30 last:border-l-0 last:pb-0">
              <span class="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-red-600 border-2 border-black"></span>
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <span class="text-xs uppercase tracking-wide px-2 py-1 rounded bg-red-900/40 border border-red-800/50 text-red-300">${entry.tag}</span>
                <span class="text-xs sm:text-sm text-gray-500">${entry.date}</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-100 mb-2">${entry.title}</h3>
              <ul class="space-y-1">
                ${entry.notes.map((n) => `<li class="text-sm sm:text-base text-gray-400 leading-relaxed">&bull; ${n}</li>`).join('')}
              </ul>
            </div>`).join('')

  return `
    <section id="updates-content" class="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div class="mb-8 sm:mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-tight uppercase">Updates</h1>
        <div class="w-16 h-1 bg-gradient-to-r from-red-700 to-red-900 mx-auto mb-4"></div>
        <p class="text-gray-400 text-sm sm:text-base">Changelogs and news from Vyron Team.</p>
      </div>
      <div>
        ${entries}
      </div>
    </section>
  `
}
