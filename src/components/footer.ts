export const Footer = () => {
  return `
    <!-- ========== FOOTER ========== -->
<footer id="footer" class="mt-auto w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-r from-black via-red-950/40 to-black border-t border-red-900/30">
  <div class="max-w-5xl mx-auto text-center">
    <div>
      <a class="flex-none text-lg sm:text-xl font-bold uppercase tracking-widest text-gray-100 hover:text-red-500 transition-colors duration-300" href="https://vyrondev.com/" aria-label="Vyron">VYRON</a>
    </div>

    <nav class="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
      <a class="hover:text-red-400 transition-colors duration-200" href="/">Home</a>
      <a class="hover:text-red-400 transition-colors duration-200" href="/features.html">Features</a>
      <a class="hover:text-red-400 transition-colors duration-200" href="/requirements.html">Requirements</a>
      <a class="hover:text-red-400 transition-colors duration-200" href="/faq.html">FAQ</a>
      <a class="hover:text-red-400 transition-colors duration-200" href="/updates.html">Updates</a>
      <a class="hover:text-red-400 transition-colors duration-200" href="/privacy.html">Privacy</a>
    </nav>

    <div class="mt-4 space-y-1">
      <p class="text-sm sm:text-base text-gray-500">Developed by <a class="text-red-400 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="https://vyrondev.com/">Vyron Team</a>.</p>
      <p class="text-sm sm:text-base text-gray-500">&copy; 2026 Vyron Team. All rights reserved.</p>
    </div>

    <!-- Social Brands -->
    <div class="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
      <!-- Discord -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-red-900/40 focus:outline-hidden focus:bg-red-900/40 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200" href="https://vyrondev.com/discord" aria-label="Discord" target="_blank" rel="noopener">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
        </svg>
      </a>
      <!-- YouTube -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-red-900/40 focus:outline-hidden focus:bg-red-900/40 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200" href="https://vyrondev.com/youtube" aria-label="YouTube" target="_blank" rel="noopener">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>
      </a>
      <!-- Steam -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-red-900/40 focus:outline-hidden focus:bg-red-900/40 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200" href="https://vyrondev.com/steam" aria-label="Steam" target="_blank" rel="noopener">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.40a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/>
          <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"/>
        </svg>
      </a>
      <!-- X / Twitter -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-red-900/40 focus:outline-hidden focus:bg-red-900/40 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200" href="https://vyrondev.com/x" aria-label="X" target="_blank" rel="noopener">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      </a>
      <!-- Mail -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-red-900/40 focus:outline-hidden focus:bg-red-900/40 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200" href="mailto:contact@vyrondev.com" aria-label="Email">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
      </a>
    </div>
    <!-- End Social Brands -->
  </div>
</footer>
<!-- ========== END FOOTER ========== -->
  `
}
