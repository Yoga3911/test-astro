/**
 * Site-wide constants and configuration
 *
 * Single source of truth for school metadata.
 * Change values here to update everywhere across the site.
 */

import type { SiteConfig, NavItem, StatItem } from '@/types/index';

// ─── School Info ───────────────────────────────────────────────────────────
export const SITE_CONFIG: SiteConfig = {
  name:        'SMA Negeri 1 Nusantara',
  shortName:   'SMAN 1 Nusantara',
  description: 'SMA Negeri 1 Nusantara — Sekolah unggulan berprestasi dengan lingkungan belajar modern, inovatif, dan berkarakter. Mencetak generasi pemimpin bangsa sejak 1975.',
  url:         'https://sman1nusantara.sch.id',
  npsn:        '20100001',
  akreditasi:  'A (Unggul)',
  email:       'info@sman1nusantara.sch.id',
  phone:       '(021) 555-1234',
  address:     'Jl. Pendidikan No. 1, Nusantara, Indonesia 12345',
  socialMedia: {
    instagram: 'https://instagram.com/sman1nusantara',
    facebook:  'https://facebook.com/sman1nusantara',
    youtube:   'https://youtube.com/@sman1nusantara',
  },
};

// ─── Navigation ───────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda',   href: '/' },
  {
    label: 'Profil',
    href: '/tentang',
    children: [
      { label: 'Tentang Sekolah', href: '/tentang' },
      { label: 'Visi & Misi',     href: '/tentang#visi-misi' },
      { label: 'Struktur Organisasi', href: '/tentang#struktur' },
      { label: 'Fasilitas',       href: '/tentang#fasilitas' },
    ],
  },
  { label: 'Berita',    href: '/berita' },
  { label: 'Agenda',    href: '/agenda' },
  { label: 'PPDB',      href: '/ppdb' },
  { label: 'Kontak',    href: '/kontak' },
];

// ─── School Statistics ────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: 51,   suffix: '+', label: 'Tahun Berdiri',     icon: '🏫' },
  { value: 1200, suffix: '+', label: 'Siswa Aktif',        icon: '👨‍🎓' },
  { value: 85,   suffix: '+', label: 'Tenaga Pengajar',    icon: '👨‍🏫' },
  { value: 200,  suffix: '+', label: 'Prestasi Nasional',  icon: '🏆' },
];

// ─── Format helpers ───────────────────────────────────────────────────────

/** Format a Date to Indonesian locale string (e.g. "19 Agustus 2026") */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  }).format(date);
}

/** Format a Date to short Indonesian locale string (e.g. "19 Ags 2026") */
export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day:   'numeric',
    month: 'short',
    year:  'numeric',
  }).format(date);
}

/** Get relative time in Indonesian (e.g. "3 hari yang lalu") */
export function relativeTime(date: Date): string {
  const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' });
  const diff = Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  if (Math.abs(diff) < 1)  return 'Hari ini';
  if (Math.abs(diff) < 7)  return rtf.format(diff, 'day');
  if (Math.abs(diff) < 30) return rtf.format(Math.round(diff / 7), 'week');
  if (Math.abs(diff) < 365) return rtf.format(Math.round(diff / 30), 'month');
  return rtf.format(Math.round(diff / 365), 'year');
}

/** Map agenda status to badge config */
export function getAgendaStatusBadge(status: string): { label: string; class: string } {
  const map: Record<string, { label: string; class: string }> = {
    upcoming:  { label: 'Akan Datang', class: 'badge-blue' },
    ongoing:   { label: 'Sedang Berlangsung', class: 'badge-green' },
    completed: { label: 'Selesai', class: 'badge-gold' },
  };
  return map[status] ?? map['upcoming'];
}

/** Kategori color map for tags */
export const KATEGORI_COLORS: Record<string, string> = {
  'Akademik':    'badge-blue',
  'Kegiatan':    'badge-green',
  'Prestasi':    'badge-gold',
  'Pengumuman':  'badge-blue',
  'Lainnya':     'badge-blue',
  'PPDB':        'badge-gold',
  'Administrasi': 'badge-blue',
};
