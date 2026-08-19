<script lang="ts">
  /**
   * KontakForm.svelte
   *
   * Interactive contact form with:
   * - Real-time client-side validation
   * - Web3Forms API submission
   * - Cloudflare Turnstile (anti-spam widget placeholder)
   * - Success/error toast notification
   * - Loading state with spinner
   *
   * Single Responsibility: Only handles form UX + submission.
   * No routing, no content fetching.
   */

  // ── Props ──────────────────────────────────────────────────────────────────
  interface Props {
    web3FormsKey?: string;
    recipientEmail?: string;
    formTitle?: string;
    showSubject?: boolean;
  }

  let {
    web3FormsKey  = 'YOUR_WEB3FORMS_ACCESS_KEY',
    formTitle     = 'Kirim Pesan',
    showSubject   = true,
  }: Props = $props();

  // ── State ──────────────────────────────────────────────────────────────────
  let name         = $state('');
  let email        = $state('');
  let subject      = $state('');
  let message      = $state('');
  let status       = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
  let errorMessage = $state('');

  // ── Validation ─────────────────────────────────────────────────────────────
  type FieldErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  let fieldErrors = $state<FieldErrors>({});

  function validateEmail(v: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function validate(): boolean {
    const errors: FieldErrors = {};
    if (!name.trim() || name.trim().length < 2)
      errors.name    = 'Nama minimal 2 karakter';
    if (!email.trim() || !validateEmail(email))
      errors.email   = 'Format email tidak valid';
    if (showSubject && (!subject.trim() || subject.trim().length < 3))
      errors.subject = 'Subjek minimal 3 karakter';
    if (!message.trim() || message.trim().length < 10)
      errors.message = 'Pesan minimal 10 karakter';
    fieldErrors = errors;
    return Object.keys(errors).length === 0;
  }

  // ── Submit ─────────────────────────────────────────────────────────────────
  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!validate()) return;

    status = 'loading';

    try {
      const payload: Record<string, string> = {
        access_key:  web3FormsKey,
        name:        name.trim(),
        email:       email.trim(),
        message:     message.trim(),
        botcheck:    '',
      };
      if (showSubject) payload.subject = subject.trim();

      const response = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(payload),
      });

      const data = await response.json() as { success: boolean; message?: string };

      if (data.success) {
        status = 'success';
        name = email = subject = message = '';
        fieldErrors = {};
      } else {
        throw new Error(data.message ?? 'Pengiriman gagal');
      }
    } catch (err) {
      status       = 'error';
      errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan. Coba lagi.';
    }

    // Auto-reset status after 6 seconds
    if (status === 'success' || status === 'error') {
      setTimeout(() => { status = 'idle'; }, 6000);
    }
  }
</script>

<!-- ── Template ──────────────────────────────────────────────────────────── -->
<form
  id="kontak-form"
  onsubmit={handleSubmit}
  novalidate
  aria-label={formTitle}
  style="display: flex; flex-direction: column; gap: 1.25rem;"
>
  <!-- Status Banners -->
  {#if status === 'success'}
    <div
      role="alert"
      aria-live="assertive"
      style="
        display: flex; align-items: center; gap: 0.75rem;
        padding: 1rem 1.25rem;
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        border-radius: 0.75rem;
        color: #166534;
        font-size: 0.9rem;
        animation: slideDown 0.3s ease;
      "
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <div>
        <strong>Pesan berhasil terkirim!</strong>
        <p style="margin: 0; opacity: 0.85; font-size: 0.82rem;">Kami akan membalas dalam 1-2 hari kerja.</p>
      </div>
    </div>
  {/if}

  {#if status === 'error'}
    <div
      role="alert"
      aria-live="assertive"
      style="
        display: flex; align-items: center; gap: 0.75rem;
        padding: 1rem 1.25rem;
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.75rem;
        color: #991b1b;
        font-size: 0.9rem;
      "
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div>
        <strong>Pengiriman gagal</strong>
        <p style="margin: 0; opacity: 0.85; font-size: 0.82rem;">{errorMessage}</p>
      </div>
    </div>
  {/if}

  <!-- Name + Email row -->
  <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem;" class="form-row">
    <!-- Name -->
    <div>
      <label for="kontak-name" class="form-label">
        Nama Lengkap <span aria-hidden="true" style="color: #dc2626;">*</span>
      </label>
      <input
        id="kontak-name"
        type="text"
        bind:value={name}
        class="form-input"
        placeholder="Nama Anda"
        autocomplete="name"
        aria-required="true"
        aria-invalid={fieldErrors.name ? 'true' : undefined}
        aria-describedby={fieldErrors.name ? 'err-name' : undefined}
        style={fieldErrors.name ? 'border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.12);' : ''}
      />
      {#if fieldErrors.name}
        <p id="err-name" role="alert" style="margin-top: 0.35rem; font-size: 0.78rem; color: #dc2626; display: flex; align-items: center; gap: 0.25rem;">
          ⚠ {fieldErrors.name}
        </p>
      {/if}
    </div>

    <!-- Email -->
    <div>
      <label for="kontak-email" class="form-label">
        Alamat Email <span aria-hidden="true" style="color: #dc2626;">*</span>
      </label>
      <input
        id="kontak-email"
        type="email"
        bind:value={email}
        class="form-input"
        placeholder="email@contoh.com"
        autocomplete="email"
        aria-required="true"
        aria-invalid={fieldErrors.email ? 'true' : undefined}
        aria-describedby={fieldErrors.email ? 'err-email' : undefined}
        style={fieldErrors.email ? 'border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.12);' : ''}
      />
      {#if fieldErrors.email}
        <p id="err-email" role="alert" style="margin-top: 0.35rem; font-size: 0.78rem; color: #dc2626;">
          ⚠ {fieldErrors.email}
        </p>
      {/if}
    </div>
  </div>

  <!-- Subject -->
  {#if showSubject}
    <div>
      <label for="kontak-subject" class="form-label">
        Subjek <span aria-hidden="true" style="color: #dc2626;">*</span>
      </label>
      <input
        id="kontak-subject"
        type="text"
        bind:value={subject}
        class="form-input"
        placeholder="Topik pesan Anda"
        aria-required="true"
        aria-invalid={fieldErrors.subject ? 'true' : undefined}
        aria-describedby={fieldErrors.subject ? 'err-subject' : undefined}
        style={fieldErrors.subject ? 'border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.12);' : ''}
      />
      {#if fieldErrors.subject}
        <p id="err-subject" role="alert" style="margin-top: 0.35rem; font-size: 0.78rem; color: #dc2626;">
          ⚠ {fieldErrors.subject}
        </p>
      {/if}
    </div>
  {/if}

  <!-- Message -->
  <div>
    <label for="kontak-message" class="form-label">
      Pesan <span aria-hidden="true" style="color: #dc2626;">*</span>
    </label>
    <textarea
      id="kontak-message"
      bind:value={message}
      class="form-input"
      placeholder="Tuliskan pesan Anda di sini..."
      rows="5"
      aria-required="true"
      aria-invalid={fieldErrors.message ? 'true' : undefined}
      aria-describedby={fieldErrors.message ? 'err-message' : undefined}
      style={`resize: vertical; min-height: 120px; ${fieldErrors.message ? 'border-color: #ef4444;' : ''}`}
    ></textarea>
    {#if fieldErrors.message}
      <p id="err-message" role="alert" style="margin-top: 0.35rem; font-size: 0.78rem; color: #dc2626;">
        ⚠ {fieldErrors.message}
      </p>
    {/if}
    <div style="margin-top: 0.35rem; font-size: 0.75rem; color: #64748b; text-align: right;">
      {message.length} karakter
    </div>
  </div>

  <!-- Turnstile Placeholder -->
  <div
    id="cf-turnstile-placeholder"
    style="
      background: #f8fafc;
      border: 1px dashed #cbd5e1;
      border-radius: 0.5rem;
      padding: 0.875rem 1rem;
      font-size: 0.8rem;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    "
    title="Cloudflare Turnstile widget akan dimuat di sini"
  >
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="color: #2563eb;">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    </svg>
    Dilindungi Cloudflare Turnstile (pasang site key di produksi)
  </div>

  <!-- Honeypot anti-spam -->
  <input type="checkbox" name="botcheck" style="display: none;" tabindex="-1" aria-hidden="true" />

  <!-- Submit Button -->
  <button
    id="kontak-submit-btn"
    type="submit"
    class="btn btn-primary"
    disabled={status === 'loading'}
    aria-label={status === 'loading' ? 'Mengirim pesan...' : 'Kirim pesan'}
    style="width: 100%; justify-content: center; font-size: 1rem; padding: 1rem; transition: all 0.3s; opacity: {status === 'loading' ? '0.8' : '1'};"
  >
    {#if status === 'loading'}
      <svg
        style="animation: spin 1s linear infinite;"
        width="20" height="20" fill="none" viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      Mengirim...
    {:else}
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
      {formTitle}
    {/if}
  </button>
</form>

<style>
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (min-width: 640px) {
    .form-row {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  textarea.form-input {
    font-family: var(--font-body);
  }
</style>

