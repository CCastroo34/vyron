export function BackgroundHero(): string {
  return `
    <section class="fixed bg-gradient-to-br from-black via-red-950/10 to-black h-screen w-full flex items-center justify-center -z-10">
        <img src="/assets/images/hero-bg.jpg" alt="Vyron background" class="absolute inset-0 w-full h-full object-cover object-center opacity-50" loading="eager" onerror="this.style.display='none'">
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
    </section>
  `
}
