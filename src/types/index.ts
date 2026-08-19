/**
 * Shared TypeScript type definitions
 *
 * SOLID — Single Responsibility:
 * Types are isolated here and imported by components/pages.
 * This prevents type duplication and ensures consistency.
 */

// ─── Site Configuration ────────────────────────────────────────────────────
export interface SiteConfig {
  name:        string;
  shortName:   string;
  description: string;
  url:         string;
  npsn:        string;
  akreditasi:  string;
  email:       string;
  phone:       string;
  address:     string;
  socialMedia: SocialMedia;
}

export interface SocialMedia {
  instagram?: string;
  facebook?:  string;
  youtube?:   string;
  twitter?:   string;
}

// ─── Navigation ────────────────────────────────────────────────────────────
export interface NavItem {
  label:    string;
  href:     string;
  children?: NavItem[];
}

// ─── Statistics Card ───────────────────────────────────────────────────────
export interface StatItem {
  value:  number;
  suffix: string;
  label:  string;
  icon:   string;
}

// ─── Team Member ───────────────────────────────────────────────────────────
export interface TeamMember {
  name:    string;
  role:    string;
  photo?:  string;
  nip?:    string;
}
