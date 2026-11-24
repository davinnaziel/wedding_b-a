// Google Apps Script untuk undangan Bagas & Atha
// Buat Google Sheet BARU pada akun Google yang ingin digunakan, lalu buka Extensions > Apps Script.
// Tempel seluruh kode ini. Sheet akan dibuat otomatis dengan nama "Ucapan".

const SHEET_NAME = 'Ucapan';
const HEADERS = ['Timestamp', 'Nama', 'Kehadiran', 'Ucapan'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function doGet() {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1).filter(row => row[1] || row[2] || row[3]).map(row => ({
    tanggal: row[0] instanceof Date
      ? Utilities.formatDate(row[0], Session.getScriptTimeZone(), 'dd MMM yyyy, HH:mm')
      : String(row[0] || ''),
    nama: String(row[1] || ''),
    kehadiran: String(row[2] || ''),
    ucapan: String(row[3] || '')
  })).reverse();
  return ContentService.createTextOutput(JSON.stringify(rows))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const nama = String(data.nama || '').trim();
    const kehadiran = String(data.kehadiran || '').trim();
    const ucapan = String(data.ucapan || '').trim();
    if (!nama || !kehadiran || !ucapan) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, message: 'Data belum lengkap' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    getSheet_().appendRow([new Date(), nama, kehadiran, ucapan]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
