<script lang="ts">
  import { VISI_MISI_DATA } from '@/utils/config';
  import { onMount, onDestroy } from 'svelte';

  // 3 Slides for the Carousel (ala SDH row 2)
  let currentSlide = $state(0);
  const totalSlides = 3;
  let autoScrollTimer: any = null;
  let isHovered = $state(false);

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  }

  function setSlide(index: number) {
    currentSlide = index;
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollTimer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 4000); // Otomatis berganti setiap 4 detik
  }

  function stopAutoScroll() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  onMount(() => {
    startAutoScroll();
  });

  onDestroy(() => {
    stopAutoScroll();
  });
</script>

<!-- Carousel VisMis Banner (Bright Theme ala SDH & PDF) -->
<section
  id="vis-mis-carousel"
  class="bg-gradient-to-b from-white via-blue-50/40 to-slate-50 text-slate-800 py-12 sm:py-16 relative overflow-hidden border-b border-slate-200/80 shadow-xs"
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
>
  <!-- Ambient soft glow -->
  <div class="absolute top-0 right-1/4 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
  <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- Carousel Wrapper with Left & Right Arrow Navigation -->
    <div class="relative flex items-center justify-between gap-3 sm:gap-6">
      
      <!-- Prev Button (Left Arrow) -->
      <button
        type="button"
        aria-label="Slide Sebelumnya"
        class="shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-blue-50 active:scale-90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-700 text-lg transition-all duration-200 cursor-pointer hover:border-blue-300"
        onclick={() => {
          prevSlide();
          startAutoScroll();
        }}
      >
        <svg class="w-5 h-5 -translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Active Slide Content Container -->
      <div class="flex-1 min-h-[340px] sm:min-h-[290px] flex items-center justify-center px-1 sm:px-4">
        
        <!-- SLIDE 1: OUR VISION & OUR MISSION (Side-by-Side ala SDH) -->
        {#if currentSlide === 0}
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch animate-slideIn">
            
            <!-- Left Card: Our Vision -->
            <div class="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md shadow-slate-900/5 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="text-xs font-extrabold uppercase tracking-widest text-amber-700">OUR VISION</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-heading font-black text-slate-900 leading-snug">
                  Visi SDK Maria Fatima
                </h3>
                <p class="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  "{VISI_MISI_DATA.visi}"
                </p>
              </div>
              <div class="pt-4 mt-4 border-t border-slate-100 text-xs text-blue-700 font-bold flex items-center gap-1.5">
                <span>🌱</span>
                <span>Komunitas Pembelajar Cerdas &amp; Berkarakter Luhur</span>
              </div>
            </div>

            <!-- Right Card: Our Mission -->
            <div class="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md shadow-slate-900/5 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span class="text-xs font-extrabold uppercase tracking-widest text-blue-700">OUR MISSION</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-heading font-black text-slate-900 leading-snug">
                  Misi Utama Sekolah
                </h3>
                <ul class="space-y-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  <li class="flex items-start gap-2">
                    <span class="text-amber-500 font-bold mt-0.5">✦</span>
                    <span>Pendidikan holistik mengintegrasikan keunggulan akademik &amp; karakter Kristiani.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-amber-500 font-bold mt-0.5">✦</span>
                    <span>Menumbuhkembangkan potensi unik anak lewat KBM aktif, kreatif &amp; inovatif.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-amber-500 font-bold mt-0.5">✦</span>
                    <span>Mewujudkan iklim sekolah yang aman, inklusif, dan berakar pada nilai SIKARU.</span>
                  </li>
                </ul>
              </div>
              <div class="pt-4 mt-4 border-t border-slate-100 text-xs text-blue-700 font-bold flex items-center gap-1.5">
                <span>⛪</span>
                <span>Yayasan Santa Perawan Maria Probolinggo</span>
              </div>
            </div>

          </div>
        {/if}

        <!-- SLIDE 2: CORE VALUES SIKARU -->
        {#if currentSlide === 1}
          <div class="w-full animate-slideIn space-y-4 sm:space-y-5">
            <div class="text-center max-w-2xl mx-auto mb-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-widest border border-blue-200">
                <span>OUR CORE VALUES</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-heading font-black text-slate-900 mt-1">
                6 Nilai Utama: SIKARU
              </h3>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {#each VISI_MISI_DATA.coreValues as val}
                <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all text-center flex flex-col justify-between">
                  <div>
                    <div class="text-amber-500 text-lg mb-1">💎</div>
                    <h4 class="font-heading font-extrabold text-sm text-slate-900 mb-1.5">
                      {val.title.split(' ')[0]}
                    </h4>
                    <p class="text-[11px] text-slate-600 font-normal leading-relaxed line-clamp-3">
                      {val.desc}
                    </p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- SLIDE 3: TAGLINE & SPIRITUALITAS -->
        {#if currentSlide === 2}
          <div class="w-full max-w-4xl mx-auto animate-slideIn text-center space-y-5 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-widest border border-amber-200">
              <span>OUR MOTTO &amp; IDENTITY</span>
            </div>
            
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-slate-900 leading-tight">
              "{VISI_MISI_DATA.tagline}"
            </h3>

            <p class="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              "Ah, betapa baiknya Allah yang Mahabaik!" — Bersama teladan kasih Bunda Maria dan Santa Julie Billiart, kami mendedikasikan karya pendidikan untuk menyentuh hati dan mencerdaskan budi tunas bangsa.
            </p>

            <div class="pt-2">
              <a
                href="/heritage"
                class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-heading font-bold text-xs sm:text-sm shadow-md shadow-blue-700/20 transition-colors"
              >
                <span>Pelajari Heritage &amp; Spiritualitas SPM →</span>
              </a>
            </div>
          </div>
        {/if}

      </div>

      <!-- Next Button (Right Arrow) -->
      <button
        type="button"
        aria-label="Slide Berikutnya"
        class="shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-blue-50 active:scale-90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-700 text-lg transition-all duration-200 cursor-pointer hover:border-blue-300"
        onclick={() => {
          nextSlide();
          startAutoScroll();
        }}
      >
        <svg class="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>

    <!-- Carousel Dots / Indicator -->
    <div class="flex items-center justify-center gap-2.5 mt-8">
      {#each [0, 1, 2] as idx}
        <button
          type="button"
          aria-label={`Pindah ke Slide ${idx + 1}`}
          class={`transition-all duration-300 rounded-full cursor-pointer ${
            currentSlide === idx
              ? 'w-8 h-2.5 bg-blue-700 shadow-sm'
              : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
          }`}
          onclick={() => {
            setSlide(idx);
            startAutoScroll();
          }}
        ></button>
      {/each}
    </div>

  </div>

</section>

<style>
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(6px) scale(0.99);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .animate-slideIn {
    animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
