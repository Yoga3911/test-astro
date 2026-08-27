<script lang="ts">
  import { VISI_MISI_DATA } from '@/utils/config';

  // 3 Slides for the Carousel (ala SDH row 2)
  let currentSlide = $state(0);
  const totalSlides = 3;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  }

  function setSlide(index: number) {
    currentSlide = index;
  }
</script>

<!-- Carousel VisMis Banner (Sleek Royal Navy/Blue Carousel Bar ala SDH & PDF) -->
<section id="vis-mis-carousel" class="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-12 sm:py-16 relative overflow-hidden border-y border-blue-800/60 shadow-2xl">
  
  <!-- Subtle ambient glow background -->
  <div class="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <!-- Carousel Wrapper with Left & Right Arrow Navigation -->
    <div class="relative flex items-center justify-between gap-4">
      
      <!-- Prev Button (Left Arrow) -->
      <button
        type="button"
        aria-label="Slide Sebelumnya"
        class="shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white text-lg transition-all duration-200 cursor-pointer shadow-lg hover:border-amber-400/50"
        onclick={prevSlide}
      >
        <svg class="w-5 h-5 -translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Active Slide Content Container -->
      <div class="flex-1 min-h-[320px] sm:min-h-[280px] flex items-center justify-center px-2 sm:px-6">
        
        <!-- SLIDE 1: OUR VISION & OUR MISSION (Side-by-Side ala SDH) -->
        {#if currentSlide === 0}
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch animate-slideIn">
            
            <!-- Left Card: Our Vision -->
            <div class="bg-white/10 backdrop-blur-md rounded-3xl p-7 sm:p-9 border border-white/15 shadow-inner flex flex-col justify-between hover:bg-white/12 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span class="text-xs font-extrabold uppercase tracking-widest text-amber-300">OUR VISION</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-heading font-black text-white leading-snug">
                  Visi SDK Maria Fatima
                </h3>
                <p class="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                  "{VISI_MISI_DATA.visi}"
                </p>
              </div>
              <div class="pt-4 mt-4 border-t border-white/10 text-xs text-blue-200/80 font-semibold">
                Komunitas Pembelajar Cerdas &amp; Berkarakter Luhur
              </div>
            </div>

            <!-- Right Card: Our Mission -->
            <div class="bg-white/10 backdrop-blur-md rounded-3xl p-7 sm:p-9 border border-white/15 shadow-inner flex flex-col justify-between hover:bg-white/12 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                  <span class="text-xs font-extrabold uppercase tracking-widest text-sky-300">OUR MISSION</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-heading font-black text-white leading-snug">
                  Misi Utama Sekolah
                </h3>
                <ul class="space-y-2 text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                  <li class="flex items-start gap-2">
                    <span class="text-amber-400 font-bold mt-0.5">✦</span>
                    <span>Pendidikan holistik mengintegrasikan keunggulan akademik &amp; karakter Kristiani.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-amber-400 font-bold mt-0.5">✦</span>
                    <span>Menumbuhkembangkan potensi unik anak lewat KBM aktif, kreatif &amp; inovatif.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-amber-400 font-bold mt-0.5">✦</span>
                    <span>Mewujudkan iklim sekolah yang aman, inklusif, dan berakar pada nilai SIKARU.</span>
                  </li>
                </ul>
              </div>
              <div class="pt-4 mt-4 border-t border-white/10 text-xs text-blue-200/80 font-semibold">
                Yayasan Santa Perawan Maria Probolinggo
              </div>
            </div>

          </div>
        {/if}

        <!-- SLIDE 2: CORE VALUES SIKARU -->
        {#if currentSlide === 1}
          <div class="w-full animate-slideIn space-y-5">
            <div class="text-center max-w-2xl mx-auto mb-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold uppercase tracking-widest border border-white/15">
                <span>OUR CORE VALUES</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-heading font-black text-white mt-1">
                6 Nilai Utama: SIKARU
              </h3>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {#each VISI_MISI_DATA.coreValues as val}
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 hover:bg-white/20 transition-all text-center flex flex-col justify-between">
                  <div>
                    <div class="text-amber-400 text-lg mb-1">✦</div>
                    <h4 class="font-heading font-extrabold text-sm text-white mb-1.5">
                      {val.title.split(' ')[0]}
                    </h4>
                    <p class="text-[11px] text-blue-100 font-normal leading-relaxed line-clamp-3">
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
          <div class="w-full max-w-4xl mx-auto animate-slideIn text-center space-y-6 bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 shadow-inner">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold uppercase tracking-widest border border-white/15">
              <span>OUR MOTTO &amp; IDENTITY</span>
            </div>
            
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight">
              "{VISI_MISI_DATA.tagline}"
            </h3>

            <p class="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              "Ah, betapa baiknya Allah yang Mahabaik!" — Bersama teladan kasih Bunda Maria dan Santa Julie Billiart, kami mendedikasikan karya pendidikan untuk menyentuh hati dan mencerdaskan budi tunas bangsa.
            </p>

            <div class="pt-2">
              <a
                href="/heritage"
                class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs sm:text-sm shadow-md transition-colors"
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
        class="shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white text-lg transition-all duration-200 cursor-pointer shadow-lg hover:border-amber-400/50"
        onclick={nextSlide}
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
              ? 'w-8 h-2.5 bg-amber-400 shadow-md shadow-amber-400/50'
              : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
          }`}
          onclick={() => setSlide(idx)}
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
