# 🏫 Website SMAN 1 Nusantara

Website resmi SMA Negeri 1 Nusantara — dibangun dengan Astro 7, Tailwind CSS v4, Svelte 5, dan siap deploy ke Cloudflare Pages.

## 🛠️ Tech Stack

| Teknologi | Versi | Tujuan |
|---|---|---|
| [Astro](https://astro.build) | ^7.x | Framework (static-first, Rust compiler) |
| [Tailwind CSS](https://tailwindcss.com) | ^4.x | Styling (CSS-first, zero config) |
| [Svelte](https://svelte.dev) | ^5.x | Komponen interaktif (form, dll) |
| [TypeScript](https://typescriptlang.org) | ^6.x | Type safety |
| [Cloudflare Pages](https://pages.cloudflare.com) | - | Hosting & CDN |
| [Web3Forms](https://web3forms.com) | - | Formulir kontak tanpa backend |

## 🚀 Quick Start

```bash
# Install dependencies
npm install --cache ~/.npm-custom

# Jalankan dev server (localhost:4321)
npm run dev

# Build untuk produksi
npm run build

# Preview build lokal
npm run preview
```

## 📁 Struktur Proyek

```
src/
├── components/       # Komponen reusable
│   ├── Header.astro  # Sticky nav + mobile menu
│   ├── Footer.astro  # Multi-column footer
│   ├── Hero.astro    # Hero section animasi
│   ├── BeritaCard.astro
│   ├── AgendaCard.astro
│   └── KontakForm.svelte  # Form interaktif
├── content/          # Content Collections (MDX)
│   ├── berita/       # Artikel berita
│   ├── agenda/       # Agenda kegiatan
│   ├── pengumuman/   # Pengumuman
│   └── config.ts     # Schema Zod
├── layouts/
│   ├── BaseLayout.astro    # HTML shell + SEO
│   └── ArticleLayout.astro # Layout artikel
├── pages/
│   ├── index.astro    # Beranda
│   ├── berita/        # Berita (list + detail)
│   ├── agenda.astro   # Agenda
│   ├── tentang.astro  # Profil sekolah
│   ├── ppdb.astro     # PPDB
│   └── kontak.astro   # Kontak
├── styles/
│   └── global.css    # Design system (Tailwind v4)
├── types/
│   └── index.ts      # TypeScript types
└── utils/
    └── config.ts     # Konfigurasi sekolah + helpers
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

Edit satu file: `src/utils/config.ts` — semua info sekolah (nama, alamat, nomor, sosmed) ada di `SITE_CONFIG`.

## 🌐 Deploy ke Cloudflare Pages

1. Push ke GitHub/GitLab
2. Login ke [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create project → Connect Git
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Tambahkan environment variables di CF Dashboard

## 📝 Formulir Kontak Setup

1. Daftar di [web3forms.com](https://web3forms.com) dengan email sekolah
2. Copy Access Key
3. Ganti `YOUR_WEB3FORMS_KEY` di `src/pages/kontak.astro` dan `src/pages/ppdb.astro`

## 🛡️ Cloudflare Turnstile (Anti-spam)

1. Daftar di [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Buat site baru → salin Site Key
3. Pasang widget di `KontakForm.svelte` sesuai dokumentasi Turnstile

---

*Dikembangkan untuk SMAN 1 Nusantara © 2026*
