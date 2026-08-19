import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content Collections Schema — Astro 7 Content Layer API
 *
 * Three primary collections for school content management:
 *  - berita    : News articles (MDX with rich formatting)
 *  - agenda    : School events/activities timeline
 *  - pengumuman: Announcements (important notices)
 *
 * SOLID Principle: Each collection has a single, well-defined schema.
 * Admin (guru/staf) can create new content by adding MDX files
 * to the corresponding folder — no code changes required.
 */

// ─── Berita (News Articles) ────────────────────────────────────────────────
const beritaCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/berita' }),
  schema: z.object({
    title:       z.string().min(1, 'Judul wajib diisi'),
    description: z.string().min(1, 'Deskripsi wajib diisi'),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author:      z.string().default('Redaksi SMAN 1 Nusantara'),
    coverImage:  z.string().optional(),
    coverAlt:    z.string().optional(),
    kategori:    z.enum(['Akademik', 'Kegiatan', 'Prestasi', 'Pengumuman', 'Lainnya']).default('Lainnya'),
    tags:        z.array(z.string()).default([]),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
  }),
});

// ─── Agenda (School Events) ────────────────────────────────────────────────
const agendaCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/agenda' }),
  schema: z.object({
    judul:        z.string().min(1, 'Judul agenda wajib diisi'),
    tanggal:      z.coerce.date(),
    tanggalAkhir: z.coerce.date().optional(),
    lokasi:       z.string().default('Sekolah'),
    deskripsi:    z.string().min(1, 'Deskripsi agenda wajib diisi'),
    waktu:        z.string().optional(),
    status:       z.enum(['upcoming', 'ongoing', 'completed']).default('upcoming'),
    kategori:     z.enum(['Akademik', 'Olahraga', 'Seni', 'Sosial', 'Keagamaan', 'Lainnya']).default('Lainnya'),
    coverImage:   z.string().optional(),
    featured:     z.boolean().default(false),
  }),
});

// ─── Pengumuman (Announcements) ────────────────────────────────────────────
const pengumumanCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pengumuman' }),
  schema: z.object({
    judul:         z.string().min(1, 'Judul pengumuman wajib diisi'),
    tanggal:       z.coerce.date(),
    berlakuHingga: z.coerce.date().optional(),
    penting:       z.boolean().default(false),
    kategori:      z.enum(['PPDB', 'Akademik', 'Administrasi', 'Kegiatan', 'Umum']).default('Umum'),
    lampiran:      z.string().optional(),
  }),
});

export const collections = {
  berita:      beritaCollection,
  agenda:      agendaCollection,
  pengumuman:  pengumumanCollection,
};
