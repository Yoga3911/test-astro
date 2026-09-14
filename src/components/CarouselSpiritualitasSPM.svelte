<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let currentSlide = $state(0);
  const totalSlides = 3;
  let autoScrollTimer: any = null;

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
      nextSlide();
    }, 9000);
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

<div class="my-12 max-w-5xl mx-auto">
  <!-- Carousel Box with Navigation -->
  <div class="relative bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-blue-800/80 shadow-2xl overflow-hidden text-center">
    
    <!-- Ambient glowing backdrop -->
    <div class="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Prev Button (<) -->
    <button
      type="button"
      aria-label="Slide Sebelumnya"
      class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all duration-200 cursor-pointer z-20 backdrop-blur-md"
      onclick={() => {
        prevSlide();
        startAutoScroll();
      }}
    >
      <svg class="w-6 h-6 -translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Next Button (>) -->
    <button
      type="button"
      aria-label="Slide Berikutnya"
      class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all duration-200 cursor-pointer z-20 backdrop-blur-md"
      onclick={() => {
        nextSlide();
        startAutoScroll();
      }}
    >
      <svg class="w-6 h-6 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Slide Content (Centered, No Image as per PDF NOTE) -->
    <div class="px-6 sm:px-14 min-h-[300px] flex flex-col justify-center items-center">
      
      <!-- SLIDE 1 -->
      {#if currentSlide === 0}
        <div class="animate-fadeIn space-y-5 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-extrabold uppercase tracking-widest">
            <span>SLIDE 1 DARI 3 • SPIRITUALITAS SUSTER SPM</span>
          </div>
          
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-white">
            A. Immensitas Bonitas Dei
          </h3>
          <div class="text-amber-300 text-lg sm:text-xl font-serif italic">
            (Kebaikan Allah yang Tanpa Batas)
          </div>

          <blockquote class="bg-white/5 border-y border-amber-400/30 py-4 px-6 rounded-2xl max-w-2xl mx-auto">
            <p class="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed">
              "Betapa baiknya Allah yang Mahabaik itu!"
            </p>
            <footer class="text-xs text-amber-300/80 font-bold tracking-wider mt-1 uppercase">
              (Ah! Qu'il est bon le Bon Dieu! — Warisan St. Julia Billiart)
            </footer>
          </blockquote>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            <strong class="text-white">Makna:</strong> Meyakini bahwa Allah senantiasa hadir dan membimbing dalam segala situasi hidup, baik saat bersukacita maupun di tengah krisis dan tantangan zaman.
          </p>
        </div>
      {/if}

      <!-- SLIDE 2 -->
      {#if currentSlide === 1}
        <div class="animate-fadeIn space-y-5 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-400/20 text-blue-300 border border-blue-400/30 text-xs font-extrabold uppercase tracking-widest">
            <span>SLIDE 2 DARI 3 • SPIRITUALITAS SUSTER SPM</span>
          </div>

          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-white">
            B. Ketaatan dan Keteladanan Bunda Maria
          </h3>
          <div class="text-blue-300 text-lg sm:text-xl font-serif italic">
            (Ecce Ancilla Domini — Aku Ini Hamba Tuhan)
          </div>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Sebagai Kongregasi yang bernaung di bawah nama <strong>Santa Perawan Maria</strong>, para suster meneladani Maria dalam dua sikap batin yang mendalam:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-center pt-2">
            <div class="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col items-center">
              <span class="w-8 h-8 rounded-full bg-blue-500/30 text-blue-300 font-black text-sm flex items-center justify-center mb-2">1</span>
              <div class="text-sm font-bold text-white mb-1">Ketulusan Berkata "Ya"</div>
              <p class="text-xs text-slate-300 leading-relaxed font-normal">
                Ketulusan hati mengatakan <em>"Ya" (Fiat)</em> seutuhnya pada kehendak Allah dalam segala rancangan-Nya.
              </p>
            </div>

            <div class="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col items-center">
              <span class="w-8 h-8 rounded-full bg-blue-500/30 text-blue-300 font-black text-sm flex items-center justify-center mb-2">2</span>
              <div class="text-sm font-bold text-white mb-1">Kerendahan Hati &amp; Keterbukaan</div>
              <p class="text-xs text-slate-300 leading-relaxed font-normal">
                Kerendahan hati, kelembutan, dan semangat keterbukaan untuk melayani sesama tanpa membeda-bedakan.
              </p>
            </div>
          </div>
        </div>
      {/if}

      <!-- SLIDE 3 -->
      {#if currentSlide === 2}
        <div class="animate-fadeIn space-y-5 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/20 text-rose-300 border border-rose-400/30 text-xs font-extrabold uppercase tracking-widest">
            <span>SLIDE 3 DARI 3 • SPIRITUALITAS SUSTER SPM</span>
          </div>

          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-white">
            C. Semangat Kerelawanan &amp; Persaudaraan
          </h3>
          <div class="text-rose-300 text-lg sm:text-xl font-serif italic">
            (Keberpihakan pada yang Lemah &amp; Sukacita Injili)
          </div>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Sesuai amanat pendiri <strong>(Pater Mathias Wolff, SJ)</strong>, karya SPM difokuskan pada pelayanan belas kasih <em>(compassion)</em>:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-center pt-2">
            <div class="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center">
              <div class="text-sm font-bold text-white mb-1">Pendidikan Karakter &amp; Inklusif</div>
              <p class="text-xs text-slate-300 leading-relaxed font-normal">
                Memanusiakan manusia melalui pendidikan bermutu, terutama bagi yang miskin, tersingkir, dan terlupakan, serta responsif terhadap kebutuhan sosial.
              </p>
            </div>

            <div class="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center">
              <div class="text-sm font-bold text-white mb-1">Persaudaraan yang Hangat &amp; Gembira</div>
              <p class="text-xs text-slate-300 leading-relaxed font-normal">
                Pendekatan pengajaran dijiwai suasana kekeluargaan <em>(fraternitas)</em>, kehangatan seorang ibu, serta sukacita injili yang memikat.
              </p>
            </div>
          </div>
        </div>
      {/if}

    </div>

    <!-- Dots Indicator (Centered) -->
    <div class="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-white/10">
      {#each [0, 1, 2] as dotIndex}
        <button
          type="button"
          aria-label={`Lihat Slide Spiritualitas ${dotIndex + 1}`}
          class={`transition-all duration-300 rounded-full cursor-pointer ${
            currentSlide === dotIndex
              ? "w-8 h-2.5 bg-amber-400 shadow-md"
              : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
          }`}
          onclick={() => {
            setSlide(dotIndex);
            startAutoScroll();
          }}
        ></button>
      {/each}
    </div>

  </div>
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
