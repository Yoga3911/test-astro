<script lang="ts">
  import { VISI_MISI_DATA } from '@/utils/config';

  let activeTab = $state<'visi' | 'misi' | 'core-value' | 'tagline'>('visi');

  const tabs: { id: 'visi' | 'misi' | 'core-value' | 'tagline'; label: string; icon: string }[] = [
    { id: 'visi', label: 'Visi Sekolah', icon: '🎯' },
    { id: 'misi', label: 'Misi Sekolah', icon: '🚀' },
    { id: 'core-value', label: 'Core Values (SIKARU)', icon: '💎' },
    { id: 'tagline', label: 'Tagline & Spiritualitas', icon: '✨' },
  ];
</script>

<section id="vis-mis-section" class="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
  <!-- Subtle decorative accents -->
  <div class="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-3">
        <span>⭐ ARAH &amp; NILAI LUHUR</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
        Visi, Misi &amp; Spiritualitas Sekolah
      </h2>
      <p class="text-slate-600 mt-3 text-base sm:text-lg">
        Landasan kokoh yang menuntun setiap langkah pendidikan, asuhan budi pekerti, dan karakter di SDK Maria Fatima Jember.
      </p>
    </div>

    <!-- Navigation Tabs / Carousel Selector -->
    <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
      {#each tabs as tab}
        <button
          type="button"
          class={`flex items-center gap-2 px-5 py-3 rounded-2xl font-heading font-bold text-sm sm:text-base transition-all duration-300 shadow-xs cursor-pointer ${
            activeTab === tab.id
              ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/25 scale-105'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
          }`}
          onclick={() => (activeTab = tab.id)}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      {/each}
    </div>

    <!-- Interactive Carousel / Card Container -->
    <div class="relative bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-slate-900/5 border border-slate-200/80 transition-all duration-300 min-h-[380px] flex flex-col justify-center">
      
      <!-- TAB 1: VISI -->
      {#if activeTab === 'visi'}
        <div class="animate-fadeIn space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">🎯</span>
            <div>
              <h3 class="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">Visi Sekolah</h3>
              <p class="text-sm font-semibold text-blue-600">Cita-Cita Luhur Komunitas Pembelajar</p>
            </div>
          </div>
          <blockquote class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-800 leading-snug border-l-4 border-amber-500 pl-6 py-2">
            "{VISI_MISI_DATA.visi}"
          </blockquote>
          <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-slate-500">
            <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700">🌱 Cerdas Holistik</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700">💎 Berkarakter Luhur</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700">🌐 Wawasan Global</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700">⛪ Spiritualitas SPM</span>
          </div>
        </div>
      {/if}

      <!-- TAB 2: MISI -->
      {#if activeTab === 'misi'}
        <div class="animate-fadeIn space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl font-bold">🚀</span>
            <div>
              <h3 class="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">Misi Sekolah</h3>
              <p class="text-sm font-semibold text-amber-600">Langkah Konkret Pelayanan Pendidikan</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {#each VISI_MISI_DATA.misi as item, i}
              <div class="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-200 transition-colors">
                <span class="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {i + 1}
                </span>
                <p class="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                  {item}
                </p>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- TAB 3: CORE VALUES -->
      {#if activeTab === 'core-value'}
        <div class="animate-fadeIn space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold">💎</span>
            <div>
              <h3 class="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">Core Values: SIKARU</h3>
              <p class="text-sm font-semibold text-emerald-600">6 Nilai Keutamaan Karakter Komunitas SPM</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {#each VISI_MISI_DATA.coreValues as val}
              <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-150 hover:shadow-md hover:border-blue-300 transition-all duration-200">
                <div class="text-base font-heading font-extrabold text-blue-900 mb-2 flex items-center gap-2">
                  <span class="text-amber-500">✦</span>
                  <span>{val.title}</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- TAB 4: TAGLINE -->
      {#if activeTab === 'tagline'}
        <div class="animate-fadeIn space-y-6 text-center max-w-3xl mx-auto py-4">
          <div class="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl font-bold mx-auto shadow-inner">
            ✨
          </div>
          <h3 class="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Motto &amp; Spiritualitas Pendidik
          </h3>
          <div class="p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl"></div>
            <p class="text-xs uppercase font-extrabold text-amber-300 tracking-widest mb-3">
              KONGREGASI SUSTER SPM &amp; ST. JULIE BILLIART
            </p>
            <p class="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold leading-snug text-white">
              "{VISI_MISI_DATA.tagline}"
            </p>
            <p class="text-xs sm:text-sm text-blue-200 mt-4 font-normal max-w-xl mx-auto">
              "Ah, betapa baiknya Allah yang Mahabaik!" — Bersama Bunda Maria, kami mendampingi setiap anak untuk bertumbuh dalam cinta kasih dan kecemerlangan budi.
            </p>
          </div>
        </div>
      {/if}

    </div>

  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
