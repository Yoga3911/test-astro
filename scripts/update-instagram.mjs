/**
 * Script Otomatis Pembaruan Postingan Instagram SDK Maria Fatima
 *
 * Penggunaan:
 * node scripts/update-instagram.mjs <url1> <url2> <url3> <url4>
 *
 * Contoh:
 * node scripts/update-instagram.mjs \
 *   "https://www.instagram.com/p/DcuxHlRzQth/" \
 *   "https://www.instagram.com/p/DcuwrBND_gz/" \
 *   "https://www.instagram.com/p/DciW6XLj0a9/" \
 *   "https://www.instagram.com/reel/DcTOKS-PosK/"
 */

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2).filter(arg => arg.startsWith('http'));

if (args.length === 0) {
  console.log(`
Petunjuk Penggunaan:
node scripts/update-instagram.mjs <url1> <url2> <url3> <url4>

Contoh:
node scripts/update-instagram.mjs \\
  "https://www.instagram.com/p/DcuxHlRzQth/" \\
  "https://www.instagram.com/p/DcuwrBND_gz/" \\
  "https://www.instagram.com/p/DciW6XLj0a9/" \\
  "https://www.instagram.com/reel/DcTOKS-PosK/"
`);
  process.exit(0);
}

const imagesDir = path.resolve('public/images/instagram');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log(`\nMemproses ${args.length} link Instagram...\n`);

const results = [];

for (let i = 0; i < args.length; i++) {
  const rawUrl = args[i];
  const cleanUrl = rawUrl.split('?')[0].replace(/\/+$/, '') + '/';
  const isReel = cleanUrl.includes('/reel/');
  const idMatch = cleanUrl.match(/\/(?:p|reel)\/([^/]+)/);
  const postId = idMatch ? idMatch[1] : `ig-${i + 1}`;

  console.log(`[${i + 1}/${args.length}] Mengambil OpenGraph preview: ${cleanUrl}`);

  try {
    const res = await fetch(cleanUrl, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
      },
    });

    const html = await res.text();

    let imgUrl =
      html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ||
      html.match(/<meta property="twitter:image" content="([^"]+)"/)?.[1] ||
      html.match(/content="([^"]+)" property="og:image"/)?.[1];

    let title =
      html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ||
      html.match(/content="([^"]+)" property="og:title"/)?.[1] || '';

    let desc =
      html.match(/<meta property="og:description" content="([^"]+)"/)?.[1] ||
      html.match(/content="([^"]+)" property="og:description"/)?.[1] || '';

    function decodeEntities(str) {
      return str
        .replace(/&#x([0-9a-f]+);/gi, (_, code) => {
          try { return String.fromCodePoint(parseInt(code, 16)); } catch { return ''; }
        })
        .replace(/&#(\d+);/g, (_, code) => {
          try { return String.fromCodePoint(parseInt(code, 10)); } catch { return ''; }
        })
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#064;/g, '@');
    }

    title = decodeEntities(title);
    desc = decodeEntities(desc);

    // Extract cleaner caption preview
    let caption = '';
    const quoteMatch = title.match(/"([^"]+)"/) || desc.match(/"([^"]+)"/);
    if (quoteMatch) {
      caption = quoteMatch[1].trim();
    } else {
      caption = desc || title || '';
    }

    if (caption.includes('likes, ') || caption.length < 10) {
      caption = 'Apresiasi Prestasi Siswa SDK Maria Fatima Jember — Teruslah bertumbuh dan berprestasi seturut nilai Unggul, Kasih, dan Bermartabat!';
    }

    // Extract likes count if available
    let likes = 0;
    const likesMatch = desc.match(/([\d,]+)\s+likes/i);
    if (likesMatch) {
      likes = parseInt(likesMatch[1].replace(/,/g, ''), 10);
    }

    // Extract date if available
    let date = 'Baru saja';
    const dateMatch = desc.match(/pada\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/i) || desc.match(/on\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/i);
    if (dateMatch) {
      date = dateMatch[1];
    }

    const localFileName = `post-${i + 1}.jpg`;
    const localFilePath = path.join(imagesDir, localFileName);

    if (imgUrl) {
      imgUrl = imgUrl.replace(/&amp;/g, '&');
      console.log(`   -> Mengunduh gambar ke: public/images/instagram/${localFileName}`);
      const imgRes = await fetch(imgUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync(localFilePath, buffer);
    }

    results.push({
      id: postId,
      caption: caption.slice(0, 240) + (caption.length > 240 ? '...' : ''),
      likes,
      comments: 0,
      imageUrl: `/images/instagram/${localFileName}`,
      type: isReel ? 'reel' : 'post',
      date,
      link: cleanUrl,
    });

    console.log(`   -> Berhasil! (${isReel ? 'Reel' : 'Post'})\n`);
  } catch (err) {
    console.error(`   -> Gagal memproses ${cleanUrl}:`, err.message);
  }
}

if (results.length > 0) {
  // Update src/utils/config.ts
  const configPath = path.resolve('src/utils/config.ts');
  let configContent = fs.readFileSync(configPath, 'utf8');

  const startMarker = 'export const INSTAGRAM_POSTS: InstagramPost[] = [';
  const endMarker = '];';

  const startIndex = configContent.indexOf(startMarker);
  if (startIndex !== -1) {
    const afterStart = configContent.indexOf(endMarker, startIndex);
    if (afterStart !== -1) {
      const formattedPosts = JSON.stringify(results, null, 2)
        .replace(/"id":/g, 'id:')
        .replace(/"caption":/g, 'caption:')
        .replace(/"likes":/g, 'likes:')
        .replace(/"comments":/g, 'comments:')
        .replace(/"imageUrl":/g, 'imageUrl:')
        .replace(/"type":/g, 'type:')
        .replace(/"date":/g, 'date:')
        .replace(/"link":/g, 'link:');

      const replacement = `export const INSTAGRAM_POSTS: InstagramPost[] = ${formattedPosts};`;
      const before = configContent.substring(0, startIndex);
      const after = configContent.substring(afterStart + endMarker.length);
      fs.writeFileSync(configPath, before + replacement + after, 'utf8');
      console.log('✅ File src/utils/config.ts berhasil diperbarui dengan data Instagram terbaru!');
    }
  }
}
