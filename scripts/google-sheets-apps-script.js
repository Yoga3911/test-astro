/**
 * Google Apps Script untuk Menghubungkan Form Pendaftaran Website ke Google Spreadsheet
 * SDK Maria Fatima Jember
 *
 * CARA PAKAI:
 * 1. Buka Google Spreadsheet Anda (buat sheet baru).
 * 2. Klik menu "Ekstensi" (Extensions) > "Apps Script".
 * 3. Hapus kode default, lalu salin (paste) seluruh kode di bawah ini.
 * 4. Klik tombol "Simpan" (ikon disket).
 * 5. Klik tombol "Terapkan" (Deploy) > "Penerapan baru" (New deployment).
 * 6. Pilih jenis: "Aplikasi web" (Web app).
 * 7. Konfigurasi:
 *    - Deskripsi: "Webhook Form SPMB SDK Maria Fatima"
 *    - Jalankan sebagai (Execute as): "Saya" (Me - email akun Google Anda)
 *    - Siapa yang memiliki akses (Who has access): "Siapa saja" (Anyone) -> SANGAT PENTING!
 * 8. Klik "Terapkan" (Deploy), lalu setujui izin akses akun Google Anda.
 * 9. Salin "URL Aplikasi Web" (Web app URL) yang berakhiran `/exec`.
 * 10. Masukkan URL tersebut ke file `.env` di proyek:
 *     PUBLIC_SPMB_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
 */

function setupHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    var headers = [
      'No',
      'Waktu Pendaftaran',
      'Nama Lengkap',
      'Alamat',
      'No. Telepon (WA)',
      'Asal Sekolah',
      'Alamat Sekolah',
      'Status'
    ];
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1e3a8a'); // Navy Blue
    headerRange.setFontColor('#ffffff'); // White text
    headerRange.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Tunggu lock hingga 10 detik untuk menghindari tabrakan data jika disubmit bersamaan
  lock.tryLock(10000);

  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();

    // Pastikan baris header sudah ada
    setupHeaders(sheet);

    // Ambil data kiriman baik dari form-urlencoded maupun JSON
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var nama = data.nama || data.name || '-';
    var alamat = data.alamat || data.address || '-';
    var telepon = data.telepon || data.no_wa || data.phone || '-';
    var asalSekolah = data.asalSekolah || data.asal_sekolah || '-';
    var alamatSekolah = data.alamatSekolah || data.alamat_sekolah || '-';

    // Format tanggal Indonesia (WIB)
    var timestamp = Utilities.formatDate(
      new Date(),
      'Asia/Jakarta',
      'dd/MM/yyyy HH:mm:ss'
    );

    var nextRow = sheet.getLastRow() + 1;
    var rowNumber = nextRow - 1; // Nomor urut data (baris 1 adalah header)

    // Tulis baris baru
    sheet.appendRow([
      rowNumber,
      timestamp,
      nama,
      alamat,
      "'" + telepon, // Prefix tanda petik satu agar nomor 08xxx tidak berubah jadi format angka ilmiah
      asalSekolah,
      alamatSekolah,
      'Baru'
    ]);

    // Beri format border dan alignment agar rapi
    var dataRange = sheet.getRange(nextRow, 1, 1, 8);
    dataRange.setVerticalAlignment('middle');

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Data pendaftaran berhasil dicatat ke Google Spreadsheet',
        row: nextRow,
        data: {
          nama: nama,
          timestamp: timestamp
        }
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Untuk tes koneksi melalui browser (GET)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      message: 'API Webhook Pendaftaran SDK Maria Fatima Jember aktif dan siap menerima data POST.'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
