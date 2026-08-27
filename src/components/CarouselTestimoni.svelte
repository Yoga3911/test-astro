<script lang="ts">
  import { ALUMNI_TESTIMONIALS } from '@/utils/config';
  import { onMount, onDestroy } from 'svelte';

  let currentIndex = $state(0);
  let autoScrollTimer: any = null;
  let isHovered = $state(false);

  function next() {
    currentIndex = (currentIndex + 1) % ALUMNI_TESTIMONIALS.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + ALUMNI_TESTIMONIALS.length) % ALUMNI_TESTIMONIALS.length;
  }

  function goTo(index: number) {
    currentIndex = index;
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollTimer = setInterval(() => {
      if (!isHovered) {
        next();
      }
    }, 4000); // Otomatis scroll setiap 4 detik
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

<section
  id="testimoni-alumni"
  class="py-16 sm:py-24 bg-white relative overflow-hidden"
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header (Ala SDH: FEATURING OUTSTANDING ALUMNI) -->
    <div class="text-center max-w-3xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-widest mb-3 border border-amber-200 shadow-xs">
        <span>FEATURING OUTSTANDING ALUMNI</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
        Kisah Inspiratif Alumni Maria Fatima
      </h2>
      <p class="text-slate-600 mt-3 text-base sm:text-lg">
        Jejak langkah para lulusan yang kini berkarya, mengabdi di berbagai profesi terhormat, dan terus menebarkan nilai kasih di tengah masyarakat.
      </p>
    </div>

    <!-- Active Testimonial Carousel Card -->
    <div class="max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-50/30 to-slate-50 rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200/90 shadow-xl shadow-blue-900/5 relative">
      
      <!-- Big Quote Mark Background -->
      <div class="absolute top-6 right-8 text-blue-200/40 font-serif text-8xl md:text-9xl select-none pointer-events-none leading-none">
        ”
      </div>

      {#each ALUMNI_TESTIMONIALS as item, index}
        {#if currentIndex === index}
          <div class="animate-fadeIn relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            <!-- Alumni Avatar & Quick Profile Card -->
            <div class="flex flex-col items-center text-center shrink-0 w-full md:w-56">
              <div class="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-white mb-4 bg-slate-200 ring-1 ring-slate-200">
                <img
                  src={item.photo}
                  alt={item.name}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 class="font-heading font-black text-lg text-slate-900 leading-snug">
                {item.name}
              </h4>
              <span class="inline-block mt-1 px-3 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
                {item.batch}
              </span>
              <p class="text-xs text-slate-600 font-medium mt-2 leading-relaxed">
                {item.currentRole}
              </p>
            </div>

            <!-- Testimony Text (2 Paragraphs) -->
            <div class="flex-1 space-y-4">
              <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 leading-snug border-b border-blue-100 pb-3">
                "{item.headline}"
              </h3>
              
              <div class="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {#each item.testimony as paragraph}
                  <p class="text-justify sm:text-left">
                    {paragraph}
                  </p>
                {/each}
              </div>
            </div>

          </div>
        {/if}
      {/each}

      <!-- Carousel Navigation & Dots -->
      <div class="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/80">
        <!-- Prev Button -->
        <button
          type="button"
          aria-label="Alumni Sebelumnya"
          class="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-100 border border-slate-200 text-sm font-bold shadow-xs active:scale-95 transition-all cursor-pointer hover:border-blue-300"
          onclick={() => {
            prev();
            startAutoScroll();
          }}
        >
          <span>←</span>
          <span class="hidden sm:inline">Sebelumnya</span>
        </button>

        <!-- Dots Indicator -->
        <div class="flex items-center gap-2">
          {#each ALUMNI_TESTIMONIALS as _, dotIndex}
            <button
              type="button"
              aria-label={`Lihat Testimoni Alumni ${dotIndex + 1}`}
              class={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === dotIndex
                  ? 'w-8 h-2.5 bg-blue-700 shadow-sm'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              onclick={() => {
                goTo(dotIndex);
                startAutoScroll();
              }}
            ></button>
          {/each}
        </div>

        <!-- Next Button -->
        <button
          type="button"
          aria-label="Alumni Berikutnya"
          class="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-100 border border-slate-200 text-sm font-bold shadow-xs active:scale-95 transition-all cursor-pointer hover:border-blue-300"
          onclick={() => {
            next();
            startAutoScroll();
          }}
        >
          <span class="hidden sm:inline">Berikutnya</span>
          <span>→</span>
        </button>
      </div>

    </div>

  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
