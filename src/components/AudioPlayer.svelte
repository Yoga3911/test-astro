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

<div class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-blue-900/50 relative overflow-hidden">
  
  <!-- Ambient background glow -->
  <div class="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

  <!-- Track selector buttons -->
  <div class="flex items-center gap-3 flex-wrap mb-8 relative z-10">
    {#each SONG_TRACKS as track}
      <button
        type="button"
        class={`px-4 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
          currentTrack.id === track.id
            ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-105'
            : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
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
        <span class="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold uppercase tracking-wider border border-blue-500/30">
          {currentTrack.category.toUpperCase()} RESMI
        </span>
        <h3 class="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
          {currentTrack.title}
        </h3>
        <p class="text-xs text-amber-300 font-semibold">
          Ciptaan: {currentTrack.composer}
        </p>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 font-normal">
          {currentTrack.description}
        </p>
      </div>

      <!-- Player Box -->
      <div class="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-4">
        <!-- Progress Bar -->
        <div class="space-y-1.5">
          <div class="w-full bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer">
            <div class="bg-gradient-to-r from-blue-400 to-amber-400 h-full transition-all duration-300" style={`width: ${progress}%`}></div>
          </div>
          <div class="flex justify-between text-[11px] font-mono text-slate-400">
            <span>{Math.floor(progress * 0.02)}:{(progress % 50).toString().padStart(2, '0')}</span>
            <span>{currentTrack.duration || '2:45'}</span>
          </div>
        </div>

        <!-- Control Buttons -->
        <div class="flex items-center justify-center gap-4">
          <button
            type="button"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            onclick={() => (progress = 0)}
            title="Ulangi dari awal"
          >
            ⏮
          </button>
          <button
            type="button"
            class="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all text-xl cursor-pointer"
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
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            onclick={() => (progress = Math.min(100, progress + 20))}
            title="Maju 10 detik"
          >
            ⏭
          </button>
        </div>
      </div>
    </div>

    <!-- Lyrics Right (Scrollable sheet) -->
    <div class="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 max-h-[380px] overflow-y-auto">
      <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400 font-heading">
          LIRIK LAGU RESMI
        </h4>
        <span class="text-xs text-amber-400 font-semibold">SDK Maria Fatima Jember</span>
      </div>

      <div class="space-y-2 text-sm sm:text-base leading-relaxed font-serif text-slate-200">
        {#each currentTrack.lyrics as line}
          {#if line === ''}
            <div class="h-3"></div>
          {:else if line.startsWith('Reff:')}
            <p class="font-bold text-amber-300 font-sans text-xs uppercase tracking-wider mt-3 mb-1">
              {line}
            </p>
          {:else}
            <p class="hover:text-amber-200 transition-colors">
              {line}
            </p>
          {/if}
        {/each}
      </div>
    </div>

  </div>

</div>
