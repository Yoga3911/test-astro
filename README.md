# 🏫 Website SDK Maria Fatima Jember

Website resmi SDK Maria Fatima Jember — dibangun dengan Astro 7, Tailwind CSS v4, Svelte 5, dan di-deploy ke **Cloudflare Workers with Assets**.

## 🛠️ Tech Stack

| Teknologi | Versi | Tujuan |
|---|---|---|
| [Astro](https://astro.build) | ^7.2.3 | Framework utama (static output) |
| [Tailwind CSS](https://tailwindcss.com) | ^4.3.3 | Styling (CSS-first, zero config) |
| [Svelte](https://svelte.dev) | ^5.56.9 | Komponen interaktif (form, carousel, dll) |
| [TypeScript](https://typescriptlang.org) | ^6.0.3 | Type safety |
| [Cloudflare Workers](https://workers.cloudflare.com) | - | Hosting & CDN global |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | ^4.124.0 | CLI deploy Cloudflare |
| [MDX](https://mdxjs.com) | ^7.0.6 | Konten artikel & berita |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Jalankan dev server (localhost:4321)
npm run dev

# Build untuk produksi
npm run build

# Preview build lokal
npm run preview
```

> **Node.js ≥ 22.12.0** diperlukan.

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── Header.astro                  # Sticky nav + mobile menu
│   ├── Footer.astro                  # Multi-column footer
│   ├── Hero.astro                    # Hero section beranda
│   ├── HeroVideo.astro               # Hero dengan background video
│   ├── SplashScreen.astro            # Splash screen first visit
│   ├── AdmissionForm.svelte          # Formulir SPMB online
│   ├── KontakForm.svelte             # Formulir kontak
│   ├── FloatingWA.svelte             # Tombol floating WhatsApp
│   ├── AudioPlayer.svelte            # Pemutar audio
│   ├── CarouselSpiritualitasSPM.svelte
│   ├── CarouselTestimoni.svelte
│   ├── CarouselVisMis.svelte
│   ├── BeritaCard.astro
│   ├── AgendaCard.astro
│   ├── CoreValuesSection.astro
│   ├── InstagramFeed.astro
│   ├── TaglineSection.astro
│   └── VisiMisiSection.astro
├── content/                          # Content Collections (MDX)
│   ├── berita/                       # Artikel berita
│   ├── agenda/                       # Agenda kegiatan
│   └── pengumuman/                   # Pengumuman
├── layouts/
│   └── BaseLayout.astro              # HTML shell + SEO + Favicon
├── pages/
│   ├── index.astro                   # Beranda
│   ├── about-us.astro                # Tentang sekolah (EN)
│   ├── admission.astro               # Penerimaan siswa baru (SPMB)
│   ├── agenda.astro                  # Agenda kegiatan
│   ├── berita/                       # Berita (list + detail)
│   ├── classroom.astro               # Kelas & fasilitas
│   ├── heritage.astro                # Sejarah & warisan sekolah
│   ├── kontak.astro                  # Kontak
│   ├── media.astro                   # Galeri media
│   ├── news-events/                  # Berita & events (EN)
│   ├── people.astro                  # Tim & guru
│   ├── ppdb.astro                    # Redirect ke admission
│   ├── submission.astro              # Halaman konfirmasi submission
│   └── tentang.astro                 # Redirect ke about-us
└── utils/
    └── config.ts                     # Konfigurasi SITE_CONFIG & helpers
```

## ✏️ Cara Menambah Konten

### Berita Baru
1. Buat file `src/content/berita/nama-slug.mdx`
2. Isi frontmatter sesuai schema:

```md
---
title: "Judul Berita"
description: "Deskripsi singkat"
pubDate: 2026-09-01
author: "Nama Penulis"
kategori: "Prestasi"  # Akademik | Kegiatan | Prestasi | Pengumuman | Lainnya
tags: ["tag1", "tag2"]
featured: false
draft: false
---

Isi artikel di sini...
```

### Agenda Baru
1. Buat file `src/content/agenda/nama-acara.mdx`
2. Isi frontmatter:

```md
---
judul: "Nama Acara"
tanggal: 2026-10-01
lokasi: "Aula Utama"
deskripsi: "Deskripsi singkat acara"
waktu: "08:00 WIB"
status: upcoming  # upcoming | ongoing | completed
kategori: "Akademik"
---
```

## ⚙️ Konfigurasi Sekolah

Edit satu file: `src/utils/config.ts` — semua info sekolah (nama, alamat, nomor telepon, sosmed) terpusat di objek `SITE_CONFIG`.

## 🌐 Deploy ke Cloudflare Workers

Project ini menggunakan **Cloudflare Workers with Assets** (bukan Cloudflare Pages).

### Konfigurasi Build (Cloudflare Dashboard)
| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

### Environment Variables yang diperlukan
Tambahkan di **Settings → Environment Variables** di Cloudflare Dashboard:

| Variable | Keterangan |
|---|---|
| `NODE_VERSION` | `22` |
| `PUBLIC_GOOGLE_SHEET_URL` | URL Google Apps Script untuk form SPMB |
| `PUBLIC_GOOGLE_SHEET_FALLBACK_URL` | URL fallback Google Apps Script |

### File konfigurasi Cloudflare
- [`wrangler.toml`](./wrangler.toml) — konfigurasi Cloudflare Workers

## 📝 Formulir SPMB (Penerimaan Siswa)

Formulir pendaftaran menggunakan **Google Apps Script** sebagai backend:
1. Deploy Google Apps Script dari `PANDUAN_GOOGLE_SPREADSHEET.md`
2. Copy URL deployment script
3. Set environment variable `PUBLIC_GOOGLE_SHEET_URL` di Cloudflare

## 🎨 Aset & Branding

- Logo utama: `public/logo/logo-sdk.png`
- Favicon: menggunakan `logo-sdk.png` di semua ukuran
- Video hero: `public/videos/`
- PWA Manifest: `public/site.webmanifest`

---

*Dikembangkan untuk SDK Maria Fatima Jember © 2026*
