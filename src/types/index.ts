/**
 * Shared TypeScript type definitions for SDK Maria Fatima Jember
 */

// ─── Site Configuration ────────────────────────────────────────────────────
export interface SiteConfig {
  name:        string;
  shortName:   string;
  tagline:     string;
  description: string;
  url:         string;
  npsn:        string;
  akreditasi:  string;
  email:       string;
  phone:       string;
  whatsapp:    string;
  address:     string;
  city:        string;
  foundation:  string;
  headOffice?: {
    name:     string;
    address:  string;
    city:     string;
    phone?:   string;
  };
  mapsUrl?:    string;
  mapsEmbedUrl?: string;
  coordinates?: { lat: number; lng: number };
  socialMedia: SocialMedia;
}

export interface SocialMedia {
  instagram?: string;
  facebook?:  string;
  youtube?:   string;
  whatsapp?:  string;
  tiktok?:    string;
}

// ─── Navigation ────────────────────────────────────────────────────────────
export interface NavItem {
  label:    string;
  href:     string;
  description?: string;
  hidden?:  boolean;
  children?: NavItem[];
}

// ─── Statistics Card ───────────────────────────────────────────────────────
export interface StatItem {
  value:  number;
  suffix: string;
  label:  string;
  icon:   string;
}

// ─── Team / Staff Member ───────────────────────────────────────────────────
export interface StaffMember {
  id:          string;
  name:        string;
  role:        string;
  category:    'kepala_sekolah' | 'guru_kelas' | 'guru_bidang' | 'karyawan';
  subCategory?: string; // e.g. "Kelas 1", "Pendidikan Agama", "Tata Usaha"
  photo:       string;
  education?:  string;
  quote?:      string;
  yearsOfService?: string;
}

// ─── Alumni Testimonial ────────────────────────────────────────────────────
export interface AlumniTestimonial {
  id:          string;
  name:        string;
  batch:       string; // Angkatan / Tahun Lulus
  currentRole: string; // Pekerjaan / Pendidikan saat ini
  photo:       string;
  headline:    string;
  testimony:   string[]; // 2 paragraphs of inspiring testimony
}

// ─── Core Values UKB ───────────────────────────────────────────────────────
export interface CoreValueUKB {
  letter: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  points: string[];
  theme: {
    badge: string;
    borderHover: string;
    textAccent: string;
    lightBg: string;
  };
}

// ─── 8 Profil Lulusan ──────────────────────────────────────────────────────
export interface GraduateProfile {
  number:      number;
  title:       string;
  description: string;
  icon:        string;
  aspect:      string;
}

// ─── Heritage Item ─────────────────────────────────────────────────────────
export interface HeritageItem {
  id:          string;
  title:       string;
  subtitle:    string;
  summary:     string;
  content:     string[];
  icon:        string;
  image?:      string;
  values?:     string[];
}

// ─── Classroom Level ───────────────────────────────────────────────────────
export interface ClassroomLevel {
  grade:       number;
  title:       string;
  theme:       string;
  focus:       string;
  highlights:  string[];
  activities:  string[];
  image:       string;
}

// ─── Media Items ───────────────────────────────────────────────────────────
export interface SongTrack {
  id:          string;
  title:       string;
  composer:    string;
  category:    'mars' | 'jingle' | 'lagu_rohani';
  audioUrl?:   string;
  duration?:   string;
  lyrics:      string[];
  description: string;
}

export interface MediaGalleryItem {
  id:          string;
  title:       string;
  category:    'kegiatan' | 'prestasi' | 'fasilitas' | 'spiritualitas';
  imageUrl:    string;
  date:        string;
  description?: string;
}

export interface VideoItem {
  id:          string;
  title:       string;
  category:    'profil' | 'kegiatan' | 'karya_siswa';
  youtubeId:   string;
  duration:    string;
  thumbnail:   string;
  description: string;
}

// ─── Instagram Mock Post ───────────────────────────────────────────────────
export interface InstagramPost {
  id:          string;
  caption:     string;
  likes:       number;
  comments:    number;
  imageUrl:    string;
  type:        'post' | 'reel';
  date:        string;
  link:        string;
}
