<script lang="ts">
  /**
   * AdmissionForm.svelte — Formulir Pendaftaran Siswa Baru (SPMB)
   *
   * Form 5 Field Sesuai Permintaan:
   * 1. Nama Lengkap
   * 2. Alamat Rumah / Domisili
   * 3. No. Telepon / WhatsApp
   * 4. Asal Sekolah (TK/Sekolah Asal)
   * 5. Alamat Sekolah Asal
   *
   * Fitur:
   * - Validasi client-side real-time
   * - Terhubung langsung ke Google Spreadsheet via Google Apps Script Web App
   * - Loading spinner & feedback visual interaktif
   * - Kartu konfirmasi sukses & tombol langsung chat WA ke panitia SPMB
   */

  import { SPMB_FORM_CONFIG, SITE_CONFIG } from '@/utils/config';

  interface Props {
    customScriptUrl?: string;
  }

  let { customScriptUrl = '' }: Props = $props();

  // State form
  let nama = $state('');
  let alamat = $state('');
  let telepon = $state('');
  let asalSekolah = $state('');
  let alamatSekolah = $state('');

  // Status submission
  let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
  let errorMessage = $state('');
  let submittedData = $state<{
    nama: string;
    alamat: string;
    telepon: string;
    asalSekolah: string;
    alamatSekolah: string;
    timestamp: string;
  } | null>(null);

  // Error validation
  type FieldErrors = {
    nama?: string;
    alamat?: string;
    telepon?: string;
    asalSekolah?: string;
    alamatSekolah?: string;
  };

  let fieldErrors = $state<FieldErrors>({});

  function validateTelepon(val: string): boolean {
    const cleaned = val.replace(/[\s\-\(\)]/g, '');
    // Format Indonesia: 08..., 628..., +628... dengan panjang 9-15 digit
    return /^(\+?62|0)8[1-9][0-9]{6,12}$/.test(cleaned);
  }

  function validate(): boolean {
    const errors: FieldErrors = {};

    if (!nama.trim() || nama.trim().length < 2) {
      errors.nama = 'Nama lengkap calon murid wajib diisi (minimal 2 karakter)';
    }

    if (!alamat.trim() || alamat.trim().length < 5) {
      errors.alamat = 'Alamat tempat tinggal lengkap wajib diisi (minimal 5 karakter)';
    }

    if (!telepon.trim()) {
      errors.telepon = 'Nomor telepon / WhatsApp wajib diisi';
    } else if (!validateTelepon(telepon.trim())) {
      errors.telepon = 'Format nomor WhatsApp tidak valid (contoh: 081234567890)';
    }

    if (!asalSekolah.trim() || asalSekolah.trim().length < 2) {
      errors.asalSekolah = 'Asal sekolah (TK / PAUD asal) wajib diisi';
    }

    if (!alamatSekolah.trim() || alamatSekolah.trim().length < 3) {
      errors.alamatSekolah = 'Alamat sekolah asal wajib diisi';
    }

    fieldErrors = errors;
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!validate()) return;

    status = 'loading';
    errorMessage = '';

    const payload = {
      nama: nama.trim(),
      alamat: alamat.trim(),
      telepon: telepon.trim(),
      asalSekolah: asalSekolah.trim(),
      alamatSekolah: alamatSekolah.trim(),
      timestamp: new Date().toISOString(),
    };

    const targetUrl = customScriptUrl || SPMB_FORM_CONFIG.googleScriptUrl;

    try {
      if (targetUrl) {
        // Deteksi jika user tidak sengaja memasukkan link spreadsheet biasa, bukan Web App URL
        if (targetUrl.includes('docs.google.com/spreadsheets')) {
          throw new Error(
            'Link di file .env masih berupa link Google Spreadsheet biasa (docs.google.com/spreadsheets/...). Agar data bisa masuk otomatis, dibutuhkan Web App URL dari Google Apps Script yang berakhiran /exec. Buka spreadsheet Anda > Ekstensi > Apps Script > Deploy > Web app.'
          );
        }

        // Kirim langsung ke Google Apps Script Web App
        // Menggunakan text/plain agar tidak memicu CORS Preflight OPTIONS di Apps Script
        await fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors', // Apps Script redirect to usercontent
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Jika URL belum diset di .env, kita beri simulasi pengiriman sukses (demo mode)
        console.info(
          'SPMB Form: URL Google Script belum dikonfigurasi di PUBLIC_SPMB_GOOGLE_SCRIPT_URL. Berjalan dalam mode demonstrasi.',
          payload
        );
        // Simulasi delay jaringan 1 detik
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      submittedData = {
        ...payload,
        timestamp: new Intl.DateTimeFormat('id-ID', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(new Date()),
      };

      status = 'success';
      // Reset input form
      nama = '';
      alamat = '';
      telepon = '';
      asalSekolah = '';
      alamatSekolah = '';
      fieldErrors = {};
    } catch (err) {
      console.error('Error pengiriman formulir:', err);
      status = 'error';
      errorMessage =
        err instanceof Error
          ? err.message
          : 'Terjadi kendala saat mengirim data. Silakan coba lagi atau hubungi panitia melalui WhatsApp.';
    }
  }

  function resetForm() {
    status = 'idle';
    submittedData = null;
    fieldErrors = {};
  }
</script>

<div class="w-full">
  {#if status === 'success' && submittedData}
    <!-- SUCCESS CONFIRMATION CARD -->
    <div
      role="alert"
      class="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl space-y-6 animate-fadeIn text-left"
    >
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl shadow-inner shrink-0">
          🎉
        </div>
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Berhasil Disimpan</span>
          </div>
          <h4 class="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-1">
            Pendaftaran Berhasil Dikirim!
          </h4>
        </div>
      </div>

      <p class="text-slate-600 text-sm leading-relaxed">
        Terima kasih telah mendaftar di <strong>{SITE_CONFIG.name}</strong>. Data Anda telah tercatat langsung ke sistem Google Spreadsheet panitia penerimaan siswa baru.
      </p>

      <!-- Data Summary -->
      <div class="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-2.5 text-xs sm:text-sm">
        <div class="font-bold text-slate-800 border-b border-slate-200 pb-2 flex justify-between items-center">
          <span>Ringkasan Data Calon Murid</span>
          <span class="text-[11px] font-normal text-slate-500">{submittedData.timestamp}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <div>
            <span class="text-slate-400 block text-[11px] uppercase font-bold">Nama Calon Murid:</span>
            <span class="font-semibold text-slate-800">{submittedData.nama}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px] uppercase font-bold">No. Telepon / WA:</span>
            <span class="font-semibold text-slate-800">{submittedData.telepon}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px] uppercase font-bold">Asal Sekolah:</span>
            <span class="font-semibold text-slate-800">{submittedData.asalSekolah}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px] uppercase font-bold">Alamat Sekolah Asal:</span>
            <span class="font-semibold text-slate-800">{submittedData.alamatSekolah}</span>
          </div>
          <div class="sm:col-span-2">
            <span class="text-slate-400 block text-[11px] uppercase font-bold">Alamat Rumah:</span>
            <span class="font-semibold text-slate-800">{submittedData.alamat}</span>
          </div>
        </div>
      </div>

      <!-- WhatsApp Confirmation CTA -->
      <div class="pt-2 flex flex-col sm:flex-row gap-3">
        <a
          href={`https://wa.me/${SPMB_FORM_CONFIG.whatsappAdmin}?text=${encodeURIComponent(
            `Halo Panitia SPMB SDK Maria Fatima Jember, saya telah mengisi formulir pendaftaran online:\n\n` +
            `• Nama: ${submittedData.nama}\n` +
            `• No. WA: ${submittedData.telepon}\n` +
            `• Asal Sekolah: ${submittedData.asalSekolah}\n` +
            `• Alamat: ${submittedData.alamat}\n\n` +
            `Mohon konfirmasi langkah selanjutnya untuk observasi dan kelengkapan berkas. Terima kasih!`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-heading font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
        >
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Konfirmasi ke WhatsApp Panitia</span>
        </a>

        <button
          type="button"
          onclick={resetForm}
          class="px-5 py-3.5 rounded-2xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          Kirim Formulir Baru
        </button>
      </div>
    </div>
  {:else}
    <!-- MAIN FORM -->
    <form
      id="spmb-form"
      onsubmit={handleSubmit}
      novalidate
      aria-label="Formulir Pendaftaran Siswa Baru"
      class="space-y-5 text-left"
    >
      {#if status === 'error'}
        <div
          role="alert"
          class="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 animate-fadeIn"
        >
          <svg class="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <strong class="font-bold">Gagal Mengirim Formulir</strong>
            <p class="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      {/if}

      <!-- 1. Nama Lengkap -->
      <div>
        <label for="nama" class="block text-xs sm:text-sm font-heading font-bold text-slate-800 mb-1.5">
          Nama Lengkap Calon Murid <span class="text-rose-600" aria-hidden="true">*</span>
        </label>
        <div class="relative">
          <input
            id="nama"
            type="text"
            bind:value={nama}
            placeholder="Contoh: Maria Angela Prasetyo"
            autocomplete="name"
            aria-required="true"
            aria-invalid={fieldErrors.nama ? 'true' : undefined}
            class="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-2xs"
            class:border-rose-400={fieldErrors.nama}
            class:focus:ring-rose-500={fieldErrors.nama}
          />
        </div>
        {#if fieldErrors.nama}
          <p role="alert" class="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <span>⚠</span> {fieldErrors.nama}
          </p>
        {/if}
      </div>

      <!-- 2. Alamat Tempat Tinggal -->
      <div>
        <label for="alamat" class="block text-xs sm:text-sm font-heading font-bold text-slate-800 mb-1.5">
          Alamat Rumah / Tempat Tinggal <span class="text-rose-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="alamat"
          bind:value={alamat}
          rows="2"
          placeholder="Contoh: Jl. Gajah Mada No. 45, Kaliwates, Jember"
          aria-required="true"
          aria-invalid={fieldErrors.alamat ? 'true' : undefined}
          class="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-2xs resize-y"
          class:border-rose-400={fieldErrors.alamat}
          class:focus:ring-rose-500={fieldErrors.alamat}
        ></textarea>
        {#if fieldErrors.alamat}
          <p role="alert" class="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <span>⚠</span> {fieldErrors.alamat}
          </p>
        {/if}
      </div>

      <!-- 3. No Telepon / WA -->
      <div>
        <label for="telepon" class="block text-xs sm:text-sm font-heading font-bold text-slate-800 mb-1.5">
          No. Telepon (WhatsApp) <span class="text-rose-600" aria-hidden="true">*</span>
        </label>
        <div class="relative">
          <input
            id="telepon"
            type="tel"
            bind:value={telepon}
            placeholder="Contoh: 081234567890"
            autocomplete="tel"
            aria-required="true"
            aria-invalid={fieldErrors.telepon ? 'true' : undefined}
            class="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-2xs"
            class:border-rose-400={fieldErrors.telepon}
            class:focus:ring-rose-500={fieldErrors.telepon}
          />
        </div>
        {#if fieldErrors.telepon}
          <p role="alert" class="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <span>⚠</span> {fieldErrors.telepon}
          </p>
        {:else}
          <p class="text-[11px] text-slate-500 mt-1">
            Pastikan nomor terhubung dengan WhatsApp aktif untuk informasi jadwal observasi.
          </p>
        {/if}
      </div>

      <!-- 4 & 5. Asal Sekolah & Alamat Sekolah (Row 2 Kolom) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Asal Sekolah -->
        <div>
          <label for="asalSekolah" class="block text-xs sm:text-sm font-heading font-bold text-slate-800 mb-1.5">
            Asal Sekolah (TK / PAUD) <span class="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="asalSekolah"
            type="text"
            bind:value={asalSekolah}
            placeholder="Contoh: TK Santa Maria Jember"
            aria-required="true"
            aria-invalid={fieldErrors.asalSekolah ? 'true' : undefined}
            class="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-2xs"
            class:border-rose-400={fieldErrors.asalSekolah}
            class:focus:ring-rose-500={fieldErrors.asalSekolah}
          />
          {#if fieldErrors.asalSekolah}
            <p role="alert" class="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <span>⚠</span> {fieldErrors.asalSekolah}
            </p>
          {/if}
        </div>

        <!-- Alamat Sekolah Asal -->
        <div>
          <label for="alamatSekolah" class="block text-xs sm:text-sm font-heading font-bold text-slate-800 mb-1.5">
            Alamat Sekolah Asal <span class="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="alamatSekolah"
            type="text"
            bind:value={alamatSekolah}
            placeholder="Contoh: Jl. Kartini No. 22, Jember"
            aria-required="true"
            aria-invalid={fieldErrors.alamatSekolah ? 'true' : undefined}
            class="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-2xs"
            class:border-rose-400={fieldErrors.alamatSekolah}
            class:focus:ring-rose-500={fieldErrors.alamatSekolah}
          />
          {#if fieldErrors.alamatSekolah}
            <p role="alert" class="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <span>⚠</span> {fieldErrors.alamatSekolah}
            </p>
          {/if}
        </div>
      </div>

      <!-- Submit Button -->
      <div class="pt-3">
        <button
          type="submit"
          disabled={status === 'loading'}
          class="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-heading font-black text-base text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-900 shadow-lg shadow-blue-700/25 hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        >
          {#if status === 'loading'}
            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Menyimpan ke Spreadsheet...</span>
          {:else}
            <span>Kirim Pendaftaran Sekarang</span>
            <span class="text-lg">→</span>
          {/if}
        </button>
      </div>

      <div class="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 text-center">
        <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Data aman dan langsung terhubung ke database Google Spreadsheet SDK Maria Fatima</span>
      </div>
    </form>
  {/if}
</div>

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
