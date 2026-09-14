<script lang="ts">
  import { SITE_CONFIG } from '@/utils/config';

  let isOpen = $state(false);

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<!-- Floating WhatsApp Action Button -->
<div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-body">

  <!-- Interactive Mini Popup / Chat Prompt -->
  {#if isOpen}
    <div class="animate-popup bg-white rounded-3xl p-5 shadow-2xl border border-slate-200/90 w-80 max-w-[calc(100vw-3rem)] text-slate-800 relative ring-1 ring-slate-900/5">
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white text-base font-bold shadow-xs">
            💬
          </div>
          <div>
            <h4 class="font-heading font-extrabold text-sm text-slate-900 leading-tight">Admin SDK Maria Fatima</h4>
            <span class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Online • Siap Membantu
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label="Tutup Chat Popup"
          class="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
          onclick={toggle}
        >
          ✕
        </button>
      </div>

      <!-- Body message -->
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
        Halo! Terima kasih telah mengunjungi website resmi SDK Maria Fatima Jember. Butuh informasi mengenai <strong>SPMB</strong>, <strong>kegiatan belajar</strong>, atau <strong>jadwal kunjungan</strong>?
      </p>

      <!-- Action link to WA -->
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Halo%20Admin%20SDK%20Maria%20Fatima%20Jember,%20saya%20ingin%20konsultasi%20informasi%20sekolah%20dan%20SPMB`}
        target="_blank"
        rel="noopener noreferrer"
        class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all text-center"
      >
        <span>Mulai Chat via WhatsApp</span>
        <span>→</span>
      </a>
    </div>
  {/if}

  <!-- Trigger FAB Button -->
  <button
    type="button"
    aria-label="Hubungi WhatsApp SDK Maria Fatima"
    aria-expanded={isOpen}
    class="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    onclick={toggle}
  >
    <!-- Badge notification dot -->
    <span class="absolute -top-1 -right-1 flex h-4 w-4">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-extrabold text-white items-center justify-center">1</span>
    </span>

    <!-- WA Icon SVG -->
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  </button>

</div>

<style>
  @keyframes popup {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  .animate-popup {
    animation: popup 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
