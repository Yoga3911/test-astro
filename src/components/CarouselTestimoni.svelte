<script lang="ts">
  import { ALUMNI_TESTIMONIALS } from "@/utils/config";
  import { onMount } from "svelte";

  let currentIndex = $state(0);

  function next() {
    currentIndex = (currentIndex + 1) % ALUMNI_TESTIMONIALS.length;
  }

  function prev() {
    currentIndex =
      (currentIndex - 1 + ALUMNI_TESTIMONIALS.length) %
      ALUMNI_TESTIMONIALS.length;
  }

  function goTo(index: number) {
    currentIndex = index;
  }

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % ALUMNI_TESTIMONIALS.length;
    }, 8000); // Berganti otomatis setiap 8 detik

    return () => {
      clearInterval(interval);
    };
  });
</script>

<section
  id="testimoni-alumni"
  class="py-16 sm:py-24 bg-white relative overflow-hidden"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center max-w-4xl mx-auto mb-14">
      <h1
        class="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight"
      >
        Mengapa Memilih SDK Maria Fatima?
      </h1>
      <h2
        class="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-blue-700 tracking-tight mt-3"
      >
        Kisah Inspiratif Alumni Maria Fatima
      </h2>
      <h3
        class="text-slate-600 mt-3 text-base sm:text-lg font-normal max-w-3xl mx-auto"
      >
        Jejak langkah para lulusan yang kini berkarya, mengabdi di berbagai
        profesi terhormat, dan terus menebarkan nilai kasih di tengah
        masyarakat.
      </h3>
    </div>

    <!-- Active Testimonial Carousel Wrapper -->
    <div class="relative max-w-5xl lg:max-w-6xl mx-auto">
      <!-- Prev Button (<) -->
      <button
        type="button"
        aria-label="Alumni Sebelumnya"
        class="absolute left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-blue-50 active:scale-90 border border-slate-200/90 shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-700 text-lg transition-all duration-200 cursor-pointer hover:border-blue-300 z-20"
        onclick={prev}
      >
        <svg
          class="w-5 h-5 -translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Next Button (>) -->
      <button
        type="button"
        aria-label="Alumni Berikutnya"
        class="absolute right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-blue-50 active:scale-90 border border-slate-200/90 shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-700 text-lg transition-all duration-200 cursor-pointer hover:border-blue-300 z-20"
        onclick={next}
      >
        <svg
          class="w-5 h-5 translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Active Testimonial Carousel Card -->
      <div
        class="bg-gradient-to-br from-white via-blue-50/30 to-slate-50 rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200/90 shadow-xl shadow-blue-900/5 relative"
      >
        <!-- Big Quote Mark Background -->
        <div
          class="absolute top-6 right-8 text-blue-200/40 font-serif text-8xl md:text-9xl select-none pointer-events-none leading-none"
        >
          ”
        </div>

        {#each ALUMNI_TESTIMONIALS as item, index}
          {#if currentIndex === index}
            <div
              class="animate-fadeIn relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start"
            >
              <!-- Alumni Avatar & Quick Profile Card -->
              <div
                class="flex flex-col items-center text-center shrink-0 w-full md:w-60"
              >
                <div
                  class="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4 bg-slate-200 ring-2 ring-blue-100 shrink-0"
                >
                  <img
                    src={item.photo}
                    alt={item.name}
                    class="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div
                  class="font-heading font-black text-lg text-slate-900 leading-snug"
                >
                  {item.name}
                </div>
                <span
                  class="inline-block mt-1 px-3 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200"
                >
                  {item.batch}
                </span>
                <p
                  class="text-xs text-slate-600 font-medium mt-2 leading-relaxed"
                >
                  {item.currentRole}
                </p>
              </div>

              <!-- Testimony Text (2 Paragraphs) -->
              <div class="flex-1 space-y-4">
                <h4
                  class="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 leading-snug border-b border-blue-100 pb-3"
                >
                  "{item.headline}"
                </h4>

                <div
                  class="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed font-normal"
                >
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

        <!-- Dots Indicator (Centered at bottom) -->
        <div
          class="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-slate-200/80"
        >
          {#each ALUMNI_TESTIMONIALS as _, dotIndex}
            <button
              type="button"
              aria-label={`Lihat Testimoni Alumni ${dotIndex + 1}`}
              class={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === dotIndex
                  ? "w-8 h-2.5 bg-blue-700 shadow-sm"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              onclick={() => goTo(dotIndex)}
            ></button>
          {/each}
        </div>
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
