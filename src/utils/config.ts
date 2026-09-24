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
  url:         'https://sdkmarfatjember.sch.id',
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
      { label: 'Sejarah SDK', href: '/about-us#sejarah-sdk' },
      { label: 'Visi, Misi & Profil Lulusan', href: '/about-us#visi-misi-profil-lulusan' },
      { label: 'Core Value (UKB)', href: '/about-us#core-value-ukb' },
    ],
  },
  {
    label: 'Heritage',
    href: '/heritage',
    children: [
      { label: 'SPM', href: '/heritage#spm' },
      { label: 'JULIE BILLIART', href: '/heritage#julie-billiart' },
      { label: 'PATER MATTIAS WOLF', href: '/heritage#pater-mattias-wolf' },
      { label: 'Tota Christi Per Mariam', href: '/heritage#tota-christi' },
      { label: 'SIKARU', href: '/heritage#sikaru' },
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
  },
];

// ─── SPMB / Pendaftaran Online Form Configuration ───────────────────────────
export const SPMB_FORM_CONFIG = {
  // Webhook URL Google Apps Script yang terhubung ke Google Spreadsheet
  googleScriptUrl:
    (import.meta.env.PUBLIC_SPMB_GOOGLE_SCRIPT_URL as string) ||
    'https://script.google.com/macros/s/AKfycbyJppWD_At6WuTGQMT28AarHL1tM7Idpk60BRb0Md1LkqUfqzu2G775LDJhIbR857lF/exec',
  // Nomor WhatsApp Admin penerima konfirmasi pendaftaran
  whatsappAdmin: '6281358977450',
};

// ─── School Statistics ────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: 65,   suffix: '+', label: 'Tahun Melayani',  icon: '🏫' },
  { value: 680,  suffix: '+', label: 'Siswa Aktif',     icon: '🎒' },
  { value: 42,   suffix: '+', label: 'Guru & Karyawan', icon: '👩‍🏫' },
  { value: 150,  suffix: '+', label: 'Prestasi Juara',  icon: '🏆' },
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

// ─── Testimoni Alumni Pilihan (Data Terverifikasi dari Spreadsheet Jawaban Alumni) ──
export const ALUMNI_TESTIMONIALS: AlumniTestimonial[] = [
  {
    id: 'alumni-1',
    name: 'Raymond R. Tjandrawinata',
    batch: 'Alumni 1970',
    currentRole: 'Professor di Unika Atma Jaya, Jakarta',
    photo: '/images/alumni/alumni-raymond.jpg',
    headline: 'Jejak Kasih dan Kepedulian Para Guru Legendaris Selalu Melekat dalam Ingatan',
    testimony: [
      'Di sinilah kami bertumbuh dari nol, belajar membaca dan menulis, mengenal disiplin, persahabatan, juga perlahan memahami arti kehidupan sampai akhirnya lulus dan melangkah menuju dunia yang lebih luas. Yang masih sangat membekas dalam ingatan saya adalah para guru kami yang sungguh legendaris di Jember pada masanya, bukan hanya karena cara mereka mengajar, tetapi terutama karena kepedulian tulus mereka kepada setiap murid.',
      'Waktu telah membawa kami jauh dari bangku-bangku kelas SDK Maria Fatima Jember, tetapi perhatian seorang guru kepada muridnya ternyata dapat tinggal sangat lama dalam ingatan. Terima kasih SDK Maria Fatima Jember, di tempat inilah sebagian kecil dari siapa kami hari ini dahulu mulai dibentuk.',
    ],
  },
  {
    id: 'alumni-2',
    name: 'Prof. Dr. apt. Lannie Hadisoewignyo, S.Si., M.Si.',
    batch: 'Alumni 1983',
    currentRole: 'Guru Besar / Dosen di Universitas Katolik Widya Mandala Surabaya',
    photo: '/images/alumni/alumni-lannie.jpg',
    headline: 'Membentuk Karakter Unggul untuk Siap Menghadapi Tantangan Zaman',
    testimony: [
      'SDK Maria Fatima menjadi wahana pendidikan yang tidak hanya membekali siswa dengan ilmu pengetahuan semata, tetapi yang tidak kalah penting adalah membentuk siswa untuk memiliki karakter tangguh yang siap menghadapi kondisi lingkungan dan tantangan masa kini.',
      'Fondasi moral dan integritas yang ditanamkan sejak dini menjadi bekal berharga dalam berkarya di dunia pendidikan tinggi. Semoga SDK Maria Fatima terus berkembang dan melahirkan generasi berkarakter luhur. God bless!',
    ],
  },
  {
    id: 'alumni-3',
    name: 'Aloysius Septian Christiarso',
    batch: 'Alumni 1995',
    currentRole: 'Head of Region Sulawesi Mentari Groups Indonesia',
    photo: '/images/alumni/alumni-aloysius.jpg',
    headline: 'Generasi Berkualitas Tinggi, Berintegritas, dan Mampu Bersaing Global',
    testimony: [
      'Pendidikan dasar di SDK Maria Fatima menanamkan kedisiplinan dan nilai-nilai moral yang sangat kuat. Proses belajar yang mengedepankan pembentukan budi pekerti menjadi modal penting dalam memimpin dan berkarier di tingkat nasional.',
      'Harapan saya, SDK Maria Fatima terus bertumbuh menjadi pencetak generasi penerus bangsa yang memiliki kompetensi berkualitas tinggi, berintegritas, berkarakter baik, dan mampu bersaing dengan SDM negara-negara terkemuka di dunia.',
    ],
  },
  {
    id: 'alumni-4',
    name: 'dr. Nadya Adi Kusuma, Sp.OG',
    batch: 'Alumni 1990',
    currentRole: 'Dokter Spesialis Obstetri & Ginekologi (Obgyn)',
    photo: '/images/alumni/alumni-nadya.jpg',
    headline: 'Pendidikan Penuh Kasih yang Membentuk Siapa Saya Hari Ini',
    testimony: [
      'Tiga puluh enam tahun yang lalu, melangkah menuju bangku SDK Maria Fatima adalah awal mula pembentukan diri saya. Terima kasih tak terhingga untuk hari-hari penuh keteladanan dan pendidikan berharga yang dulu diberikan oleh bapak dan ibu guru tercinta. Tanpa kalian, tidak ada saya yang hari ini.',
      'Nilai kasih dan empati yang diwariskan para pendidik menjadi pedoman hidup dalam melayani masyarakat dan pasien setiap hari. Semoga Tuhan senantiasa menjaga dan memberkati para guru tercinta. Berkah Dalem.',
    ],
  },
  {
    id: 'alumni-5',
    name: 'Widjanarko Eko Djatmiko Adi',
    batch: 'Alumni 1995',
    currentRole: 'VP of Engineering',
    photo: '/images/alumni/alumni-widjanarko.jpg',
    headline: 'Menghidupi Semangat Kasih Melalui Keteladanan Bunda Maria',
    testimony: [
      'Budaya sekolah di SDK Maria Fatima menanamkan dasar kecerdasan analitis dan kejujuran yang sangat krusial dalam dunia rekayasa teknologi dan kepemimpinan industri.',
      'Pesan saya untuk seluruh tunas muda dan almamater: tetap hidup dalam semangat seutuhnya milik Kristus melalui teladan kasih dan kesetiaan Bunda Maria dalam setiap langkah dan karya kita.',
    ],
  },
  {
    id: 'alumni-6',
    name: 'drg. Maria Devitha, Sp.Ort',
    batch: 'Alumni 2005',
    currentRole: 'Dokter Gigi Spesialis Ortodonsia',
    photo: '/images/alumni/alumni-devitha.jpg',
    headline: 'Kedisiplinan yang Melekat Erat dan Suasana Belajar yang Hangat',
    testimony: [
      'Saya sangat senang bersekolah di SDK Maria Fatima. Saya mendapatkan banyak pengalaman berharga baik akademik maupun non-akademik, bimbingan guru-guru yang telaten dan hangat dalam mengajar, kedisiplinan yang konsisten dijalankan, serta suasana sekolah yang aman dan menyenangkan.',
      'Karakter yang ditanamkan dalam diri siswa melekat erat sampai dewasa, terutama dalam hal kedisiplinan dan dedikasi. Semoga SDK Maria Fatima terus bertumbuh semakin baik lagi dan senantiasa menjadi sekolah dasar terbaik di Jember yang mampu mengikuti perkembangan zaman.',
    ],
  },
  {
    id: 'alumni-7',
    name: 'Dony Satria Angrita Rushardianto',
    batch: 'Alumni 1999',
    currentRole: 'Manager Engineering di Perusahaan Otomotif Astra Group',
    photo: '/images/alumni/alumni-dony.png',
    headline: 'Fondasi Karakter Dasar dan Komitmen Berbagi bagi Sesama',
    testimony: [
      'Pendidikan di SD merupakan dasar pendidikan utama yang saya dapatkan selain dari keluarga. Harapannya ke depan, SDK Maria Fatima tetap memberikan pendidikan terbaik bagi generasi penerus dengan mengikuti perkembangan zaman tanpa menghilangkan nilai-nilai inti dari sekolah ini.',
      'Saya juga sangat mengapresiasi perhatian sekolah dalam memberikan kesempatan dan bantuan bagi siswa yang membutuhkan, karena kebaikan tersebut akan berbuah dan menjadi inspirasi bagi mereka untuk membalas budi dan menolong sesama di masa depan.',
    ],
  },
  {
    id: 'alumni-8',
    name: 'drh. Henny Ratna Hutomo',
    batch: 'Alumni 1999',
    currentRole: 'Dokter Hewan',
    photo: '/images/alumni/alumni-henny.jpg',
    headline: 'Pilihan Pendidikan Terbaik Kepercayaan Keluarga Lintas Generasi',
    testimony: [
      'SDK Maria Fatima telah menjadi bagian tak terpisahkan dari keluarga besar kami. Kualitas pendidikan, rasa kekeluargaan, serta bimbingan budi pekerti yang kuat membuat keluarga kami selalu mempercayakan pendidikan dasar di sekolah ini, di mana adik-adik dan keponakan saya semuanya bersekolah di sini.',
      'Semoga SDK Maria Fatima semakin berkembang, selalu berinovasi dalam pembelajaran, dan tetap menjadi rumah kedua yang penuh kasih bagi setiap anak didiknya.',
    ],
  },
  {
    id: 'alumni-9',
    name: 'Cindy Gloria',
    batch: 'Alumni 1999',
    currentRole: 'Pegawai BUMN',
    photo: '/images/alumni/alumni-cindy.jpg',
    headline: 'Menjaga Nilai Kedisiplinan, Kejujuran, dan Karakter yang Luhur',
    testimony: [
      'Bimbingan para guru di SDK Maria Fatima membentuk cara kami bertindak dengan penuh rasa tanggung jawab dan kejujuran. Nilai-nilai ini menjadi landasan moral yang sangat kokoh dalam menjalankan amanah profesional sehari-hari.',
      'Harapan saya, semoga SDK Maria Fatima terus berkembang lebih baik mengikuti perkembangan zaman, dengan tetap mempertahankan ciri khas unggulannya yaitu kedisiplinan, kejujuran, dan pembinaan karakter anak bangsa.',
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

