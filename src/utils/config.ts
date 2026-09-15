/**
 * Site-wide constants and configuration for SDK Maria Fatima Jember
 * Single source of truth for school metadata, sitemap navigation, and content structures.
 */

import type {
  SiteConfig,
  NavItem,
  StatItem,
  AlumniTestimonial,
  GraduateProfile,
  HeritageItem,
  StaffMember,
  ClassroomLevel,
  SongTrack,
  InstagramPost,
  CoreValueUKB,
} from '@/types/index';

// ─── School Info ───────────────────────────────────────────────────────────
export const SITE_CONFIG: SiteConfig = {
  name:        'SDK Maria Fatima Jember',
  shortName:   'SDK Maria Fatima',
  tagline:     'Living values, creating digitally',
  description: 'Sekolah Dasar Katolik Maria Fatima Jember di Kabupaten Jember — Membina tunas muda berprestasi, berintegritas, mandiri, dan berjiwa belas kasih.',
  url:         'https://sdkmartimjember.sch.id',
  npsn:        '20523821',
  akreditasi:  'A (Unggul)',
  email:       'sdkmartimjember@gmail.com',
  phone:       '0813 5897 7450',
  whatsapp:    '6281358977450',
  address:     'Jl. R.A. Kartini No.24, Tembaan, Kepatihan, Kec. Kaliwates, Kabupaten Jember, Jawa Timur 68137',
  city:        'Jember, Jawa Timur',
  foundation:  'Perkumpulan Santa Perawan Maria (SPM)',
  headOffice: {
    name:     'Perkumpulan Santa Perawan Maria (SPM)',
    address:  'Jl. Pandan No. 8, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65112',
    city:     'Malang, Jawa Timur',
    phone:    '(0341) 325447',
  },
  coordinates: { lat: -8.1713365, lng: 113.7008447 },
  mapsUrl:     'https://www.google.com/maps/dir/?api=1&destination=-8.1713365,113.7008447',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800!2d113.70059440408045!3d-8.171372828525238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6943ad8c8d30f%3A0x66813f25e6dc2c7f!2sSDK%20Maria%20Fatima!5e0!3m2!1sid!2sid!4v1787836482664!5m2!1sid!2sid',
  socialMedia: {
    instagram: 'https://www.instagram.com/sdkmariafatimajbr',
    facebook:  'https://facebook.com/sdkmartimjember',
    youtube:   'https://youtube.com/@SDKMariaFatimaJember',
    whatsapp:  'https://wa.me/6281358977450',
    tiktok:    'https://tiktok.com/@sdkmartimjember',
  },
};

// ─── Navigation Sitemap (Strictly matching PDF Sitemap Table) ───────────────
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Sejarah SDK Maria Fatima', href: '/about-us#sejarah' },
      { label: 'Visi & Misi', href: '/about-us#visi-misi' },
      { label: 'Core Value', href: '/about-us#core-values' },
      { label: '8 Profil Lulusan', href: '/about-us#profil-lulusan' },
      { label: 'Tata Tertib', href: '/about-us#tata-tertib' },
    ],
  },
  {
    label: 'Heritage',
    href: '/heritage',
    children: [
      { label: '1. SPM', href: '/heritage#spm', description: 'Sejarah Kongregasi SPM & Perkumpulan Dharmaputri' },
      { label: '2. JULIE BILLIART', href: '/heritage#julie-billiart', description: 'Inspirasi Pendidikan Berakar Iman & Kasih' },
      { label: '3. PATER MATTIAS WOLF', href: '/heritage#pater-mattias-wolf', description: 'Perintis & Pendiri Kongregasi Suster SPM' },
      { label: '4. Tota Christi Per Mariam', href: '/heritage#tota-christi', description: 'Motto & Makna Filosofis Lambang Kongregasi SPM' },
      { label: '5. SIKARU', href: '/heritage#sikaru', description: 'Maskot Karakter Resmi Perkumpulan Dharmaputri' },
    ],
  },
  {
    label: 'People',
    href: '/people',
    hidden: true,
    children: [
      { label: 'Kepala Sekolah', href: '/people#kepala-sekolah' },
      { label: 'Guru', href: '/people#guru' },
      { label: 'Karyawan', href: '/people#karyawan' },
    ],
  },
  {
    label: 'News & Events',
    href: '/news-events',
    hidden: true,
    children: [
      { label: 'Artikel', href: '/news-events?kategori=Artikel' },
      { label: 'Berita', href: '/news-events?kategori=Berita' },
      { label: 'Galeri Kegiatan', href: '/news-events#galeri' },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    hidden: true,
    children: [
      { label: 'Mars SDK', href: '/media#mars-sdk' },
      { label: 'Jingle UKB', href: '/media#jingle-ukb' },
      { label: 'Galeri Foto', href: '/media#galeri-foto' },
      { label: 'Video', href: '/media#video' },
    ],
  },
  {
    label: 'Classroom',
    href: '/classroom',
    hidden: true,
  },
  {
    label: 'Admission',
    href: '/admission',
    hidden: true,
  },
];

// ─── School Statistics ────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: 65,   suffix: '+', label: 'Tahun Melayani' },
  { value: 680,  suffix: '+', label: 'Siswa Aktif' },
  { value: 42,   suffix: '+', label: 'Guru & Karyawan' },
  { value: 150,  suffix: '+', label: 'Prestasi Juara' },
];

// ─── Visi Misi Core Values Tagline ─────────────────────────────────────────
export const VISI_MISI_DATA = {
  visi: 'Membentuk tunas muda berprestasi, berintegritas, mandiri, dan berjiwa kasih dalam naungan iman Kristiani di era digital.',
  misi: [
    'Menyelenggarakan pendidikan dasar Katolik yang holistik, unggul dalam mutu akademik, dan berkarakter budi pekerti luhur.',
    'Menanamkan dan menghidupi nilai spiritualitas cinta kasih, kesederhanaan, dan ketaatan seturut teladan Bunda Maria dan para perintis SPM.',
    'Mengembangkan kecakapan berpikir kritis, kreatif, literasi digital, dan kemandirian belajar sesuai tuntutan abad ke-21.',
    'Menciptakan lingkungan belajar ramah anak yang aman, inklusif, harmonis, serta menghargai keberagaman suku dan budaya.',
    'Membangun sinergi kemitraan yang transparan dan harmonis bersama orang tua, gereja, dan masyarakat demi tumbuh kembang optimal anak.',
  ],
  coreValues: [
    { title: 'Unggul (Excellence)', desc: 'Mengembangkan pribadi yang berprestasi, mandiri, berpikir kritis, berinovasi, dan visioner.' },
    { title: 'Kasih (Compassion)', desc: 'Menghidupi nilai kasih melalui kepedulian, kejujuran, empati, keadilan, dan semangat melayani sesama.' },
    { title: 'Bermartabat (Dignity)', desc: 'Menjadi pribadi berintegritas yang menghargai sesama, selaras kata dan perbuatan, berlandaskan iman dan etika.' },
  ],
  tagline: 'Living Values, Creating Digitally',
  taglineMeaning: 'Menghidupi Nilai-nilai kebenaran, Menciptakan karya dengan teknologi',
};

// ─── Tujuan Sekolah SDK Maria Fatima ───────────────────────────────────────
export const TUJUAN_SDK = [
  {
    number: 1,
    title: 'Karakter Nilai Unggul, Kasih, dan Bermartabat',
    description: 'Tumbuhnya karakter murid berdasarkan spiritualitas nilai Unggul, Kasih, dan Bermartabat (UKB) yang menjiwai seluruh perilaku sekolah.',
  },
  {
    number: 2,
    title: 'Rasa Aman & Nyaman Bagi Seluruh Warga Sekolah',
    description: 'Terwujudnya lingkungan sekolah ramah anak yang aman, inklusif, bebas perundungan, dan menyenangkan bagi setiap anak.',
  },
  {
    number: 3,
    title: 'Kesadaran Literasi Digital & Pemanfaatan TIK',
    description: 'Terwujudnya kesadaran dan kecakapan literasi digital dalam pemanfaatan teknologi informasi dan komunikasi secara cerdas dan bijak.',
  },
  {
    number: 4,
    title: 'Prestasi Seni Budaya, Literasi & Numerasi Berkelanjutan',
    description: 'Terwujudnya murid yang berprestasi dalam seni budaya, literasi, dan numerasi melalui wadah pembinaan yang terencana dan berkesinambungan.',
  },
  {
    number: 5,
    title: 'Kemitraan Hak, Perlindungan & Kesejahteraan Anak',
    description: 'Terjalinnya kemitraan strategis dengan orang tua dan pemangku kepentingan untuk memastikan pemenuhan hak, perlindungan, dan kesejahteraan anak.',
  },
  {
    number: 6,
    title: 'Pembelajaran IPAS & Matematika dalam Bahasa Inggris',
    description: 'Terselenggaranya pembelajaran IPAS (Sains) dan Matematika bilingual dalam Bahasa Inggris guna membekali siswa berwawasan global.',
  },
];

// ─── Profil Lulusan SDK Maria Fatima (6 Dimensi Karakter) ──────────────────
export const PROFIL_LULUSAN_SDK = [
  {
    number: 1,
    title: 'Pribadi yang Beriman',
    description: 'Memiliki fondasi iman yang hidup dan mendalam, berakar pada ajaran kasih Allah, dan berbudi pekerti luhur.',
    aspect: 'Spiritualitas & Iman',
  },
  {
    number: 2,
    title: 'Mampu Bernalar Kritis',
    description: 'Menguasai literasi dan numerasi serta mampu berpikir analitis, logis, dan solutif dalam menghadapi permasalahan.',
    aspect: 'Nalar Kritis & Logika',
  },
  {
    number: 3,
    title: 'Bijak Mengambil Keputusan',
    description: 'Memiliki kemandirian dan keberanian mengambil keputusan yang benar dan selaras antara kata dan tindakan.',
    aspect: 'Kemandirian & Integritas',
  },
  {
    number: 4,
    title: 'Semangat Kolaboratif',
    description: 'Mampu bekerja sama secara sinergis, komunikatif, menghargai keberagaman, dan memiliki jiwa kepemimpinan.',
    aspect: 'Kolaborasi & Kerjasama',
  },
  {
    number: 5,
    title: 'Hati yang Penuh Empati',
    description: 'Peduli terhadap sesama dan lingkungan, berjiwa melayani, santun, serta mengedepankan belas kasih bagi yang lemah.',
    aspect: 'Empati & Kepedulian',
  },
  {
    number: 6,
    title: 'Berwawasan Global',
    description: 'Adaptif terhadap kemajuan teknologi digital, berwawasan luas lintas budaya, dan siap bersaing di kancah internasional.',
    aspect: 'Wawasan Global & Digital',
  },
];

// ─── Profil Guru SDK Maria Fatima (5 Pilar Keteladanan Pendidik) ───────────
export const PROFIL_GURU_SDK = [
  {
    number: 1,
    title: 'Adaptif terhadap Teknologi & Kurikulum Mutakhir',
    description: 'Cakap memanfaatkan teknologi informasi dalam pembelajaran serta adaptif terhadap perkembangan kurikulum dan pendekatan pedagogi modern.',
  },
  {
    number: 2,
    title: 'Teladan dalam Kasih, Pelayanan, dan Kesederhanaan',
    description: 'Menjadi cermin moral dan spiritual melalui sikap hidup yang penuh cinta kasih, ketulusan melayani, dan kesederhanaan hati.',
  },
  {
    number: 3,
    title: 'Mengenali Kebutuhan Belajar, Emosi, dan Perkembangan Murid',
    description: 'Peka terhadap keunikan setiap anak, memahami gaya belajar, kondisi emosional, serta mendampingi fase tumbuh kembang secara personal.',
  },
  {
    number: 4,
    title: 'Mengoptimalkan Potensi & Bakat Murid Lewat Pengembangan Diri',
    description: 'Membimbing dan memfasilitasi anak didik dalam mengeksplorasi bakat akademik, minat seni budaya, dan potensi kepemimpinan.',
  },
  {
    number: 5,
    title: 'Pelayanan Prima, Komunikatif, dan Solutif kepada Orang Tua',
    description: 'Membangun komunikasi yang transparan, hangat, dan konstruktif bersama orang tua untuk solusi terbaik bagi keberhasilan anak.',
  },
];

// ─── Core Value UKB (Unggul, Kasih, Bermartabat) ───────────────────────────
export const CORE_VALUES_UKB: CoreValueUKB[] = [
  {
    letter: 'U',
    name: 'UNGGUL',
    tagline: 'Mengembangkan pribadi yang berprestasi, mandiri, dan visioner.',
    shortDesc: 'Kemampuan untuk terus bertumbuh, berpikir kritis, berinovasi, serta berani mengambil inisiatif menghadapi tantangan.',
    fullDesc: 'Unggul bukan sekadar meraih pencapaian akademik, melainkan kemampuan untuk terus bertumbuh, berpikir kritis, berinovasi, serta berani mengambil inisiatif dalam menghadapi tantangan. Peserta didik dibentuk menjadi pribadi yang disiplin, percaya diri, kreatif, memiliki jiwa kepemimpinan, serta mampu memberikan dampak positif bagi lingkungan sekitarnya.',
    points: [
      'Pribadi Berprestasi & Visioner',
      'Berpikir Kritis & Berani Berinovasi',
      'Disiplin, Percaya Diri & Berjiwa Pemimpin',
      'Membawa Dampak Positif bagi Lingkungan',
    ],
    theme: {
      badge: 'from-blue-600 to-indigo-600 text-white',
      borderHover: 'hover:border-blue-400 hover:shadow-blue-900/10',
      textAccent: 'text-blue-700',
      lightBg: 'bg-blue-50/60',
    },
  },
  {
    letter: 'K',
    name: 'KASIH',
    tagline: 'Menghidupi nilai kasih melalui kepedulian, kejujuran, dan pelayanan.',
    shortDesc: 'Landasan dalam setiap relasi dan tindakan nyata yang membangun kepedulian sosial dan semangat melayani.',
    fullDesc: 'Kasih menjadi landasan dalam setiap relasi dan tindakan. Peserta didik dibimbing untuk memiliki empati, menghargai sesama, peduli terhadap lingkungan, menjunjung keadilan, serta mampu bekerja sama dalam keberagaman. Nilai kasih diwujudkan dalam tindakan nyata yang membangun kepedulian sosial dan semangat melayani.',
    points: [
      'Empati, Kejujuran & Hati yang Peduli',
      'Menghargai Sesama & Menjunjung Keadilan',
      'Mampu Bekerja Sama dalam Keberagaman',
      'Semangat Melayani & Kepedulian Sosial',
    ],
    theme: {
      badge: 'from-red-500 to-red-600 text-white',
      borderHover: 'hover:border-red-500 hover:shadow-red-900/10',
      textAccent: 'text-red-600',
      lightBg: 'bg-red-50/70',
    },
  },
  {
    letter: 'B',
    name: 'BERMARTABAT',
    tagline: 'Menjadi pribadi berintegritas yang menghargai sesama dan berlandaskan iman.',
    shortDesc: 'Karakter kuat yang bertindak selaras antara pikiran, perkataan, dan perbuatan berlandaskan iman dan etika luhur.',
    fullDesc: 'Bermartabat berarti memiliki karakter yang kuat, mampu mengambil keputusan yang benar, menghormati setiap pribadi, serta bertindak selaras antara pikiran, perkataan, dan perbuatan. Dengan berlandaskan iman dan hati nurani, peserta didik dipersiapkan menjadi pribadi yang bertanggung jawab, beretika, dan mampu membawa kebaikan bagi masyarakat.',
    points: [
      'Pribadi Berintegritas & Berkarakter Kuat',
      'Berlandaskan Iman & Hati Nurani',
      'Selaras antara Pikiran, Perkataan & Perbuatan',
      'Bertanggung Jawab, Beretika & Membawa Kebaikan',
    ],
    theme: {
      badge: 'from-yellow-400 to-yellow-500 text-slate-900',
      borderHover: 'hover:border-yellow-400 hover:shadow-yellow-500/10',
      textAccent: 'text-yellow-700',
      lightBg: 'bg-yellow-50/80',
    },
  },
];

// ─── 8 Profil Lulusan SDK Maria Fatima ────────────────────────────────────
export const PROFIL_LULUSAN_8: GraduateProfile[] = [
  {
    number: 1,
    title: 'Beriman & Berbudi Luhur',
    description: 'Memiliki fondasi spiritual Kristiani yang kokoh, rajin berdoa, dan berperilaku santun kepada siapa saja.',
    icon: '🕊️',
    aspect: 'Spiritualitas',
  },
  {
    number: 2,
    title: 'Cerdas & Bernalar Kritis',
    description: 'Menguasai literasi, numerasi, serta kemampuan memecahkan masalah sehari-hari secara logis dan analitis.',
    icon: '🧠',
    aspect: 'Kognitif & Logika',
  },
  {
    number: 3,
    title: 'Kreatif & Inovatif',
    description: 'Mampu mengekspresikan ide, karya seni, proyek sains, dan terobosan orisinal dengan percaya diri.',
    icon: '💡',
    aspect: 'Kreativitas',
  },
  {
    number: 4,
    title: 'Mandiri & Bertanggung Jawab',
    description: 'Disiplin mengelola waktu, berani mengambil keputusan tepat, dan mampu menyelesaikan tugas tanpa ketergantungan.',
    icon: '🎒',
    aspect: 'Kemandirian',
  },
  {
    number: 5,
    title: 'Peduli & Berbela Rasa',
    description: 'Peka terhadap penderitaan sesama, suka berbagi, bersahabat, dan siap menolong yang membutuhkan pertolongan.',
    icon: '🤝',
    aspect: 'Sosial & Empati',
  },
  {
    number: 6,
    title: 'Cinta Lingkungan Hidup',
    description: 'Aktif menjaga kebersihan, memilah sampah, merawat tanaman, dan menerapkan gaya hidup ramah lingkungan (Laudato Si).',
    icon: '🌿',
    aspect: 'Ekologi',
  },
  {
    number: 7,
    title: 'Cakap Digital & Beretika',
    description: 'Mampu memanfaatkan teknologi informasi dan perangkat digital untuk belajar secara bijak, aman, dan beretika.',
    icon: '💻',
    aspect: 'Teknologi',
  },
  {
    number: 8,
    title: 'Berjiwa Pemimpin Inklusif',
    description: 'Mampu bekerja sama dalam tim, menghargai keberagaman suku dan agama, serta siap menjadi teladan bagi lingkungan sekitar.',
    icon: '⭐',
    aspect: 'Kepemimpinan',
  },
];

// ─── Heritage & Spiritualitas SPM ──────────────────────────────────────────
export const HERITAGE_DATA: HeritageItem[] = [
  {
    id: 'maria-fatima',
    title: 'Santa Maria Fatima',
    subtitle: 'Pelindung dan Teladan Kasih Sekolah',
    summary: 'Penampakan Bunda Maria di Fatima mengajak umat beriman untuk berdoa Rosario, bertobat, dan menyebarkan damai bagi seluruh umat manusia.',
    content: [
      'SDK Maria Fatima Jember memilih Bunda Maria dari Fatima sebagai pelindung utama sejak didirikan. Spiritualitas Maria Fatima mengajarkan kepekaan hati seorang ibu yang senantiasa mengarahkan anak-anaknya kepada Yesus Kristus.',
      'Siswa-siswi dibimbing untuk mencintai doa, berani hidup murni, berkorban demi kebaikan bersama, dan memancarkan ketenangan serta kedamaian di tengah keluarga dan masyarakat.',
    ],
    icon: '👑',
    values: ['Ketaatan', 'Doa yang Hidup', 'Kedamaian Hati', 'Ketulusan'],
  },
  {
    id: 'spm',
    title: 'Pendidikan SPM Jember',
    subtitle: 'Pelayanan Pendidikan di Kabupaten Jember',
    summary: 'Pelayanan pendidikan bermutu dan berkarakter demi kemuliaan Allah dan kebaikan sesama di Kabupaten Jember.',
    content: [
      'Pelayanan pendidikan SPM hadir di Kabupaten Jember untuk mewujudkan pendidikan bermutu tinggi dan penuh kasih bagi masyarakat.',
      'Misi pendidikan berfokus pada pendidikan hati dan budi (Educating Heart & Mind), memastikan setiap anak menerima asuhan penuh kasih layaknya Bunda Maria merawat sang Putra.',
    ],
    icon: '⛪',
    values: ['Bela Rasa', 'Pelayanan Kasih', 'Kesederhanaan', 'Kemurnian Hidup'],
  },
  {
    id: 'st-julie-billiart',
    title: 'Santa Julie Billiart',
    subtitle: 'Teladan Kepercayaan Teguh pada Kebaikan Allah',
    summary: '"Betapa Baiknya Allah yang Mahabaik!" — Seruan iman Santa Julie Billiart yang menjadi jiwa dari semangat pembelajaran para suster SPM.',
    content: [
      'Santa Julie Billiart (1751–1816) mendedikasikan seluruh hidupnya untuk mendidik anak-anak, terutama mereka yang kurang beruntung, di tengah badai Revolusi Prancis.',
      'Ketabahan dan sukacitanya yang tak pernah padam mengajarkan para pendidik di SDK Maria Fatima untuk melihat benih kebaikan ilahi di dalam diri setiap siswa.',
    ],
    icon: '🌻',
    values: ['Kebaikan Allah', 'Sukacita Sejati', 'Kegigihan Iman', 'Keterbukaan Hati'],
  },
  {
    id: 'pater-matthias-wolff',
    title: 'Pater Matthias Wolff, SJ',
    subtitle: 'Pendiri Kongregasi Suster SPM',
    summary: 'Imam Yesuit yang visioner, penuh keberanian dan api kerasulan untuk mendirikan kongregasi pendidik wanita berdedikasi tinggi.',
    content: [
      'Pater Matthias Wolff, SJ (1779–1857) mendirikan Kongregasi Suster SPM di Belanda pada tahun 1822 dengan semboyan keberanian dan ketaatan tanpa syarat kepada kehendak Allah.',
      'Ia menanamkan semangat keberanian menghadapi tantangan zaman dengan keteguhan iman dan profesionalisme dalam karya pendidikan anak-anak.',
    ],
    icon: '✝️',
    values: ['Keberanian Misi', 'Disiplin Rohani', 'Keteguhan Tekad', 'Kerasulan Sejati'],
  },
  {
    id: 'sikaru',
    title: 'Nilai-Nilai SIKARU',
    subtitle: 'Fondasi Karakter Komunitas Pendidikan SPM',
    summary: 'Enam pilar karakter utama: Spiritualitas, Integritas, Kasih, Adil, Respek, dan Unggul yang diintegrasikan dalam seluruh proses KBM.',
    content: [
      'SIKARU bukan sekadar akronim, melainkan way of life bagi seluruh guru, karyawan, siswa, dan orang tua di SDK Maria Fatima Jember.',
      'Setiap aspek kurikulum, kegiatan ekstrakurikuler, dan interaksi harian dirancang untuk menumbuhkan keenam nilai ini secara harmonis dan mendalam.',
    ],
    icon: '💎',
    values: ['Spiritualitas', 'Integritas', 'Kasih', 'Adil', 'Respek', 'Unggul'],
  },
];

// ─── 5 Testimoni Alumni (Strictly matching PDF requirement: max 5 alumni @ 2 paragraf) ──
export const ALUMNI_TESTIMONIALS: AlumniTestimonial[] = [
  {
    id: 'alumni-1',
    name: 'dr. Maria Angela Santoso, Sp.A',
    batch: 'Alumni 2004',
    currentRole: 'Dokter Spesialis Anak di RSUD Dr. Soebandi Jember',
    photo: '/images/alumni/alumni-1.svg',
    headline: 'Fondasi Karakter dan Empati Terbentuk Sejak di SDK Maria Fatima',
    testimony: [
      'Masa-masa belajar di SDK Maria Fatima adalah fondasi terpenting dalam perjalanan hidup saya. Nilai-nilai kasih, kepedulian pada sesama, serta kedisiplinan yang ditanamkan para guru dan Suster bukan hanya sekadar hafalan teori, tetapi benar-benar dipraktikkan dalam kehidupan sehari-hari di sekolah.',
      'Kini sebagai dokter spesialis anak, saya menyadari bahwa kecerdasan kognitif harus selalu diimbangi dengan kehangatan hati dan rasa empati. Rasa percaya diri dan keteguhan iman yang saya peroleh di SDK Maria Fatima menjadi bekal tak ternilai dalam merawat pasien-pasien cilik saya setiap hari.',
    ],
  },
  {
    id: 'alumni-2',
    name: 'Benedictus Ryan Pratama, M.Sc.',
    batch: 'Alumni 2009',
    currentRole: 'Senior Software Engineer di Tech Unicorn & Peneliti AI',
    photo: '/images/alumni/alumni-2.svg',
    headline: 'Membuka Wawasan Logika dan Kreativitas Tanpa Batas',
    testimony: [
      'SDK Maria Fatima selalu memberikan ruang yang luas bagi rasa ingin tahu siswa. Sejak kelas 3 SD, saya sudah dikenalkan dengan logika matematika yang menyenangkan dan lingkungan perpustakaan yang sangat mendukung kegemaran saya bereksplorasi sains dan komputer.',
      'Para guru di sini memiliki dedikasi yang luar biasa dalam mendampingi bakat unik setiap anak. Lingkungan sekolah yang inklusif dan berakar pada nilai integritas telah membentuk saya menjadi profesional yang bertanggung jawab dan siap berkolaborasi di kancah industri teknologi global.',
    ],
  },
  {
    id: 'alumni-3',
    name: 'Clara Devina Putri, S.E., Ak.',
    batch: 'Alumni 2012',
    currentRole: 'Financial Consultant & Founder Social Enterprise Batik Jember',
    photo: '/images/alumni/alumni-3.svg',
    headline: 'Jiwa Kepemimpinan dan Semangat Berbela Rasa yang Mengakar',
    testimony: [
      'Kegiatan belajar di SDK Maria Fatima tidak hanya terfokus di dalam ruang kelas, tetapi juga aktif melalui kegiatan pramuka, paduan suara, dan aksi sosial nyata. Dari sinilah benih kepemimpinan, keberanian berbicara di depan publik, dan kepedulian terhadap warisan budaya lokal tertanam kuat.',
      'Nilai SIKARU yang diajarkan sejak dini terus menjadi kompas moral saya dalam mengelola bisnis berbasis pemberdayaan perajin lokal di Jember. Saya sangat bangga pernah menjadi bagian dari keluarga besar SDK Maria Fatima!',
    ],
  },
  {
    id: 'alumni-4',
    name: 'Ignatius Kevin Wijaya, S.T., B.Eng.',
    batch: 'Alumni 2015',
    currentRole: 'Graduate Researcher Mechanical Engineering di NTU Singapore',
    photo: '/images/alumni/alumni-4.svg',
    headline: 'Ketangguhan Akademik dan Disiplin Berstandar Unggul',
    testimony: [
      'Kebiasaan belajar terstruktur, budaya membaca yang kuat, dan bimbingan olimpiade sains di SDK Maria Fatima memberikan pijakan yang sangat kokoh bagi saya untuk melanjutkan studi ke jenjang SMP, SMA favorit, hingga bangku universitas di luar negeri.',
      'Yang paling saya syukuri adalah suasana kekeluargaan yang hangat dan bimbingan rohani yang mendalam. Hingga saat ini, doa dan nilai-nilai Santa Julie yang diajarkan para Suster selalu menjadi penguat di kala menghadapi tantangan riset yang berat.',
    ],
  },
  {
    id: 'alumni-5',
    name: 'Theresia Cindy Kurniawan, S.Pd.',
    batch: 'Alumni 2017',
    currentRole: 'Pendidik & Juara 1 Kompetisi Inovasi Pembelajaran Kreatif Nasional',
    photo: '/images/alumni/alumni-5.svg',
    headline: 'Terinspirasi oleh Sosok Guru-Guru Penuh Kasih dan Teladan Hidup',
    testimony: [
      'Pilihan saya untuk meniti karier di dunia pendidikan lahir dari kekaguman saya terhadap guru-guru di SDK Maria Fatima. Mereka tidak sekadar mengajar materi pelajaran, melainkan mendidik dengan hati, sabar mendengarkan, dan tulus menghargai setiap proses perkembangan muridnya.',
      'Sekolah ini adalah rumah kedua yang penuh kenangan manis dan kegembiraan belajar. Bagi para orang tua yang mencari sekolah dasar dengan pembinaan karakter unggul dan lingkungan yang ramah anak, SDK Maria Fatima adalah pilihan terbaik.',
    ],
  },
];

// ─── SDM / Staff Data (People Section) ──────────────────────────────────────
export const STAFF_DATA: StaffMember[] = [
  {
    id: 'kepala-sekolah',
    name: 'Sr. M. Cornelly, SPM, S.Pd., M.M.',
    role: 'Kepala Sekolah SDK Maria Fatima Jember',
    category: 'kepala_sekolah',
    photo: '/images/staff/kepala-sekolah.svg',
    education: 'Magister Manajemen Pendidikan — Universitas Sanata Dharma',
    quote: '"Mendidik tunas bangsa bukan hanya mengisi pikiran dengan ilmu pengetahuan, melainkan membentuk hati yang berbelas kasih dan beriman teguh pada Allah yang Mahabaik."',
    yearsOfService: '18 Tahun Pengabdian',
  },
  {
    id: 'guru-1',
    name: 'Yohanes Prasetyo, S.Pd.',
    role: 'Wali Kelas 1A & Pembina Paduan Suara',
    category: 'guru_kelas',
    subCategory: 'Kelas 1',
    photo: '/images/staff/guru-1.svg',
    education: 'S1 PGSD — Universitas Jember',
    yearsOfService: '9 Tahun Pengabdian',
  },
  {
    id: 'guru-2',
    name: 'Beatrix Natalia, S.Pd.',
    role: 'Wali Kelas 2B & Koordinator Literasi',
    category: 'guru_kelas',
    subCategory: 'Kelas 2',
    photo: '/images/staff/guru-2.svg',
    education: 'S1 PGSD — Universitas Negeri Malang',
    yearsOfService: '7 Tahun Pengabdian',
  },
  {
    id: 'guru-3',
    name: 'Felix Kristianto, S.Kom., S.Pd.',
    role: 'Guru TIK / Komputer & Multimedia',
    category: 'guru_bidang',
    subCategory: 'TIK & Robotik',
    photo: '/images/staff/guru-3.svg',
    education: 'S1 Informatika — Universitas Brawijaya',
    yearsOfService: '8 Tahun Pengabdian',
  },
  {
    id: 'guru-4',
    name: 'Theresia Endang, S.Pd.',
    role: 'Wali Kelas 4A & Pembina Sains Club',
    category: 'guru_kelas',
    subCategory: 'Kelas 4',
    photo: '/images/staff/guru-4.svg',
    education: 'S1 Pendidikan IPA — Universitas Sanata Dharma',
    yearsOfService: '12 Tahun Pengabdian',
  },
  {
    id: 'guru-5',
    name: 'Sr. M. Nicole, SPM, S.Ag.',
    role: 'Guru Pendidikan Agama Katolik & Budi Pekerti',
    category: 'guru_bidang',
    subCategory: 'Agama & Spiritualitas',
    photo: '/images/staff/guru-5.svg',
    education: 'S1 Ilmu Teologi & Kateketik — STFT Widya Sasana',
    yearsOfService: '15 Tahun Pengabdian',
  },
  {
    id: 'guru-6',
    name: 'Michael Andreas, S.Pd.',
    role: 'Guru PJOK & Pembina Olahraga Prestasi',
    category: 'guru_bidang',
    subCategory: 'Olahraga & Kesehatan',
    photo: '/images/staff/guru-6.svg',
    education: 'S1 Pendidikan Kepelatihan Olahraga — UNY',
    yearsOfService: '6 Tahun Pengabdian',
  },
  {
    id: 'staf-1',
    name: 'Agnes Sri Wahyuni, A.Md.',
    role: 'Kepala Tata Usaha & Layanan Informasi SPMB',
    category: 'karyawan',
    subCategory: 'Tata Usaha',
    photo: '/images/staff/staf-1.svg',
    education: 'D3 Administrasi Perkantoran',
    yearsOfService: '14 Tahun Pengabdian',
  },
  {
    id: 'staf-2',
    name: 'Antonius Bambang',
    role: 'Kepala Perpustakaan & Laboratorium Multimedia',
    category: 'karyawan',
    subCategory: 'Perpustakaan',
    photo: '/images/staff/staf-2.svg',
    education: 'S1 Ilmu Perpustakaan',
    yearsOfService: '10 Tahun Pengabdian',
  },
];

// ─── Classroom Level Data (Aktivitas KBM Kelas 1 - 6) ──────────────────────
export const CLASSROOM_LEVELS: ClassroomLevel[] = [
  {
    grade: 1,
    title: 'Kelas 1 — Fondasi & Adaptasi Belajar Ceria',
    theme: 'Membangun Karakter, Kemandirian, dan Keceriaan Belajar',
    focus: 'Transisi PAUD ke SD yang menyenangkan, penguatan fondasi membaca-menulis-berhitung (calistung) kontekstual, serta pembiasaan doa harian dan tata krama.',
    highlights: [
      'Phonics & Bahasa Indonesia Interaktif',
      'Matematika Konkret (Manipulative Math)',
      'Pembiasaan Disiplin Diri & Merapikan Barang',
      'Pengenalan Doa Bapa Kami & Salam Maria',
    ],
    activities: [
      'Cooking Day & Practical Life Skills',
      'Storytelling & Drama Boneka Karakter',
      'Pekan Pengenalan Lingkungan Belajar Sahabat',
    ],
    image: '/images/classroom/kelas-1.svg',
  },
  {
    grade: 2,
    title: 'Kelas 2 — Eksplorasi & Literasi Dini',
    theme: 'Menumbuhkan Rasa Ingin Tahu dan Kebiasaan Membaca',
    focus: 'Pengembangan literasi bertahap, pemahaman konsep numerasi tingkat lanjut, observasi alam sekitar, dan penanaman rasa empati kepada teman.',
    highlights: [
      'Pojok Baca & Jurnal Refleksi Bergambar',
      'Eksperimen Sains Sederhana di Kebun Sekolah',
      'Bahasa Inggris Tematik (Songs & Games)',
      'Seni Rupa & Kerajinan Tangan Kreatif',
    ],
    activities: [
      'Kunjungan Edukasi Flora & Fauna Lokal',
      'Festival Dongeng Anak Cilik',
      'Proyek Menanam Benih Sayuran Organik',
    ],
    image: '/images/classroom/kelas-2.svg',
  },
  {
    grade: 3,
    title: 'Kelas 3 — Kolaborasi & Logika Berpikir',
    theme: 'Belajar Bekerja Sama dan Memahami Keberagaman',
    focus: 'Mulai pembelajaran berbasis kelompok, pemecahan masalah matematika kontekstual, pemahaman sosial budaya Indonesia, dan dasar-dasar TIK.',
    highlights: [
      'Proyek Kolaboratif Kelompok Kecil',
      'Pengenalan Dasar Komputer & Coding Anak',
      'Pembelajaran Nilai-Nilai Luhur Pancasila & SIKARU',
      'Paduan Suara & Ansambel Musik Rekorder',
    ],
    activities: [
      'Pekan Budaya & Pakaian Nusantara',
      'Science Fair Eksperimen Air & Udara',
      'Bakti Sosial Berbagi untuk Sesama',
    ],
    image: '/images/classroom/kelas-3.svg',
  },
  {
    grade: 4,
    title: 'Kelas 4 — Berpikir Kritis & Penguatan Karakter',
    theme: 'Mendalami Analisis, Tanggung Jawab, dan Kemandirian Belajar',
    focus: 'Pembelajaran Proyek Penguatan Profil Pelajar Pancasila (P5), integrasi sains terapan, literasi digital yang aman, dan pengenalan kepramukaan siaga.',
    highlights: [
      'Pembelajaran Berbasis Masalah (Problem-Based Learning)',
      'Eksplorasi Laboratorium Komputer & Internet Sehat',
      'Klub Olimpiade Matematika & Sains Tingkat Dasar',
      'Kepanitiaan Mini Acara Kelas',
    ],
    activities: [
      'Field Trip Observasi Ekosistem di Jember',
      'Pameran Karya Daur Ulang P5',
      'Kompetisi Debat & Pidato Cilik',
    ],
    image: '/images/classroom/kelas-4.svg',
  },
  {
    grade: 5,
    title: 'Kelas 5 — Kepemimpinan & Inovasi Digital',
    theme: 'Menjadi Teladan, Berprestasi, dan Berwawasan Global',
    focus: 'Persiapan asesmen nasional (ANBK), pemantapan riset mandiri mini, kepemimpinan kepramukaan penggalang, serta kemampuan komunikasi bahasa Inggris.',
    highlights: [
      'Simulasi Asesmen Nasional Berbasis Komputer (ANBK)',
      'English Presentation & Public Speaking Club',
      'Riset Mini Sains & Lingkungan Berkelanjutan',
      'Pembinaan Khusus Lomba Akademik & Seni',
    ],
    activities: [
      'Retret Pembinaan Rohani Anak & Doa Bersama',
      'Perkemahan Pramuka Penggalang Ramah Lingkungan',
      'Kunjungan Industri Kreatif & UMKM Edukatif',
    ],
    image: '/images/classroom/kelas-5.svg',
  },
  {
    grade: 6,
    title: 'Kelas 6 — Kelulusan Unggul & Kesiapan Masa Depan',
    theme: 'Mematangkan Prestasi, Kepribadian Matang, dan Sukses Ujian Akhir',
    focus: 'Pemantapan materi akademik kelulusan, bimbingan konseling kesiapan jenjang SMP, pembinaan kepemimpinan luhur, dan pengukuhan 8 Profil Lulusan.',
    highlights: [
      'Bimbingan Intensif Kelulusan & Sukses Masuk SMP Unggulan',
      'Ujian Praktik Terpadu (Sains, Bahasa, Seni, Agama)',
      'Penyusunan Portofolio Prestasi Murid',
      'Proyek Akhir Karya Inspiratif Siswa',
    ],
    activities: [
      'Live-In Bakti Sosial Komunitas',
      'Wisuda Kelulusan & Pelepasan Siswa Kelas 6',
      'Graduation Showcase & Pentas Seni Akbar',
    ],
    image: '/images/classroom/kelas-6.svg',
  },
];

// ─── Media Items (Mars SDK, Jingle UKB, Galeri, Video) ─────────────────────
export const SONG_TRACKS: SongTrack[] = [
  {
    id: 'mars-sdk',
    title: 'Mars SDK Maria Fatima Jember',
    composer: 'Keluarga Besar SDK Maria Fatima / Kongregasi SPM',
    category: 'mars',
    audioUrl: '/audio/mars-sdk-maria-fatima.mp3',
    duration: '2:45',
    description: 'Lagu kebanggaan yang mengobarkan semangat belajar, kesetiaan pada iman, dan dedikasi mengabdi nusa serta bangsa.',
    lyrics: [
      'Di kota Jember yang permai indah',
      'Berdiri megah SDK Maria Fatima',
      'Tempat bersemi tunas bangsa mulia',
      'Menuntut ilmu membentuk budi pekerti',
      '',
      'Reff:',
      'Maju serentak langkah berpadu',
      'Bunda Maria pelindung hidup kita',
      'Cerdas berilmu, bertakwa pada Tuhan',
      'Menjadi suluh penerang sesama',
      '',
      'Dengan semangat Santa Julie nan tabah',
      'Menyala api cinta kasih SPM',
      'Jayalah selalu SDK Maria Fatima',
      'Tumpuan harapan bagi nusa dan bangsa!',
    ],
  },
  {
    id: 'jingle-ukb',
    title: 'Jingle UKB (Unit Kegiatan Belajar)',
    composer: 'Tim Kreatif Pembelajaran SDK Maria Fatima',
    category: 'jingle',
    audioUrl: '/audio/jingle-ukb.mp3',
    duration: '1:30',
    description: 'Jingle penyemangat pembelajaran aktif, mandiri, dan berkarakter dalam setiap modul Unit Kegiatan Belajar.',
    lyrics: [
      'Ayo kawan kita melangkah pasti',
      'Belajar ceria bersama UKB',
      'Eksplorasi dunia, temukan makna',
      'Kreatif mandiri raih cita bersama',
      '',
      'Reff:',
      'UKB Maria Fatima, asyik dan bermakna!',
      'Belajar sungguh-sungguh, berprestasi nyata!',
      'Mari wujudkan generasi unggul bercahaya!',
    ],
  },
];

// ─── Instagram Feeds & Reels (@sdkmariafatimajbr) ───────────────────────────
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "DcuxHlRzQth",
    caption: "🌱🧹 BERSIH LINGKUNGAN, BERSIH HATI, SEHAT DAN NYAMAN! ✨\n\nHari ini, Selasa, 1 September 2026, siswa-siswi SDK Maria Fatima Jember kembali bergerak bersama dalam kegiatan Bersih Lingkungan. 🧹🌿\n\nBukan sekadar membersihkan halaman sekolah, t...",
    likes: 4,
    comments: 0,
    imageUrl: "/images/instagram/post-1.jpg",
    type: "post",
    date: "August 31, 2026",
    link: "https://www.instagram.com/p/DcuxHlRzQth/"
  },
  {
    id: "DcuwrBND_gz",
    caption: "🏆✨ TIGA PRESTASI, SATU SEMANGAT UNTUK TERUS BERSINAR! ✨🏆\n\nSelamat dan apresiasi setinggi-tingginya untuk siswa-siswi SDK Maria Fatima Jember yang telah mengukir prestasi dan membawa semangat Unggul, Kasih, Bermartabat! 🌟\n\n👏 Jiselle Crys...",
    likes: 8,
    comments: 0,
    imageUrl: "/images/instagram/post-2.jpg",
    type: "post",
    date: "August 31, 2026",
    link: "https://www.instagram.com/p/DcuwrBND_gz/"
  },
  {
    id: "DciW6XLj0a9",
    caption: "Apresiasi Prestasi Siswa SDK Maria Fatima Jember — Teruslah bertumbuh dan berprestasi seturut nilai Unggul, Kasih, dan Bermartabat!",
    likes: 5,
    comments: 0,
    imageUrl: "/images/instagram/post-3.jpg",
    type: "post",
    date: "August 27, 2026",
    link: "https://www.instagram.com/p/DciW6XLj0a9/"
  },
  {
    id: "DcTOKS-PosK",
    caption: "🚫💙 BERSAMA CEGAH BULLYING, WUJUDKAN SEKOLAH YANG AMAN DAN NYAMAN! 💙🚫\n\nHari ini, siswa-siswi SDK Maria Fatima kelas 1–6 mengikuti kegiatan Edukasi Anti Bullying bersama Polres Jember. 👮‍♀️👮‍♂️✨\n\nMelalui kegiatan ini, anak-anak diajak u...",
    likes: 3,
    comments: 0,
    imageUrl: "/images/instagram/post-4.jpg",
    type: "reel",
    date: "August 21, 2026",
    link: "https://www.instagram.com/reel/DcTOKS-PosK/"
  }
];

// ─── Format helpers ───────────────────────────────────────────────────────
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day:   'numeric',
    month: 'short',
    year:  'numeric',
  }).format(date);
}

export function relativeTime(date: Date): string {
  const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' });
  const diff = Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  if (Math.abs(diff) < 1)  return 'Hari ini';
  if (Math.abs(diff) < 7)  return rtf.format(diff, 'day');
  if (Math.abs(diff) < 30) return rtf.format(Math.round(diff / 7), 'week');
  if (Math.abs(diff) < 365) return rtf.format(Math.round(diff / 30), 'month');
  return rtf.format(Math.round(diff / 365), 'year');
}

export const KATEGORI_COLORS: Record<string, string> = {
  'Akademik':    'badge-blue',
  'Kegiatan':    'badge-green',
  'Prestasi':    'badge-gold',
  'Pengumuman':  'badge-blue',
  'Spiritual':   'badge-blue',
  'Artikel':     'badge-green',
  'Berita':      'badge-blue',
  'SPMB':        'badge-gold',
  'PPDB':        'badge-gold',
};

/** Map agenda status to badge config */
export function getAgendaStatusBadge(status: string): { label: string; class: string } {
  const map: Record<string, { label: string; class: string }> = {
    upcoming:  { label: 'Akan Datang', class: 'badge-blue' },
    ongoing:   { label: 'Sedang Berlangsung', class: 'badge-green' },
    completed: { label: 'Selesai', class: 'badge-gold' },
  };
  return map[status] ?? map['upcoming'];
}

