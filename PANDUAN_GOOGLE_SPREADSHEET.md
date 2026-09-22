# Panduan Menghubungkan Formulir Pendaftaran ke Google Spreadsheet

Formulir pendaftaran (Admission / SPMB) di website SDK Maria Fatima Jember dirancang untuk langsung mengirimkan data calon murid baru ke Google Spreadsheet secara real-time.

---

## Langkah 1: Buat Google Spreadsheet Baru
1. Buka [Google Sheets](https://sheets.google.com).
2. Buat spreadsheet baru, beri nama misalnya:  
   **"Data Pendaftaran SPMB SDK Maria Fatima"**.

---

## Langkah 2: Pasang Skrip Otomatisasi (Google Apps Script)
1. Pada Google Spreadsheet tersebut, klik menu **Ekstensi** (*Extensions*) > **Apps Script**.
2. Hapus seluruh kode bawaan yang ada di editor.
3. Buka file `scripts/google-sheets-apps-script.js` di proyek ini, lalu **salin (copy)** seluruh kodenya dan **tempel (paste)** ke editor Apps Script.
4. Klik tombol **Simpan** (ikon disket) atau tekan `Ctrl + S` / `Cmd + S`.

---

## Langkah 3: Deploy sebagai Aplikasi Web (Web App)
1. Klik tombol biru **Terapkan** (*Deploy*) di pojok kanan atas > pilih **Penerapan baru** (*New deployment*).
2. Klik ikon gerigi (⚙️) di sebelah kiri tulisan *"Select type"*, lalu pilih **Aplikasi web** (*Web app*).
3. Isi kolom konfigurasi berikut:
   - **Deskripsi** (*Description*): `Webhook Form SPMB SDK Maria Fatima`
   - **Jalankan sebagai** (*Execute as*): **Saya** (*Me* - email akun Google Anda)
   - **Siapa yang memiliki akses** (*Who has access*): **Siapa saja** (*Anyone*) ⚠️ *(Penting: pilih Anyone agar pengunjung web bisa mengirim data form)*.
4. Klik tombol **Terapkan** (*Deploy*).
5. Jika muncul jendela izin akses (*Authorization required*):
   - Klik **Review permissions** / **Beri akses**.
   - Pilih akun Google Anda.
   - Jika muncul peringatan *"Google hasn't verified this app"*, klik **Advanced** > klik **Go to Untitled project (unsafe)**.
   - Klik **Allow**.
6. Salin **URL Aplikasi Web** (*Web app URL*) yang muncul. URL ini berakhiran `/exec`, contohnya:
   ```
   https://script.google.com/macros/s/AKfycbxAbCdEf123456789/exec
   ```

---

## Langkah 4: Hubungkan ke Website
Ada dua cara mudah untuk memasukkan URL tersebut ke website:

### Cara A: Melalui file `.env` (Direkomendasikan)
Buat file `.env` di folder utama proyek (jika belum ada), lalu tambahkan baris berikut:
```env
PUBLIC_SPMB_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxAbCdEf123456789/exec
```

### Cara B: Langsung di file konfigurasi proyek
Buka file `src/utils/config.ts`, cari bagian `SPMB_FORM_CONFIG`, lalu ganti nilai `googleScriptUrl` dengan URL Anda:
```ts
export const SPMB_FORM_CONFIG = {
  googleScriptUrl: 'https://script.google.com/macros/s/AKfycbxAbCdEf123456789/exec',
};
```

---

## Data yang Otomatis Masuk ke Spreadsheet
Setiap kali ada formulir disubmit di website, baris baru akan langsung terisi dengan kolom:
1. **No**: Nomor urut otomatis
2. **Waktu Pendaftaran**: Tanggal & jam submit (WIB)
3. **Nama Lengkap**: Nama calon murid
4. **Alamat**: Alamat tempat tinggal calon murid
5. **No. Telepon (WA)**: Nomor WhatsApp orang tua/wali
6. **Asal Sekolah**: TK/Sekolah asal pendaftar
7. **Alamat Sekolah**: Alamat TK/Sekolah asal
8. **Status**: Baru
