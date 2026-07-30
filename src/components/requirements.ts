interface SpecRow {
  label: string
  value: string
}

const MIN_SPECS: SpecRow[] = [
  { label: 'OS', value: 'Windows 10 64-bit' },
  { label: 'Processor', value: 'Intel Core i3-2120 / AMD Phenom II X4 965' },
  { label: 'Memory', value: '4 GB RAM' },
  { label: 'Graphics', value: 'NVIDIA GeForce GTX 660 / AMD Radeon HD 7870 (2 GB VRAM)' },
  { label: 'DirectX', value: 'Version 11' },
  { label: 'Network', value: 'Broadband Internet connection' },
  { label: 'Storage', value: '13 GB available space' },
];

const REC_SPECS: SpecRow[] = [
  { label: 'OS', value: 'Windows 11 64-bit' },
  { label: 'Processor', value: 'Intel Core i7-13700K / AMD Ryzen 7 7800X3D' },
  { label: 'Memory', value: '12 GB RAM' },
  { label: 'Graphics', value: 'NVIDIA GeForce RTX 4070 SUPER / AMD Radeon RX 7900 XT (12 GB+ VRAM)' },
  { label: 'DirectX', value: 'Version 12' },
  { label: 'Network', value: 'Broadband Internet connection' },
  { label: 'Storage', value: '34 GB available space (NVMe SSD recommended)' },
];

const renderTable = (rows: SpecRow[]) => rows.map((r) => `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3 border-b border-red-900/20 last:border-b-0">
              <span class="text-xs sm:text-sm uppercase tracking-wide text-gray-500">${r.label}</span>
              <span class="text-sm sm:text-base text-gray-200 font-medium sm:text-right">${r.value}</span>
            </div>`).join('')

export const Requirements = () => {
  return `
    <section id="requirements-content" class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div class="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-tight uppercase">System Requirements</h1>
        <div class="w-16 h-1 bg-gradient-to-r from-red-700 to-red-900 mx-auto mb-4"></div>
        <p class="text-gray-400 text-sm sm:text-base">Specifications below are preliminary and subject to change before release.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-b from-red-950/20 to-black border border-red-900/30 rounded-xl p-6">
          <h2 class="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-600"></span>
            Minimum
          </h2>
          ${renderTable(MIN_SPECS)}
        </div>

        <div class="bg-gradient-to-b from-red-950/20 to-black border border-red-900/30 rounded-xl p-6">
          <h2 class="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            Recommended
          </h2>
          ${renderTable(REC_SPECS)}
        </div>
      </div>

      <p class="mt-8 text-xs sm:text-sm text-gray-500 text-center">
        <a class="text-red-400 hover:underline" href="https://vyrondev.com/">vyrondev.com</a>.
      </p>
    </section>
  `
}
