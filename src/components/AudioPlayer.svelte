<script lang="ts">
  import { SONG_TRACKS } from '@/utils/config';
  import type { SongTrack } from '@/types/index';

  let currentTrack = $state<SongTrack>(SONG_TRACKS[0]);
  let isPlaying = $state(false);
  let progress = $state(0);
  let timer: any = null;

  function selectTrack(track: SongTrack) {
    currentTrack = track;
    isPlaying = false;
    progress = 0;
    if (timer) clearInterval(timer);
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (progress >= 100) {
          progress = 0;
          isPlaying = false;
          clearInterval(timer);
        } else {
          progress += 2;
        }
      }, 1000);
    } else {
      if (timer) clearInterval(timer);
    }
  }
</script>

<div class="bg-gradient-to-br from-blue-50/70 via-white to-slate-50 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-xl border border-blue-200/80 relative overflow-hidden">
  
  <!-- Ambient background glow -->
  <div class="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
  <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

  <!-- Track selector buttons -->
  <div class="flex items-center gap-3 flex-wrap mb-8 relative z-10">
    {#each SONG_TRACKS as track}
      <button
        type="button"
        class={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs ${
          currentTrack.id === track.id
            ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25 scale-105'
            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
        }`}
        onclick={() => selectTrack(track)}
      >
        <span>{track.category === 'mars' ? '🎺' : '🎵'}</span>
        <span class="ml-1.5">{track.title}</span>
      </button>
    {/each}
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
    
    <!-- Player Left (Controls & Info) -->
    <div class="lg:col-span-5 space-y-6">
      <div class="space-y-2">
        <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider border border-blue-200">
          {currentTrack.category.toUpperCase()} RESMI
        </span>
        <h3 class="text-2xl sm:text-3xl font-heading font-black text-slate-900 leading-tight">
          {currentTrack.title}
        </h3>
        <p class="text-xs text-amber-700 font-semibold">
          Ciptaan: {currentTrack.composer}
        </p>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 font-normal">
          {currentTrack.description}
        </p>
      </div>

      <!-- Player Box -->
      <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4">
        <!-- Progress Bar -->
        <div class="space-y-1.5">
          <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden cursor-pointer">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 h-full transition-all duration-300 rounded-full" style={`width: ${progress}%`}></div>
          </div>
          <div class="flex justify-between text-[11px] font-mono text-slate-500 font-semibold">
            <span>{Math.floor(progress * 0.02)}:{(progress % 50).toString().padStart(2, '0')}</span>
            <span>{currentTrack.duration || '2:45'}</span>
          </div>
        </div>

        <!-- Control Buttons -->
        <div class="flex items-center justify-center gap-4">
          <button
            type="button"
            class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
            onclick={() => (progress = 0)}
            title="Ulangi dari awal"
          >
            ⏮
          </button>
          <button
            type="button"
            class="w-14 h-14 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-black flex items-center justify-center shadow-lg shadow-blue-700/25 hover:scale-105 active:scale-95 transition-all text-xl cursor-pointer"
            onclick={togglePlay}
            aria-label={isPlaying ? 'Pause Audio' : 'Play Audio'}
          >
            {#if isPlaying}
              ⏸
            {:else}
              ▶
            {/if}
          </button>
          <button
            type="button"
            class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
            onclick={() => (progress = Math.min(100, progress + 20))}
            title="Maju 10 detik"
          >
            ⏭
          </button>
        </div>
      </div>
    </div>

    <!-- Lyrics Right (Scrollable sheet) -->
    <div class="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm max-h-[380px] overflow-y-auto">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400 font-heading">
          LIRIK LAGU RESMI
        </h4>
        <span class="text-xs text-amber-700 font-bold">SDK Maria Fatima Jember</span>
      </div>

      <div class="space-y-2 text-sm sm:text-base leading-relaxed font-serif text-slate-700">
        {#each currentTrack.lyrics as line}
          {#if line === ''}
            <div class="h-3"></div>
          {:else if line.startsWith('Reff:')}
            <p class="font-bold text-blue-700 font-sans text-xs uppercase tracking-wider mt-3 mb-1">
              {line}
            </p>
          {:else}
            <p class="hover:text-blue-700 transition-colors">
              {line}
            </p>
          {/if}
        {/each}
      </div>
    </div>

  </div>

</div>
