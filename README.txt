UNDANGAN DIGITAL BAGAS & ATHA — PETUNJUK AWAL

ISI FOLDER
- index.html: halaman undangan.
- assets/image/full_edit_image/DSCF7578.JPG.jpeg: foto pasangan sementara.
- assets/image/logo.png: logo inisial BA untuk favicon/logo tab browser.
- assets/image/loading_logo.png: logo inisial BA untuk loading screen.
- assets/audio/musik.mp3: musik latar yang Anda unggah.
- Google_Apps_Script_Code.gs: backend untuk menyimpan RSVP dan ucapan ke Google Sheets.

FOTO
Foto pasangan yang Anda unggah sudah berada di folder assets. Saat ini baru ada satu foto, sehingga foto itu dipakai sementara pada cover/slideshow dan kedua profil mempelai. Untuk galeri yang bervariasi, tambahkan foto lain ke assets/image/full_edit_image/ lalu ubah daftar slides dan gallery di index.html. Logo inisial BA bernuansa cokelat, beige, dan floral sudah disertakan untuk loading screen dan favicon. Musik latar berada di assets/audio/musik.mp3 dan mulai diputar setelah tamu menekan tombol BUKA UNDANGAN, mengikuti aturan autoplay browser.

MENGHUBUNGKAN KE AKUN GOOGLE SHEETS BARU
1. Login ke akun Google yang BARU yang ingin dipakai untuk menyimpan data ucapan/RSVP.
2. Buat Google Sheets baru, misalnya: RSVP Undangan Bagas & Atha.
3. Dari spreadsheet tersebut, pilih Extensions / Ekstensi > Apps Script.
4. Hapus kode contoh di editor Apps Script, lalu salin seluruh isi file Google_Apps_Script_Code.gs ke editor. Simpan.
5. Pilih Deploy > New deployment. Klik ikon roda gigi, pilih Web app.
6. Execute as / Jalankan sebagai: Me. Who has access / Siapa yang memiliki akses: Anyone / Siapa saja. Ini diperlukan agar tamu bisa mengirim RSVP tanpa login Google.
7. Klik Deploy, berikan izin yang diminta, lalu salin URL Web app yang berakhiran /exec.
8. Buka index.html, cari `scriptURL: ''`, lalu tempel URL tersebut di antara tanda kutip. Contoh: scriptURL: 'https://script.google.com/macros/s/ID_DEPLOYMENT/exec',
9. Simpan index.html. Jika Anda mengubah kode Apps Script setelah deploy, buka Deploy > Manage deployments > Edit > pilih New version > Deploy.
10. Uji kirim satu ucapan percobaan dan pastikan baris baru muncul pada sheet bernama Ucapan.

CATATAN
- URL Apps Script lama sudah dilepas dari template agar data tidak terkirim ke akun lama.
- Jangan membagikan akses edit spreadsheet kepada publik. Cukup deploy Apps Script sebagai Web App.
- Formulir ini menyimpan nama, status kehadiran, ucapan, dan timestamp ke sheet Ucapan.
- Musik latar sudah disertakan di assets/audio/musik.mp3. Jika ingin mengganti musik, ganti file tersebut dengan MP3 baru menggunakan nama yang sama.
